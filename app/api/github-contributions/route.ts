import { NextResponse } from "next/server";

export const revalidate = 3600;

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionsCollection {
  contributionCalendar: {
    totalContributions: number;
    weeks: ContributionWeek[];
  };
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: ContributionsCollection;
    };
  };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      {
        error:
          "GitHub token or username not configured. Please set GITHUB_TOKEN and GITHUB_USERNAME environment variables.",
      },
      { status: 500 }
    );
  }

  const query = `
    query($userName:String!) {
      user(login: $userName){
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { userName: username },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data: GitHubResponse = await response.json();

    if (!data.data?.user?.contributionsCollection) {
      throw new Error("Invalid response from GitHub API");
    }

    const contributions =
      data.data.user.contributionsCollection.contributionCalendar;

    const formattedData = contributions.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level:
          day.contributionCount === 0
            ? 0
            : day.contributionCount < 5
            ? 1
            : day.contributionCount < 10
            ? 2
            : day.contributionCount < 15
            ? 3
            : 4,
      }))
    );

    return NextResponse.json({
      contributions: formattedData,
      totalContributions: contributions.totalContributions,
    });
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub contributions",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

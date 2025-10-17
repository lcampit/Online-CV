"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import ActivityCalendar from "react-activity-calendar";
import { useTheme } from "@/context/theme-context";

type ContributionData = {
  date: string;
  count: number;
  level: number;
};

type ApiResponse = {
  contributions: ContributionData[];
  totalContributions: number;
};

export default function GithubContributions() {
  const { ref } = useSectionInView("GitHub Activity", 0.5);
  const { theme } = useTheme();
  const [data, setData] = useState<ContributionData[] | null>(null);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github-contributions");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.error || "Failed to fetch GitHub contributions"
          );
        }
        const result: ApiResponse = await response.json();
        setData(result.contributions);
        setTotalContributions(result.totalContributions);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchContributions();
  }, []);

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <motion.section
      ref={ref}
      id="githubactivity"
      className="mb-28 scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>GitHub Activity</SectionHeading>
      
      <div className="max-w-[53rem] mx-auto mb-8">
        <p className="text-gray-700 dark:text-white/70 leading-relaxed">
          Track my coding journey through my GitHub contribution activity.
          This graph showcases my ongoing commitment to software development and open-source projects.
        </p>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-gray-600 dark:text-white/60">
            Loading contributions...
          </div>
        </div>
      )}

      {error && (
        <div className="max-w-[53rem] mx-auto">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <p className="text-red-600 dark:text-red-400">
              {error}
            </p>
            <p className="text-sm text-red-500 dark:text-red-500 mt-2">
              Please ensure GitHub credentials are properly configured.
            </p>
          </div>
        </div>
      )}

      {!isLoading && !error && data && (
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full overflow-x-auto px-4">
            <div className="inline-block min-w-full">
              <ActivityCalendar
                data={data}
                theme={explicitTheme}
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                hideColorLegend={false}
                hideMonthLabels={false}
                hideTotalCount={false}
                labels={{
                  totalCount: `{{count}} contributions in the last year`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <div className="bg-white dark:bg-white/10 rounded-lg px-6 py-3 borderBlack">
              <span className="font-semibold text-gray-900 dark:text-white">
                {totalContributions}
              </span>
              <span className="text-gray-600 dark:text-white/70 ml-2">
                Total Contributions
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}

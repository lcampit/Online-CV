import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import GithubContributions from "@/components/activity";
import Intro from "@/components/intro";
import LastReadings from "@/components/last-readings";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  const enableGitHubActivity =
    process.env.NEXT_PUBLIC_ENABLE_GITHUB_CONTRIBUTIONS === "true";

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      {enableGitHubActivity && <GithubContributions />}
      <Skills />
      <Experience />
      <LastReadings />
      <Contact />
    </main>
  );
}

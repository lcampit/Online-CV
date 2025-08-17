"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a <span className="font-bold">Computer Engineer</span>{" "}
        paired with great curiosity. My main desire is to develop useful
        programs and applications to solve problems and needs.{" "}
        <span className="font-bold">I love coding</span>{" "}
        and its problem solving aspect. As of now I&apos;m working as a Software
        Engineer in Italy. I love to discover new technologies and tools to help
        me become a better Developer. With time, I&apos;ve developed a soft spot
        for architecture design, infrastructure and everything DevOps related.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I spend my
        time playing video games, watching movies and having long walks. I also
        enjoy <span className="font-bold">learning new things</span>{" "}
        and I&apos;m constantly keeping myself updated with newsletters and
        development-related blogs. I am currently learning about{" "}
        <span className="font-bold">Kubernetes</span>{" "}
        and Linux Server management, as well as everything related to the
        Command Line Interface.
      </p>
    </motion.section>
  );
}

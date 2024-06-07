"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { lastReads } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Reading from "./reading";

export default function LastReadings() {
  const { ref } = useSectionInView("Recent Readings", 0.5);

  return (
    <section ref={ref} id="lastreadings" className="scroll-mt-28 mb-28">
      <SectionHeading>Recent Readings</SectionHeading>
      <div>
        {lastReads.map((reading, index) => (
          <React.Fragment key={index}>
            <Reading {...reading} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

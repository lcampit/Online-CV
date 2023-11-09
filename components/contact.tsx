"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:example@gmail.com" className="underline">
          example@gmail.com
        </a>{" "}
        or through the form below.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData: FormData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          className="px-4 h-14 rounded-lg borderBlack"
          placeholder="Your Email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your Message"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

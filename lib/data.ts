import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dotfiles from "@/public/dotfiles.png";
import onlinecv from "@/public/onlinecv.png";
import thesis from "@/public/thesis.png";
import thoughtsyncLogo from "@/public/thoughtsyncLogo.png";
import atomicHabits from "@/public/atomicHabits.jpg";
import microservicesPatterns from "@/public/microservicesPatterns.jpg";
import kubernetesInAction from "@/public/kubernetesInAction.jpg";

const enableGitHubActivity =
  process.env.NEXT_PUBLIC_ENABLE_GITHUB_CONTRIBUTIONS === "true";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  ...(enableGitHubActivity
    ? [
        {
          name: "GitHub Activity",
          hash: "#githubactivity",
        },
      ]
    : []),
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Recent Readings",
    hash: "#lastreadings",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Software Engineer @ Capgemini",
    location: "Rome, Italy",
    description:
      "Software Engineer for Capgemini, focusing on GoLang Microservices applications, Linux servers, Kubernetes and DevOps",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
  },
  {
    title: "Software Engineer @ Moveax",
    location: "Rome, Italy",
    description:
      "Software Engineer for Moveax, focusing on Microservices applications, Linux servers, DevOps and fullstack development",
    icon: React.createElement(FaReact),
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer @ Sara Assicurazioni",
    location: "Rome, Italy - Berlin, Germany",
    description:
      "Software Engineer in an Insurance Company, focusing on Cloud platforms as Salesforce and AWS.\nPartecipated at the Salesforce Bootcamp in Berlin, a series of intense studies and courses on the Salesforce platform where I obtained the Admin and Platform Developer certifications",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title:
      "Master Degree in Engineering in Computer Science + Erasmus Program @ TUE",
    location: "Rome, Italy - Eindhoven, Netherlands",
    description:
      "I graduated at La Sapienza University of Rome. My thesis describes a novel approach to malware analysis using deep learning language models.\nExperience enriched by Erasmus Program in Eindhoven, with courses focused on Machine Learning and Cybersecurity.\n I Completed the Excellence Program, consisting of extra project activities supported by a professor and his team, performing Malware similarities analysis using Neural Network Embeddings",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Bachelor Degree as Computer Engineer",
    location: "Rome, Italy",
    description:
      "I graduated as a Computer Engineer at La Sapienza University of Rome. My Thesis describes Malware Analysis using Neural Networks embeddings.\nI completed the Master Excellence Program, consisting of extra project activities supported by a professor and his team, developing Natural Language Processing tools for semantic analysis",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "ThoughtSync",
    description:
      "A CLI tool to edit notes from the terminal, built in Go. Write down thoughts and sync them with Git",
    tags: ["GoLang", "CLI", "Git", "Software Design", "Testing"],
    imageUrl: thoughtsyncLogo,
  },
  {
    title: "Dotfiles",
    description:
      "Configuration files for everything that runs on my development machine, packed up in a documented repository with automated installation",
    tags: ["Config", "Linux", "Shell", "Shell Script", "CI/CD"],
    imageUrl: dotfiles,
  },
  {
    title: "Online CV",
    description:
      "The very same website you are right on, built with React, TypeScript, Next.js and Tailwind, completed with Cypress testing",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: onlinecv,
  },
  {
    title: "Nomen Omen",
    description:
      "Neural Network model able to translate binary code into meaningful function names, helping reverse engineers in analyzing unknown executables.",
    tags: ["Python", "NLP", "Deep Learning"],
    imageUrl: thesis,
  },
] as const;

export const skillsData = [
  "Backend Development",
  "GoLang",
  "Java",
  "Python",
  "C",
  "C++",
  "Frontend Development",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "React",
  "Angular",
  "Tailwind",
  "Framer Motion",
  "Next.js",
  "Node.js",
  "Web Development",
  "Express",
  "GraphQL",
  "Protobuf",
  "gRPC",
  "REST",
  "Git",
  "Linux",
  "Bash Scripts",
  "Docker",
  "Containerization",
  "Kubernetes",
  "CI/CD",
  "Database management",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "DevOps",
  "AI modeling and development",
  "Tensorflow",
  "Scikit-learn",
  "PyTorch",
  "Keras",
  "Pandas",
  "Numpy",
] as const;

export const additionalSkillsData = [
  "English",
  "Italian",
  "Spanish",
  "Driving License & Property Car",
] as const;

export const lastReads = [
  {
    title: "Kubernetes In Action",
    description:
      "A detailed description of what is and how to use Kubernetes, including best practices and tips",
    tags: ["Kubernetes", "DevOps"],
    imageUrl: kubernetesInAction,
  },
  {
    title: "Microservices Patterns",
    description:
      "A detailed description of patterns and ToDos when creating a microservices application, featuring real coding samples",
    tags: ["Microservices Architecture", "Application Design"],
    imageUrl: microservicesPatterns,
  },
  {
    title: "Atomic Habits",
    description:
      "A self improvement book on how to create and stick to good habits",
    tags: ["Self improvement", "Habits"],
    imageUrl: atomicHabits,
  },
] as const;

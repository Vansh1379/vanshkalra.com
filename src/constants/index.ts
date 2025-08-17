import {
  css,
  chatpdf,
  docker,
  git,
  html,
  javascript,
  LinkShrink,
  mern,
  nextjs,
  postgres,
  prisma,
  recoil,
  Settle,
  tailwind,
  turborepo,
  typescript,
  WriteIt,
  Langchain,
  Llamaindex,
  Python,
} from "@/assets";

import Sommaire from "../assets/SommaireAI.png";
export const navLinks = [
  {
    id: "/",
    title: "About",
  },
  {
    id: "/Projects",
    title: "Projects",
  },
  {
    id: "/Work",
    title: "Work",
  },
  {
    id: "/Tech",
    title: "Tech",
  },
  {
    id: "/Contact",
    title: "Contact",
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Langchain",
    icon: Langchain,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: Python,
  },
  // {
  //   name: "Recoil",
  //   icon: recoil,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Mern",
  //   icon: mern,
  // },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Turborepo",
    icon: turborepo,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Rudra Infocom",
    date: "Currently Working Here", // You'll need to fill in the actual dates
    points: [
      "Developed an AI chatbot using Vercel AI to launch and manage Meta and Google marketing campaigns.",
      "Migrated the chatbot's core technology to LangGraph for enhanced capabilities.",
      "Implemented the chatbot with LlamaIndex to provide deep insights into Google and Meta campaigns.",
      "Created foundational libraries to streamline fetching and pushing campaign data, serving as the infrastructure for these products.",
      "Contributed to schema design and DevOps activities to support product development and deployment.",
    ],
  },
];

const projects = [
  {
    name: "Sommaire AI",
    description:
      "An AI based chatbot built using langchainJs, GroqAI, Vercel ai/sdk and many more that can help you solve your problems, find relevant image and videos and even generate followup questions.",
    isDeployed: false,
    deployedLink: "",

    image: Sommaire,
    github_link: "https://github.com/Vansh1379/Sommaira-ai",
  },
  {
    name: "Shoppr",
    description:
      "Web-based platform that allows users to pay their friends and family in a secure fashion. With Settle, settle all your payments.",
    isDeployed: false,
    deployedLink: "",

    image: Settle,
    github_link: "https://github.com/Pratham271/Settle",
  },
  {
    name: "V-Pay",
    description:
      "An AI chatbot that quickly scan your documents, youtube links and even website links to deliver the answers you need, saving you valuable time and frustration.",
    isDeployed: true,
    deployedLink: "https://chatvers.com",
    image: chatpdf,
    github_link: "https://github.com/Pratham271/Chatpdf",
  },
  {
    name: "Medium",
    description:
      "Web application that enables users to publish their thoughts and learnings as blogs and search other people blogs too.You can ask the inhouse AI to write a blog for you and it will get you title, content and even and image for you.",
    isDeployed: true,
    deployedLink: "https://write-with-ai.vercel.app/",

    image: WriteIt,
    github_link: "https://github.com/Pratham271/write.it",
  },
  {
    name: "Link Shrink",
    description:
      "Don't copy paste the large url just shrink it using Link-Shrink an in house link shortener built without using any external library.",
    isDeployed: true,
    deployedLink: "https://link-shrink-5el0.vercel.app/",
    image: LinkShrink,
    github_link: "https://github.com/Pratham271/Url-shortener-frontend",
  },
];

export { experiences, projects, technologies };
// services, technologies,

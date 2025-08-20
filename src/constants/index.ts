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
  tailwind,
  turborepo,
  typescript,
  WriteIt,
  Langchain,
  Llamaindex,
  Python,
} from "@/assets";

import Sommaire from "../assets/SommaireAI.png";
import Shoppr from "../assets/Shoppr.png";

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
  {
    id: "https://drive.google.com/file/d/12tyQ7A04zbw_ui3h_XZJJeF6uEBGjehk/view?usp=sharing",
    title: "Resume",
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
    date: "December 2022 - June 2023", // You'll need to fill in the actual dates
    points: [
      "Designed, developed, and deployed the official company website https://rudrainfo.co.in from scratch.",
      "uilt and contributed to 4+ client projects, boosting sales and customer engagement.",
      "Worked across the full stack using Next.js, PostgreSQL, Tailwind CSS, Node.js, and Express.js.",
      "Collaborated with teams to deliver scalable, user-friendly, and high-performance web applications.",
      "Contributed to schema design and DevOps activities to support product development and deployment.",
    ],
  },
];

const projects = [
  {
    name: "Sommaire AI",
    description:
      "Sommaire AI is an intelligent tool where users can upload any PDF and chat with it in natural language. Powered by the ChatGPT model on the backend, it delivers instant answers, summaries, and insights, making document understanding seamless and efficient.",
    isDeployed: false,
    deployedLink: "",

    image: Sommaire,
    github_link: "https://github.com/Vansh1379/Sommaira-ai",
  },
  {
    name: "Shoppr",
    description:
      "Shoppr’s UI is crafted to be visually stunning and highly interactive — blending modern aesthetics with intuitive navigation, responsive layouts, and seamless animations, while integrating secure Razorpay payments for a smooth, engaging shopping experience.",
    isDeployed: true,
    deployedLink: "https://shoppr-beta.vercel.app/home",

    image: Shoppr,
    github_link: "https://github.com/Vansh1379/shoppr",
  },
  {
    name: "V-Pay",
    description:
      "Web-based platform that allows users to pay their friends and family in a secure fashion. With Settle, settle all your payments.",
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

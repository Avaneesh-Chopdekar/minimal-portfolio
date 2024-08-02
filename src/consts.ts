import type { Site, Metadata, Socials } from "@types";
import type { TabPanel } from "@components/Skill.astro";

export const SITE: Site = {
  NAME: "Avaneesh Chopdekar",
  RESUME: "/avaneesh-chopdekar-resume.pdf",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My personal portfolio and blog made using Astro",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/avaneesh-chopdekar",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/avaneesh-chopdekar",
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/@HelloAvaneesh",
  },
];

export const skills = ["Web", "Mobile", "Backend", "Tools"];

export const webItems: TabPanel[] = [
  { name: "React.js", icon: "/icons/skills/web/react.svg" },
  { name: "Next.js", icon: "/icons/skills/web/next.svg" },
  { name: "Redux Toolkit", icon: "/icons/skills/web/redux-toolkit.svg" },
  { name: "Tanstack Query", icon: "/icons/skills/web/tanstack-query.svg" },
  { name: "Tailwind CSS", icon: "/icons/skills/web/tailwind.svg" },
  { name: "Framer Motion", icon: "/icons/skills/web/framer-motion.svg" },
  { name: "Jest", icon: "/icons/skills/web/jest.svg" },
  { name: "Cypress", icon: "/icons/skills/web/cypress.svg" },
];

export const mobileItems: TabPanel[] = [
  {
    name: "Kotlin + XML",
    icon: "/icons/skills/mobile/android-studio.svg",
  },
  {
    name: "Jetpack Compose",
    icon: "/icons/skills/mobile/jetpack-compose.svg",
  },
  { name: "React Native", icon: "/icons/skills/web/react.svg" },
  { name: "Expo", icon: "/icons/skills/mobile/expo.svg" },
  { name: "Flutter", icon: "/icons/skills/mobile/flutter.svg" },
  { name: "Flutter BLOC", icon: "/icons/skills/mobile/flutter.svg" },
  { name: "MVVM Architecture", icon: "/icons/skills/mobile/mvvm.svg" },
];

export const backendItems: TabPanel[] = [
  { name: "Express", icon: "/icons/skills/backend/express.svg" },
  { name: "Flask", icon: "/icons/skills/backend/flask.svg" },
  { name: "FastAPI", icon: "/icons/skills/backend/fastapi.svg" },
  { name: "Django", icon: "/icons/skills/backend/django.svg" },
  { name: "MySQL", icon: "/icons/skills/backend/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/skills/backend/postgres.svg" },
  { name: "MongoDB", icon: "/icons/skills/backend/mongodb.svg" },
  { name: "Redis", icon: "/icons/skills/backend/redis.svg" },
];

export const toolsItems: TabPanel[] = [
  { name: "Visual Studio Code", icon: "/icons/skills/tools/vscode.svg" },
  {
    name: "Android Studio",
    icon: "/icons/skills/mobile/android-studio.svg",
  },
  { name: "Git", icon: "/icons/skills/tools/git.svg" },
  { name: "Github", icon: "/icons/skills/tools/github.svg" },
  { name: "Docker", icon: "/icons/skills/tools/docker.svg" },
  { name: "Gemini API", icon: "/icons/skills/tools/gemini.svg" },
  { name: "Figma", icon: "/icons/skills/tools/figma.svg" },
  { name: "Google Analytics", icon: "/icons/skills/tools/ga4.svg" },
];

import type { Site, Metadata, Socials } from "@types";

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

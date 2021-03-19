export const config = {
  siteMeta: {
    title: "tantan-tanuki Blog Hub",
    teamName: "tantan-tanuki",
    description: "RSS based blog",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "SpecialThanks",
      href: "https://github.com/catnose99/team-blog-hub",
    },
  ],
};

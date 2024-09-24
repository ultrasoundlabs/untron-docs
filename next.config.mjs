import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra({
  basePath: "/untron-docs",
  assetPrefix: "/untron-docs/",
  images: {
    unoptimized: true,
  },
  output: "export",
});

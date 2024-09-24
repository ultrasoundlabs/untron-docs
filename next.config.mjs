import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/untron-docs" : "";

export default withNextra({
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
});

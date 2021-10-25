const path = require("path");

module.exports = {
  stories: [
    "../docs/**/*.stories.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-postcss",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../src/"),
      "@docs": path.resolve(__dirname, "../docs/src"),
    };
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"];
    return config;
  },
};

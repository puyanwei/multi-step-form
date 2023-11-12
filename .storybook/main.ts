import type { StorybookConfig } from "@storybook/nextjs"
import path from "path"

const config: StorybookConfig = {
  stories: ["../components/**/*.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname, "../")
      config.resolve.alias["@components"] = path.resolve(__dirname, "../components")
    }
    return config
  },
  staticDirs: ["../public"],
}

export default config

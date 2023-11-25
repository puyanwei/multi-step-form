import type { Preview } from "@storybook/react"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
          order: ['Atoms', 'Molecules', 'Compositions', 'Pages'],
          locales: 'en-US',
      }
  },
  },
}

export default preview

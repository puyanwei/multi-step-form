import type { Meta, StoryObj } from "@storybook/react"
import { Homepage as Component } from "./Homepage"

const meta = {
  title: "Pages/Homepage",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Homepage: Story = {
  render: () => (
      <Component />
  ),
}

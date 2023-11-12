import type { Meta, StoryObj } from "@storybook/react"
import { Button as Component } from "."

const meta = {
  title: "Atoms/Button",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Primary: Story = {
  render: () => <Component>Primary Button</Component>,
}

import type { Meta, StoryObj } from "@storybook/react"
import { Button as Component } from "./Button"

const meta = {
  title: "Atoms/Button",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Button: Story = {
  render: () => (
    <div className="flex flex-col items-start">
      <Component>Primary Button</Component>
      <Component theme="secondary">Secondary Button</Component>
    </div>
  ),
}

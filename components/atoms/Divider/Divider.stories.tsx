import type { Meta, StoryObj } from "@storybook/react"
import { Divider as Component } from "./Divider"

const meta = {
  title: "Atoms/Divider",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Divider: Story = {
  render: () => <Component className="py-4" />,
}

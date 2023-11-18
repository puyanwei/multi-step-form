import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox as Component } from "./Checkbox"

const meta = {
  title: "Atoms/Forms/Checkbox",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Checkbox: Story = {
  render: () => <Component />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { Input as Component } from "./Input"

const meta = {
  title: "Atoms/Forms/Input",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Input: Story = {
  render: () => <Component className="max-w-[300px]" />,
}

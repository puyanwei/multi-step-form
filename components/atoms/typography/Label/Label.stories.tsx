import type { Meta, StoryObj } from "@storybook/react"
import { Label as Component } from "./Label"

const meta = {
  title: "Atoms/Typography/Label",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Label: Story = {
  render: () => (
    <div className="flex flex-col items-start">
      <Component>First Name</Component>
    </div>
  ),
}

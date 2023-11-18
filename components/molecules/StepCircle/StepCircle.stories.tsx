import type { Meta, StoryObj } from "@storybook/react"
import { StepCircle as Component } from "./StepCircle"

const meta = {
  title: "Molecules/StepCircle",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const StepCircle: Story = {
  render: () => (
    <div className="space-y-4">
      <Component number={1} />
      <Component number={2} />
      <Component number={3} />
      <Component number={4} isActive={true} />
    </div>
  ),
}

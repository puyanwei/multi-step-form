import type { Meta, StoryObj } from "@storybook/react"
import { StepTitle as Component } from "./StepTitle"

const meta = {
  title: "Molecules/StepTitle",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const StepTitle: Story = {
  render: () => (
    <div className="space-y-4 bg-purplish-blue w-full p-4 rounded-md max-w-sm">
      <Component number={1}>YOUR INFO</Component>
    </div>
  ),
}

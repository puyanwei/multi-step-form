import type { Meta, StoryObj } from "@storybook/react"
import { Step1 as Component } from "./Step1"

const meta = {
  title: "Compositions/Content/Step1",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Step1: Story = {
  render: () => <Component />,
}

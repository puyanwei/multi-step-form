import type { Meta, StoryObj } from "@storybook/react"
import { StepBanner as Component } from "./StepBanner"
import { bannerData } from "@/shared/consts"

const meta = {
  title: "Compositions/Step Banner",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const StepBanner: Story = {
  render: () => <Component data={bannerData} />,
}

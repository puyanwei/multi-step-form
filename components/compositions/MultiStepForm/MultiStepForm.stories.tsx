import type { Meta, StoryObj } from "@storybook/react"
import { MultiStepForm as Component } from "./MultiStepForm"
import { StepBanner } from "../StepBanner/StepBanner"
import { bannerData } from "@/shared/consts"

const meta = {
  title: "Compositions/MultiStepForm",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const MultiStepForm: Story = {
  render: () => (
      <Component>
        <StepBanner data={bannerData} />
      </Component>
  ),
}

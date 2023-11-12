import type { Meta, StoryObj } from "@storybook/react"
import { Heading as Component } from "./Heading"

const meta = {
  title: "Atoms/Typography/Heading",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Heading: Story = {
  render: () => (
    <div className="flex flex-col items-start">
      <Component tag="h1">Heading h1</Component>
      <Component tag="h2">Heading h2</Component>
      <Component tag="h3">Heading h3</Component>
      <Component tag="h4">Heading h4</Component>
    </div>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Text as Component } from "./Text"

const meta = {
  title: "Atoms/Typography/Text",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Text: Story = {
  render: () => (
    <div className="flex flex-col items-start">
      <Component>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, nihil quia suscipit
        architecto itaque necessitatibus, recusandae sequi delectus, laboriosam culpa veniam!
        Numquam sequi nihil nemo quis doloribus a quidem itaque.
      </Component>
    </div>
  ),
}

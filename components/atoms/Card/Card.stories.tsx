import type { Meta, StoryObj } from "@storybook/react"
import { Card as Component } from "./Card"

const meta = {
  title: "Atoms/Card",
  component: Component,
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof Component>

export const Card: Story = {
  render: () => (
    <div className="space-y-4">
      <Component className="bg-purplish-blue text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores, ullam harum
        pariatur asperiores maxime nihil, dolorum rerum ea facere consequuntur dolorem natus,
        explicabo nisi optio! Exercitationem alias nobis itaque?
      </Component>
      <Component hasShadow>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores, ullam harum
        pariatur asperiores maxime nihil, dolorum rerum ea facere consequuntur dolorem natus,
        explicabo nisi optio! Exercitationem alias nobis itaque?
      </Component>
    </div>
  ),
}

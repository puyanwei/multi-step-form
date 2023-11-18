import type { Meta, StoryObj } from "@storybook/react"
import { Icon as Component } from "."
import { BackgroundSidebar } from "./BackgroundSideBar/BackgroundSidebar"
import { ThankYou } from "./ThankYou"
import { Advanced } from "./Advanced"
import { Arcade } from "./Arcade"
import { Pro } from "./Pro"
import { Tick } from "./Tick"

const meta: Meta<typeof Component> = {
  title: "Atoms/Icons",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Icons: Story = {
  render: () => (
    <div className="space-y-4">
      <Component icon={<BackgroundSidebar />} />
      <Component icon={<Advanced />} />
      <Component icon={<Arcade />} />
      <Component icon={<Pro />} />
      <Component icon={<ThankYou />} />
      <Component icon={<Tick />} />
    </div>
  ),
}

import { Component } from "@/shared/types"
import { BackgroundSidebarMobile } from "./BackgroundSidebarMobile"
import { BackgroundSidebarDesktop } from "./BackgroundSidebarDesktop"

interface BackgroundSidebarProps extends Component {}

export function BackgroundSidebar({ className = "", testId }: BackgroundSidebarProps) {
  return (
    <>
      <BackgroundSidebarMobile className="md:hidden" />
      <BackgroundSidebarDesktop className="sm: hidden md:block" />
    </>
  )
}

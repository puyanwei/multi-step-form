import { BackgroundSidebarMobile } from "./BackgroundSidebarMobile"
import { BackgroundSidebarDesktop } from "./BackgroundSidebarDesktop"

export function BackgroundSidebar() {
  return (
    <>
      <BackgroundSidebarMobile className="md:hidden" />
      <BackgroundSidebarDesktop className="sm: hidden md:block" />
    </>
  )
}

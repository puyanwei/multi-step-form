import { ReactNode } from "react"
import "./globals.css"
import Header from "./header"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  )
}

import { ReactNode } from "react"
import "./globals.css"
import Header from "./header"

import localFont from 'next/font/local'

const ubuntu = localFont({
  src: [
    {
      path: '../public/fonts/Ubuntu-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Ubuntu-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Ubuntu-Bold.ttf',
      weight: '700'
    },

  ],
  variable: '--font-ubuntu'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable} font-sans`}>
      <Header />
      <body>{children}</body>
    </html>
  )
}

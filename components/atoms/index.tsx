import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}
export function Button({ children }: ButtonProps) {
  return <button className="text-gray-200 bg-yellow-400">{children}</button>
}

import { ComponentWithChildren } from "@/shared/types"

interface ButtonProps extends ComponentWithChildren {}

export function Button({ children }: ButtonProps) {
  return <button className="text-gray-200 bg-yellow-400">{children}</button>
}

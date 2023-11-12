import { ComponentWithChildren } from "@/shared/types"

interface TextProps extends ComponentWithChildren {}

export function Text({ children }: TextProps) {
  return <p>{children}</p>
}

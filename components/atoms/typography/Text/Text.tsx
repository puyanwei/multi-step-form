import { ComponentWithChildren } from "@/shared/types"

interface TextProps extends ComponentWithChildren {}

export function Text({ children, className = "" }: TextProps) {
  return <p className={className}>{children}</p>
}

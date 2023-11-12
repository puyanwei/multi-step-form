import { ComponentWithChildren } from "@/shared/types"

interface LabelProps extends ComponentWithChildren {}

export function Label({ children }: LabelProps) {
  return <label>{children}</label>
}

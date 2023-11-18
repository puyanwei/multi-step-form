import { ComponentWithChildren } from "@/shared/types"

interface CardProps extends ComponentWithChildren {
  hasShadow?: boolean
}

export function Card({ className = "", testId, children, hasShadow = false }: CardProps) {
  const shadow = hasShadow ? "shadow" : ""
  const style = `rounded-md p-4 ${shadow}`
  return (
    <div className={`${style} ${className}`} data-testid={testId}>
      {children}
    </div>
  )
}

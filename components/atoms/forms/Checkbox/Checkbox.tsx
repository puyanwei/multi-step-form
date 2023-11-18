import { Component } from "@/shared/types"

interface CheckboxProps extends Component {}

export function Checkbox({ className = "", testId }: CheckboxProps) {
  const style = "h-6 w-6"
  return <input className={`${style} ${className}`} data-testid={testId} type="checkbox" />
}

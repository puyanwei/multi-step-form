import { Component } from "@/shared/types"

interface SwitchProps extends Component {}

export function Switch({ className = "", testId }: SwitchProps) {
  return <input className={className} data-testid={testId} type="checkbox" />
}

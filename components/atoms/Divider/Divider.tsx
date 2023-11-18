import { Component } from "@/shared/types"

interface DividerProps extends Component {}

export function Divider({ className = "", testId }: DividerProps) {
  return (
    <div className={`block border-t-[1px] border-light-gray ${className}`} data-testid={testId} />
  )
}

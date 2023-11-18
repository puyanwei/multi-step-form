import { Component } from "@/shared/types"

interface TickProps extends Component {}

export function Tick({ className = "", testId }: TickProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      className={className}
      data-testid={testId}
    >
      <path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1" />
    </svg>
  )
}

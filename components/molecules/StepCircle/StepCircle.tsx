import { Component } from "@/shared/types"

interface StepCircleProps extends Component {
  number: number
  isActive?: boolean
}

export function StepCircle({ className = "", testId, number, isActive = false }: StepCircleProps) {
  const base =
    "flex justify-item p-2 rounded-full w-8 h-8 items-center justify-center border-[1px] text-sm font-bold"
  const style = isActive
    ? `${base} bg-light-blue text-purplish-blue border-white`
    : `${base} text-white bg-purplish-blue border-light-gray`
  return (
    <div className={`${style} ${className}`} data-testid={testId}>
      {number}
    </div>
  )
}

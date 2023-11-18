import { Component } from "@/shared/types"

interface InputProps extends Component {}

export function Input({ className = "", testId }: InputProps) {
  const style = "border-[1px] border-light-gray rounded-md py-2 px-4"
  return <input className={`${style} ${className}`} data-testid={testId} type="text" />
}

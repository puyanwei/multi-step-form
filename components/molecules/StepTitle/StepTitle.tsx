import { ComponentWithChildren } from "@/shared/types"
import { Text } from "@/components/atoms/typography/Text/Text"

interface StepTitleProps extends ComponentWithChildren {
  number: number
}

export function StepTitle({ className = "", testId, number, children }: StepTitleProps) {
  return (
    <div className={`${className} flex flex-col text-xs uppercase`} data-testid={testId}>
      <Text className="text-light-gray">{`STEP ${number}`}</Text>
      <Text className="text-white font-bold">{children}</Text>
    </div>
  )
}

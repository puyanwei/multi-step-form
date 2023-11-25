import { Card } from "@/components/atoms/Card/Card"
import { bannerData } from "@/shared/consts"
import { ComponentWithChildren } from "@/shared/types"
import { StepBanner } from "../StepBanner/StepBanner"
import { Step1 } from "../content/Step1/Step1"

interface MultiStepFormProps extends ComponentWithChildren {}

export function MultiStepForm({ children, className, testId }: MultiStepFormProps) {
  return (
    <Card className="flex w-[60rem] h-[40rem]" hasShadow>
      <StepBanner className="flex-grow-1 w-1/3" data={bannerData} />
      <Step1 className="flex-grow-1 w-2/3" />
    </Card>
  )
}

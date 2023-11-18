import { Card } from "@/components/atoms/Card/Card"
import { bannerData } from "@/shared/consts"
import { ComponentWithChildren } from "@/shared/types"
import { StepBanner } from "../StepBanner/StepBanner"
import { Step1 } from "../content/Step1/Step1"

interface MultiStepFormProps extends ComponentWithChildren {}

export function MultiStepForm({ children, className, testId }: MultiStepFormProps) {
  return (
    <Card className="flex max-w-3xl" hasShadow>
      <StepBanner data={bannerData} />
      <Step1 />
    </Card>
  )
}

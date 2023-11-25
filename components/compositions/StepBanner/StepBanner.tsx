import { StepCircle } from "@/components/molecules/StepCircle/StepCircle"
import { StepTitle } from "@/components/molecules/StepTitle/StepTitle"
import { Component } from "@/shared/types"

export interface BannerData {
  step: number
  title: string
}

interface StepBannerProps extends Component {
  data: BannerData[]
}

export function StepBanner({ className = "", testId, data }: StepBannerProps) {
  return (
    <div className={`bg-sidebar-lg bg-no-repeat bg-cover rounded-md ${className}`} data-testid={testId}>
      <div className="flex flex-col p-8 gap-8 w-full h-full">
        {data.map(({ step, title }) => (
          <div className="flex" key={step}>
            <StepCircle className="mr-4" number={step} />
            <StepTitle number={step}>{title}</StepTitle>
          </div>
        ))}
      </div>
    </div>
  )
}

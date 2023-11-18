import { BackgroundSidebar } from "@/components/atoms/Icon/BackgroundSideBar/BackgroundSidebar"
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
    <div className={`relative ${className}`} data-testid={testId}>
      <div>
        <BackgroundSidebar />
      </div>
      <div className="flex flex-col p-8 gap-8">
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

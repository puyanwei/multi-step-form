import { ReactNode } from "react"

export type Component = {
  testId?: string
  className?: string
  style?: string
}

export interface ComponentWithChildren extends Component {
  children: ReactNode
}

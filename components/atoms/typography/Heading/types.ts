import { ComponentWithChildren } from "@/shared/types"

export interface HeadingProps extends ComponentWithChildren {
  tag: HeadingTags
}

type HeadingTags = "h1" | "h2" | "h3" | "h4"

export type HeadingStyleMap = Record<HeadingTags, string>

import { ComponentWithChildren } from "@/shared/types"

interface HeadingProps extends ComponentWithChildren {
  tag: headingTags
}

type headingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export function Heading({ children, tag }: HeadingProps) {
  const Tag = tag
  return <Tag>{children}</Tag>
}

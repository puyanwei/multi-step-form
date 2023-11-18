import { HeadingProps, HeadingStyleMap } from "./types"

export const headingStyleMap: HeadingStyleMap = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
} as const

export function Heading({ children, tag, className, testId }: HeadingProps) {
  const Tag = tag
  const style = `${headingStyleMap[tag]} ${className}`
  return (
    <Tag className={style} data-testid={testId}>
      {children}
    </Tag>
  )
}

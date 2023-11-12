import { ComponentWithChildren } from "@/shared/types"

interface ButtonProps extends ComponentWithChildren {
  onClick?: () => void
  theme?: keyof typeof themes
}

const themes = {
  primary: "bg-purplish-blue text-white p-4 rounded-md",
  secondary: "bg-none text-cool-gray py-4",
}

export function Button({ children, theme = "primary" }: ButtonProps) {
  return <button className={`${themes[theme]}`}>{children}</button>
}

import { createElement, ReactNode } from "react"

interface Props {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

export function Heading(props: Props) {
  return createElement(props.level, {
    className: "text-lg"
  }, props.children)
}
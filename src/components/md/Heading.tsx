import { createElement, ReactNode } from "react";

interface Props {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

const sizeMap = new Map<string, string>([
  ["h1", "text-xl"],
  ["h2", "text-lg"],
  ["h3", "text-base"],
  ["h4", "text-sm"],
  ["h5", "text-xs"],
  ["h6", "text-xs"],
]);
export function Heading(props: Props) {
  return createElement(
    props.level,
    {
      className: `md-title ${sizeMap.get(props.level)}`,
    },
    props.children
  );
}

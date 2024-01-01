import { DetailedHTMLProps } from "react";

export interface HtagProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size: "h1" | "h2" | "h3";
  text: string;
}

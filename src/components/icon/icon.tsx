import cn from "classnames";
import { FC, SVGProps } from "react";

type IconsType = {
  [key: string]: string;
};

const iconsName: IconsType = {
  joystic_advanced:
    "M10.5,11.6v0.6c0,0.1-0.1,0.1-0.1,0.1H9.4v0.9c0,0.1-0.1,0.1-0.1,0.1H8.7c-0.1,0-0.1-0.1-0.1-0.1v-1H7.6 c-0.1,0-0.1-0.1-0.1-0.2v-0.6c0-0.1,0.1-0.1,0.1-0.1h1v-0.9c0-0.1,0-0.1,0.1-0.1h0.6c0.1,0,0.1,0.1,0.1,0.1v0.9h0.9 C10.4,11.5,10.5,11.5,10.5,11.6z M13.7,11.4c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5 C14.2,11.6,14,11.4,13.7,11.4z M14.8,12.5L14.8,12.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5 C15.3,12.8,15.1,12.5,14.8,12.5z M14.8,10.3c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5 C15.3,10.5,15.1,10.3,14.8,10.3z M15.9,11.4c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5 C16.5,11.6,16.2,11.4,15.9,11.4z M23.9,12c0,6.6-5.4,12-12,12S0,18.6,0,12S5.4,0,12,0S23.9,5.4,23.9,12z M18,11.9 c0-1.7-1.3-2.9-3-2.9H8.9c-1.6,0-3,1.2-3,2.9c0,1.7,1.3,3,3,3H15C16.6,14.9,18,13.6,18,11.9z",
  joystic_arcade:
    "M11.3,10.7v3.6h1.2v-3.6H11.3z M11.3,10.7v3.6h1.2v-3.6H11.3z M10.1,16.1h1.2v-1.2h-1.2V16.1z M11.9,0 C5.3,0,0,5.3,0,11.9s5.3,11.9,11.9,11.9s11.9-5.3,11.9-11.9S18.5,0,11.9,0z M15.5,17.3c0,0.3-0.3,0.6-0.6,0.6H9 c-0.3,0-0.6-0.3-0.6-0.6v-6c0-0.3,0.3-0.6,0.6-0.6h2.4V9.4c-0.5-0.2-0.9-0.6-1.1-1.1c-0.3-0.9,0.2-2,1.1-2.3c0.9-0.3,2,0.2,2.3,1.1 c0.3,0.9-0.2,2-1.1,2.3v1.3h2.4c0.3,0,0.6,0.3,0.6,0.6V17.3z M11.3,14.3h1.2v-3.6h-1.2V14.3z M10.1,16.1h1.2v-1.2h-1.2V16.1z M10.1,14.9v1.2h1.2v-1.2H10.1z",
  joystic_pro:
    "M10.8,11c0,0.2-0.2,0.4-0.4,0.4H9.6v0.8c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4v-0.8H8 c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4h0.8V9.8c0-0.2,0.2-0.4,0.4-0.4c0.2,0,0.4,0.2,0.4,0.4v0.8h0.8 C10.6,10.6,10.8,10.7,10.8,11z M16.3,11c0,0.9-0.7,1.5-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6h0.1 C15.6,9.4,16.3,10.1,16.3,11z M15.5,11c0-0.4-0.4-0.8-0.8-0.8c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8 C15.2,11.8,15.5,11.4,15.5,11z M23.9,12c0,6.6-5.3,12-12,12S0,18.6,0,12S5.3,0,12,0S23.9,5.3,23.9,12z M17.9,9.8c0-1.1-0.9-2-2-2H8 c-1.1,0-2,0.9-2,2v4.3c0,0.8,0.5,1.6,1.3,1.9c0.7,0.3,1.6,0.1,2.1-0.5l1.7-1.8h1.8l1.7,1.8c0.5,0.6,1.4,0.8,2.1,0.5 c0.8-0.3,1.3-1.1,1.3-1.9V9.8z",
  check: "M8.7,18L0,9.3l3-3L8.7,12l12-12l3,3L8.7,18z",
};

type IconProps = Partial<SVGProps<SVGSVGElement>> & {
  name: string;
  viewBox?: string;
  className?: string;
  width?: string;
  height?: string;
  fill?: any;
  strokeWidth?: number | string;
};

export const Icon: FC<IconProps> = ({
  className,
  name,
  fill,
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  strokeWidth = 2,
}) => (
  <svg
    className={cn(className)}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
  >
    <path d={iconsName[name]} strokeWidth={strokeWidth} />
  </svg>
);

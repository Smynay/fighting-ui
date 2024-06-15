import styles from "./Typography.module.css";
import { createElement, DOMAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames/bind";

type TypographyProps = {
  component?: "p" | "span";
  size?: "l" | "m" | "s";
  align?: "left" | "center" | "right";
  weight?: "bold" | "normal" | "light";
  spacing?: 0 | 1 | 2 | 3;
  transform?: "capitalize" | "uppercase";
} & PropsWithChildren &
  DOMAttributes<HTMLParagraphElement>;

const cx = classNames.bind(styles);

export const Typography: FC<TypographyProps> = ({
  component = "p",
  size = "m",
  align = "left",
  weight = "normal",
  spacing = 0,
  transform,
  children,
  ...nativeProps
}: TypographyProps) => {
  const className = cx(
    `size-${size}`,
    `align-${align}`,
    `weight-${weight}`,
    `spacing-${spacing}`,
    { [`transform-${transform}`]: !!transform },
  );

  return createElement(
    component,
    {
      className,
      ...nativeProps,
    },
    children,
  );
};

import styles from "./Box.module.css";
import { FC, PropsWithChildren } from "react";
import classNames from "classnames/bind";
import { SpacingProps, useSpacing } from "../hooks";

type BoxProps = PropsWithChildren<BoxFlexProps>;

type BoxFlexProps = {
  display?: "flex";
  direction?: "column";
  alignItems?: "end" | "center";
  justify?: "center" | "between" | "around" | "evenly";
} & SpacingProps;

const cx = classNames.bind(styles);

export const Box: FC<BoxProps> = ({
  display,
  direction,
  alignItems,
  justify,
  children,
  ...spacingProps
}) => {
  const spacingClasses = useSpacing(spacingProps);

  const className = cx(spacingClasses, {
    [`display-${display}`]: display,
    [`direction-${direction}`]: direction,
    [`align-items-${alignItems}`]: alignItems,
    [`justify-${justify}`]: justify,
  });

  return <div className={className}>{children}</div>;
};

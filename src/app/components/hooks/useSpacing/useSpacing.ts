import "./useSpacing.css";
import classNames from "classnames";

type SpacingValues = "s" | "m" | "l";
type PossibleSpacers = "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my";

export type SpacingProps = Partial<Record<PossibleSpacers, SpacingValues>>;

export const useSpacing = ({ m, ml, mr, mt, mb, mx, my }: SpacingProps) => {
  return classNames({
    [`m-${m}`]: m,
    [`ml-${ml}`]: ml,
    [`mt-${mt}`]: mt,
    [`mr-${mr}`]: mr,
    [`mb-${mb}`]: mb,
    [`mx-${mx}`]: mx,
    [`my-${my}`]: my,
  });
};

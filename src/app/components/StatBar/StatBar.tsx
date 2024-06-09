import "./StatBar.css";
import { CSSProperties, FC } from "react";

export type StatBarProps = {
  color: string;
  value: number;
  size?: "md" | "sm";
  position: "left" | "right";
  length?: string;
};

const sizeMappings = {
  md: "32px",
  sm: "20px",
};

const positionMappingsBar = {
  left: {
    marginRight: "auto",
  },
  right: {
    marginLeft: "auto",
  },
};

const positionMappings = {
  left: {
    left: 0,
    textAlign: "left",
  },
  right: {
    right: 0,
    textAlign: "right",
  },
};

export const StatBar: FC<StatBarProps> = ({
  color,
  value,
  size = "md",
  position,
  length = "100%",
}) => {
  const width = Math.floor((value / 5) * 100);

  const barStyle = {
    height: sizeMappings[size],
    width: length,
    ...(positionMappingsBar[position] as CSSProperties),
  };

  const fillerStyle = {
    width: `${width}%`,
    background: color,
    ...(positionMappings[position] as CSSProperties),
  };

  const valueStyle = {
    ...(positionMappings[position] as CSSProperties),
  };

  return (
    <div className="StatBar" style={barStyle}>
      <div className="StatBar__filler" style={fillerStyle} />
      <div className="StatBar__value" style={valueStyle}>
        {value}
      </div>
    </div>
  );
};

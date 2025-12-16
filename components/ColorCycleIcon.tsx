"use client";


import { useState, ReactElement, cloneElement, isValidElement } from "react";


// Restrict icon to elements that accept common SVG props
interface ColorCycleIconProps {
icon: ReactElement<React.SVGProps<SVGSVGElement>>;
colors?: string[];
size?: number;
}


export default function ColorCycleIcon({
icon,
colors = ["#000000", "#ef4444", "#22c55e", "#3b82f6", "#a855f7"],
size = 32,
}: ColorCycleIconProps) {
const [colorIndex, setColorIndex] = useState(0);


const cycleColor = () => {
setColorIndex((prev) => (prev + 1) % colors.length);
};


if (!isValidElement(icon)) return null;


return (
  <button
  type="button"
  onClick={cycleColor}
  className="inline-flex items-center justify-center cursor-pointer"
  aria-label="Cycle icon color"
  >
    {cloneElement(icon, {
      color: colors[colorIndex],
      fill: colors[colorIndex],
      width: size,
      height: size,
    })}
  </button>
);
}
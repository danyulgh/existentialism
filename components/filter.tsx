'use client'

import { useEffect, useState } from "react";

const colors = [
  'orange-500/60',
  'blue-500',
]


export default function Filter() {
  const [color, setColor] = useState(() => 
    colors[Math.floor(Math.random() * colors.length)]
  );

  return <div className={`page-filter bg-${color}`}/>;
}
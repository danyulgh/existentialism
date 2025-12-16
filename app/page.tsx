'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const colors = [
  'orange-500/60',
  'blue-500',
  'red-500/60',
  'green-500/60',
  'purple-500',
  'pink-500/30',
  'yellow-500',
  'zinc-500',
  'white'
]

function Filter() {
  const [color, setColor] = useState(() => 
    colors[Math.floor(Math.random() * colors.length)]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const random = colors[Math.floor(Math.random() * colors.length)] 
      console.log(random)
      setColor(random) 
    }, 30000)
    return () => clearInterval(interval);
  },[])

  return <div className={`page-filter bg-${color}`}/>;
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-zinc-950 sm:items-start">
        <div className = "flex justify-center items-end h-[70vh] bg-zinc-950 w-full z-10">
          <Image
            src="/wait.png"
            alt="wait for the next bell."
            width={0}
            height={0}
            sizes="100vh"
            className="object-contain"
            style={{width: 'auto', height:'40vh'}}
          />
        </div>
        <div className="-mt-[70vh] h-[170vh] w-full sticky ">
          <div className="sticky top-0 min-h-screen flex items-center justify-center">
            <Image
              src="/desk.png"
              alt="[here lies a desk]"
              width={0}
              height={0}
              sizes="100vh"
              className="object-contain absolute"
              style={{width: 'auto', height:'50vh'}}
            />
            <Image
              src="/papers.png"
              alt="[here lies papers]"
              width={0}
              height={0}
              sizes="100vh"
              className="object-contain absolute -mt-[20vh]"
              style={{width: 'auto', height:'20vh'}}
            />
            <Image
              src="/crayons.png"
              alt="[here lies papers]"
              width={0}
              height={0}
              sizes="10vh"
              className="object-contain absolute -mt-[20vh] -rotate-12 ml-[21vh]"
              style={{width: 'auto', height:'10vh'}}
            />
            <div className="size-[25vw] bg-radial from-white via-zinc-500 to-zinc-950 to-70%"/>
          </div>
        </div>
      </main>
      <Filter />
    </div>
  );
}
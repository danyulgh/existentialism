'use client';
import ColorCycleIcon from "@/components/ColorCycleIcon";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiLightningTree } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { GiWillowTree } from "react-icons/gi";
import { GiBirchTrees } from "react-icons/gi";
import { GiBurningTree } from "react-icons/gi";
import { GiEvilTree } from "react-icons/gi";

const colors = [
  'bg-orange-500/60',
  'bg-blue-500',
  'bg-red-500/60',
  'bg-green-500/60',
  'bg-purple-500/80',
  'bg-pink-500/30',
  'bg-yellow-500',
  'bg-zinc-500/80',
]

const cyclecolors = [
  '#000000',
  '#3d251e',
  '#b22222',
  '#ffa500',
  '#ffff00',
  '#008000',
  '#0000ff',
  '#800080',
]

export default function Home() {
  const [modal, setModal] = useState(false);
  const [escape, setEscape] = useState(false);
  const [color, setColor] = useState('white');
  const [bellSound] = useState(typeof Audio !== "undefined" && new Audio("/bell.mp3"));
  const [crumpleSound] = useState(typeof Audio !== "undefined" && new Audio("/crumple.mp3"));

  const goEscape = () => setEscape(true);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  function Filter() {
    useEffect(() => {
      const interval = setInterval(() => {
        const random = colors[Math.floor(Math.random() * colors.length)] 
        console.log(random)
        if (!escape) setColor(random) 
      }, 20000)
      return () => clearInterval(interval);
    },[])

    return(
      <>
        <div className={`page-filter ${color}`}/>
        {color === 'bg-black' && 
          <p className="absolute text-white text-4xl lg:text-9xl font-mono z-9999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            What are you waiting for?
          </p>
        }
      </>
    );
  }

  const startBell = () => {
  if (bellSound)
    bellSound.play();
  }

  const startCrumple = () => {
  if (crumpleSound)
    crumpleSound.play();
  }

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      {modal && (
        <>
          <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.3}}
            className="fixed z-50 bg-white/20 backdrop-blur-md bg-opacity-25 left-0 right-0 top-0 bottom-0 flex justify-center items-center"
            onClick={() => {
              closeModal()
              startCrumple()
            }}
          >
            <div className=" h-[90vh] z-50 bg-white bg-opacity-25"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-black text-4xl font-mono p-4">Color!</p>
              <div className="w-full grid grid-cols-3 gap-4 p-4">
                <ColorCycleIcon
                  icon={<GiLightningTree  size={200}/>}
                  colors={cyclecolors}
                />
                <ColorCycleIcon
                  icon={<GiPalmTree  size={200}/>}
                  colors={cyclecolors}
                />
                <ColorCycleIcon
                  icon={<GiWillowTree  size={200}/>}
                  colors={cyclecolors}
                />
                <ColorCycleIcon
                  icon={<GiBirchTrees size={200}/>}
                  colors={cyclecolors}
                />
                <ColorCycleIcon
                  icon={<GiBurningTree  size={200}/>}
                  colors={cyclecolors}
                />
                <ColorCycleIcon
                  icon={<GiEvilTree  size={200}/>}
                  colors={cyclecolors}
                />
              </div>
              <div className="absolute z-50 bottom-0 right-0 lg:right-[25vw]">
                <Image
                  src="/crayola.png"
                  alt="[here lies papers]"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="object-contain select-none"
                  style={{width: 'auto', height:'30vh'}}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-zinc-950 sm:items-start">
        <div className = "flex justify-center items-end h-[70vh] bg-zinc-950 w-full z-10">
          <Image
            src="/wait.png"
            alt="wait for the next bell."
            width={0}
            height={0}
            sizes="100vh"
            className="object-contain select-none"
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
              className="object-contain absolute select-none"
              style={{width: 'auto', height:'50vh'}}
            />
            <Image
              src="/papers.png"
              alt="[here lies papers]"
              width={0}
              height={0}
              sizes="100vh"
              className="object-contain absolute -mt-[20vh] cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={openModal}
              style={{width: 'auto', height:'20vh'}}
            />
            <Image
              src="/crayola.png"
              alt="[here lies crayons]"
              width={0}
              height={0}
              sizes="10vh"
              className="object-contain absolute -mt-[20vh] -rotate-12 ml-[21vh] select-none"
              style={{width: 'auto', height:'10vh'}}
            />
            <div className="size-[25vw] bg-radial from-white via-zinc-500 to-zinc-950 to-70%"/>
          </div>
          <div className="mt-[50vh] h-[200vh] w-full sticky bg-zinc-950"/>
          <div className="flex items-center w-full justify-center bg-zinc-950 h-[80vh]">
            <Image
              src="/escape.png"
              alt="[here lies escape?]"
              width={0}
              height={0}
              sizes="100vh"
              className="object-contain absolute select-none cursor-pointer hover:scale-95 transition-transform duration-200"
              style={{width: 'auto', height:'60vh'}}
              onClick={() => {
                goEscape()
                setColor('bg-black')
                startBell()
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}
            />
            </div>
        </div>
      </main>
      <Filter />
    </div>
  );
}

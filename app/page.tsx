import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-black sm:items-start">
        <div className = "flex justify-center items-end h-[70vh] bg-black w-full z-10">
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
            <div className="size-[25vw] bg-radial from-white via-zinc-800 to-black to-70%"/>
          </div>
        </div>
      </main>
    </div>
  );
}

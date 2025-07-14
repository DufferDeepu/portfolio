import { Transition } from "@/components/transition";
import Image from "next/image";
import Links from "@/components/links";
import Button from "@/components/button";
import { Separator } from "@/components/ui/separator";
import Available from "@/components/button";

export default function Home() {
  return (
    <main className="min-h-screen pt-10 container items-center justify-center flex-col">
     <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-2.5 h-min justify-center overflow-visible relative w-full px-4 py-0">
        <div className="container max-w-[512px] flex flex-row">
          <Image
            src="/pfp.jpeg"
            alt="Deepesh"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="flex flex-col ml-2">
            <h1 className="text-base font-bold text-white">Deepesh</h1>
            <span className="text-sm text-gray-400">@dufferdeepu</span>
          </div>
        </div>
     </div>
     <div className="flex mt-8 flex-col max-w-[512px] mx-auto p-5 lg:p-0">
      <div className="container">
        <h1 className="text-xl font-bold text-gray-400">
          Hi I&apos;m Deepesh,<br />
          Building
          <Transition className="ml-2 text-white" words={["Secure","Modern", "Scalable", "Beautiful"]} />
          Web Application.
        </h1>
        <p className=" mt-5 text-l text-gray-400">
          I am a self-taught developer who loves to code and create things that work and scale.
        </p>
        <p className=" mt-3 text-l text-gray-400">
          Frontend, backend, mobile apps and DevOps — I enjoy doing it all.
        </p>
        <br />
        <Links />
        <div className="mt-10">
          <Available />
        </div>
      </div>
      <Separator className="my-8 bg-gray-600" />
      <div>
      </div>
     </div>
    </main>
  );
}

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
            src="/dp.jpg"
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
            Hey I&apos;m Deepesh,
            <br />
            Building
            <Transition
              className="ml-2 text-white"
              words={["Secure", "Modern", "Scalable", "Beautiful"]}
            />
            Web Application.
          </h1>
          <p className=" mt-5 text-l text-gray-400">
           I'm a self-taught developer who loves to code and build things that work — and scale.
          </p>
          <p className=" mt-3 text-l text-gray-400">
            From front-end and back-end to mobile apps and DevOps, I enjoy working across the stack and learning as I go.
          </p>
          <br />
          <Links />
          <div className="mt-10">
            <Available />
          </div>
        </div>
        <Separator className="my-8 bg-gray-600" />
        <div>
          <h1 className="text-base font-bold text-white">About</h1>
           <p className=" mt-5 text-l text-gray-400">
            I started out as a mechanical engineer, but my curiosity for tech led me to explore coding. As I built small projects and kept learning, I discovered a real passion for software development.
          </p>
          <p className=" mt-5 text-l text-gray-400">
            Now, I’m an aspiring software developer with internship experience, focused on building projects, writing clean code, and learning something new every day.
          </p>
           <Separator className="my-8 bg-gray-600" />
        </div>
        <div>
           <h1 className="text-base font-bold text-white">Experience</h1>
           <p>
            Quality Engineer - Stulz India Pvt Ltd
           </p>
           <p>
            SDE - Intern Prodigy Infotech
           </p>
        </div>
      </div>
    </main>
  );
}

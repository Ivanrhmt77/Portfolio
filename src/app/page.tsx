"use client";

import WorkStatus from "@/components/work-status";
import { techStack } from "@/data/tech-stack";
import Image from "next/image";
import toast from "react-hot-toast";
import { TbDownload } from "react-icons/tb";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-3 bg-background-surface h-full border-2 border-border rounded-xl p-6 flex flex-col items-center gap-6">
        <Image
          src="/images/profile.webp"
          alt="Logo"
          width={216}
          height={216}
          className="w-full max-w-[216px] h-auto  bg-foreground rounded-xl object-cover"
        />
        <WorkStatus variant="available" />
        <div className="h-px w-full bg-border" />
        <h5>Tech Stack</h5>
        <div className="grid grid-cols-5 gap-x-3.5 gap-y-6 w-full">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-full"
            >
              <Image
                key={index}
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                title={tech.name}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-border" />
        <button
          className="bg-foreground text-background-surface w-full py-3 rounded-xl cursor-pointer flex items-center justify-center gap-4 hover:bg-foreground-surface"
          onClick={() => toast.error("CV is not available at the moment.")}
        >
          <TbDownload className="w-6 h-auto" />
          <p className="font-bold">Download CV</p>
        </button>
      </div>
      <div className="col-span-9 bg-background-surface h-full border-2 border-border rounded-xl p-6">
        <h2>About Me</h2>
      </div>
    </div>
  );
}

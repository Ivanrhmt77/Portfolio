"use client";

import ExplorationCard from "@/components/exploration-card";
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
      <div className="col-span-9 bg-background-surface h-full border-2 border-border rounded-xl p-6 flex flex-col gap-6">
        <h2>About Me</h2>
        <p className="text-justify">
          Hello! My name is Ivan Rahmat Prakasa. I am a dedicated D4 Informatics
          Engineering student at the Electronic Engineering Polytechnic
          Institute of Surabaya (EEPIS), class of 2023. I’m originally from
          Kepahiang, Bengkulu, Indonesia. I have a strong passion for technology
          with interests in problem-solving, crafting intuitive UI/UX designs,
          and exploring Artificial Intelligence. My current career goal is to
          become a Fullstack Mobile Developer, creating impactful and
          user-friendly applications from concept to deployment. I am committed
          to continuous learning and thrive on challenges that push me to grow
          as a developer and innovator.
        </p>
        <div className="h-0.5 w-full bg-border" />
        <h2>What I'm Exploring</h2>
        <div className="w-full h-full flex gap-6">
          <ExplorationCard
            src="/icons/exploration/mobile-dev.svg"
            title="Mobile Development"
            description="Creating high-quality apps from frontend to backend, ensuring smooth performance and scalability."
          />
          <ExplorationCard
            src="/icons/exploration/ui-ux.svg"
            title="UI/UX Design"
            description="Designing intuitive, visually appealing interfaces that enhance user engagement."
          />
          <ExplorationCard
            src="/icons/exploration/ai-mobile.svg"
            title="AI for Mobile Apps"
            description="Integrating AI to add smart, personalized, and innovative features to mobile applications."
          />
        </div>
      </div>
    </div>
  );
}

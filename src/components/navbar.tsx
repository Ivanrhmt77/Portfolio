"use client";

import {
  FaRegUser,
  FaUser,
  FaRegClock,
  FaClock,
  FaRegFolder,
  FaFolderOpen,
  FaRegEnvelope,
  FaEnvelope,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const textClass = (active: boolean) =>
    `${active ? "text-accent font-bold" : "text-foreground-surface"}`;

  const iconClass = (active: boolean) =>
    `text-lg  ${active ? "text-accent" : "text-foreground-surface"}`;

  const iconGlowStyle = (active: boolean) =>
    active
      ? { filter: "drop-shadow(0px 0px 5px var(--tw-color-accent, #22d3ee))" }
      : {};

  return (
    <nav className="h-14 py-2 px-4 flex gap-4 items-center justify-center bg-background-surface border border-border rounded-xl">
      <a
        href="/"
        className="flex justify-center items-center w-32 h-full gap-3 rounded-lg hover:bg-background"
      >
        {isActive("/") ? (
          <FaUser className={iconClass(true)} style={iconGlowStyle(true)} />
        ) : (
          <FaRegUser className={iconClass(false)} />
        )}
        <p className={textClass(isActive("/"))}>About</p>
      </a>

      <div className="h-full w-px bg-border" />

      <a
        href="/journey"
        className="flex justify-center items-center w-32 h-full gap-3 rounded-lg hover:bg-background"
      >
        {isActive("/journey") ? (
          <FaClock className={iconClass(true)} style={iconGlowStyle(true)} />
        ) : (
          <FaRegClock className={iconClass(false)} />
        )}
        <p className={textClass(isActive("/journey"))}>Journey</p>
      </a>

      <div className="h-full w-px bg-border" />

      <a
        href="/works"
        className="flex justify-center items-center w-32 h-full gap-3 rounded-lg hover:bg-background"
      >
        {isActive("/works") ? (
          <FaFolderOpen
            className={iconClass(true)}
            style={iconGlowStyle(true)}
          />
        ) : (
          <FaRegFolder className={iconClass(false)} />
        )}
        <p className={textClass(isActive("/works"))}>Works</p>
      </a>

      <div className="h-full w-px bg-border" />

      <a
        href="/contact"
        className="flex justify-center items-center w-32 h-full gap-3 rounded-lg hover:bg-background"
      >
        {isActive("/contact") ? (
          <FaEnvelope className={iconClass(true)} style={iconGlowStyle(true)} />
        ) : (
          <FaRegEnvelope className={iconClass(false)} />
        )}
        <p className={textClass(isActive("/contact"))}>Contact</p>
      </a>
    </nav>
  );
}

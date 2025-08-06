"use client";

import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

type DeployInfo = {
  lastDeploy: string;
};

export default function Footer() {
  const [deployTime, setDeployTime] = useState<string | null>(null);

  useEffect(() => {
    fetch("/deploy-info.json")
      .then((res) => res.json())
      .then((data: DeployInfo) => {
        const date = new Date(data.lastDeploy);
        setDeployTime(
          date.toLocaleString("en-US", {
            dateStyle: "medium",
          })
        );
      });
  }, []);

  return (
    <footer className="py-8">
      <div className="max-w-[1160px] mx-auto px-4 flex w-full gap-6 items-center">
        <div>
          {deployTime ? (
            <p className="caption whitespace-nowrap">Updated: {deployTime}</p>
          ) : (
            <p className="caption whitespace-nowrap">Loading deploy time...</p>
          )}
        </div>

        <hr className="border border-border w-full" />

        <p className="caption whitespace-nowrap">
          © 2025 Ivan Rahmat Prakasa. All rights reserved.
        </p>

        <hr className="border border-border w-full" />

        <div className="text-foreground flex gap-1">
          <a
            href="https://www.linkedin.com/in/ivan-rahmat-prakasa-450737308/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-foreground-surface" />
          </a>
          <a
            href="https://github.com/Ivanrhmt77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-2xl hover:text-foreground-surface" />
          </a>
          <a
            href="https://www.facebook.com/ivan.rahmatprakasa.7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="text-2xl hover:text-foreground-surface" />
          </a>
          <a
            href="https://www.instagram.com/ivanrhmt_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-2xl hover:text-foreground-surface" />
          </a>
        </div>
      </div>
    </footer>
  );
}

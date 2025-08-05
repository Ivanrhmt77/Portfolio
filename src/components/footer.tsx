"use client";

import { useEffect, useState } from "react";

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
      <div className="max-w-[1160px] mx-auto px-4">
        <div>
          {deployTime ? (
            <p className="caption">Updated: {deployTime}</p>
          ) : (
            <p className="caption">Memuat waktu deploy...</p>
          )}
        </div>
      </div>
    </footer>
  );
}

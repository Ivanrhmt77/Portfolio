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
    <footer className="text-sm text-gray-400 text-center py-6">
      {deployTime ? (
        <p>Updated: {deployTime}</p>
      ) : (
        <p>Memuat waktu deploy...</p>
      )}
    </footer>
  );
}

"use client";
import "./LoadingScreen.css";
import useInterval from "@/hooks/useInterval";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useInterval(
    () => {
      if (document.readyState !== "complete")
        setProgress(progress + (100 - progress) * 0.005);
      else setProgress(progress + 0.5);
    },
    progress >= 100 ? null : 10
  );

  useEffect(() => {
    if (progress >= 100 && document.readyState === "complete") {
      document.documentElement.classList.remove("loading");
    }
  }, [progress]);

  return (
    <aside id="loading-screen">
      <div
        className="loader"
        style={{ "--enlarge": `${1 + (progress / 100) * (progress / 100)}` }}
      >
        <div className="icon">
          <Logo />
        </div>
        <div className="icon progress" style={{ width: `${progress}%` }}>
          <Logo />
        </div>
      </div>
    </aside>
  );
}

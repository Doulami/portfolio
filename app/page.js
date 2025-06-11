"use client";

import { useEffect, useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import GPTCard from "./components/GPTCard";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 3500); // intro duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full h-full bg-zinc-900 text-white">
      {!showMain ? (
        <IntroOverlay onFinish={() => setShowMain(true)} />
      ) : (
        <GPTCard />
      )}
    </main>
  );
}

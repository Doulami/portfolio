"use client";

import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("./components/CubeScene"), { ssr: false });

export default function HomePage() {
  const [showCube, setShowCube] = useState(false);

  return (
    <>
      {!showCube && <IntroOverlay onFinish={() => setShowCube(true)} />}
      {showCube && <CubeScene />}
    </>
  );
}
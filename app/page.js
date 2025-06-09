"use client";

import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
 import FakeCubeScene from "./components/FakeCubeScene";

 
export default function HomePage() {
  const [showCube, setShowCube] = useState(false);

  return (
    <>
      {!showCube && <IntroOverlay onFinish={() => setShowCube(true)} />}
      {showCube && <FakeCubeScene />}
    </>
  );
}
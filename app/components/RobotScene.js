
"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AnimatedRobot from "./AnimatedRobot";



export default function RobotScene() {
  return (
        <div className="relative w-full h-full">
      {/* 🔵 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/robotbg.png')] bg-no-repeat bg-bottom bg-contain opacity-50"
        style={{ pointerEvents: "none" }}
      />

      {/* 🟣 CANVAS LAYER */}
      <Canvas
        style={{ width: "100%", height: "100%", background: "transparent";    position: "relative",  zIndex: 10, }}
  camera={{ position: [0, 0.8, 3.5], fov: 80 }}
      >
  <ambientLight intensity={0.4} />
  <directionalLight position={[2, 2, 2]} />
  <Suspense fallback={null}>
    <AnimatedRobot scale={1.8} position={[0, -1.2, 0]} />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

  </Suspense>
        {/* your robot goes here */}
      </Canvas>
    </div>
 

  );
}


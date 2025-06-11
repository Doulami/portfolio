
"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AnimatedRobot from "./AnimatedRobot";

export default function RobotScene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <AnimatedRobot scale={1} position={[0, -1, 0]} />
      </Suspense>
    </Canvas>
  );
}
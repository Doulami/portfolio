
"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AnimatedRobot from "./AnimatedRobot";


export default function RobotScene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, -1, 0]} />

      <Suspense fallback={null}>
        <AnimatedRobot scale={2.2} position={[0, -1, 0]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

      </Suspense>
      
    </Canvas>
  );
}


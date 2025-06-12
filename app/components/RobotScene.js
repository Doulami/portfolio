
"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AnimatedRobot from "./AnimatedRobot";



export default function RobotScene() {
  return (
 <Canvas
  style={{ width: "100%", height: "100%", background: "transparent" }}
  camera={{ position: [0, 0.8, 3.5], fov: 80 }}
>
  <ambientLight intensity={0.4} />
  <directionalLight position={[2, 2, 2]} />
  <Suspense fallback={null}>
    <AnimatedRobot scale={1.8} position={[0, -1.2, 0]} />
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

  </Suspense>
</Canvas>

  );
}


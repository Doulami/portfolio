// app/components/CubeScene.js
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Face({ position, rotation, color }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function CubeScene() {
  const group = useRef();

  return (
    <div className="fixed inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <group ref={group}>
          {/* Front */}
          <Face position={[0, 0, 1]} rotation={[0, 0, 0]} color="white" />
          {/* Back */}
          <Face position={[0, 0, -1]} rotation={[0, Math.PI, 0]} color="#ccc" />
          {/* Left */}
          <Face position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]} color="#ddd" />
          {/* Right */}
          <Face position={[1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} color="#ddd" />
          {/* Top */}
          <Face position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} color="#eee" />
          {/* Bottom */}
          <Face position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} color="#eee" />
        </group>
      </Canvas>
    </div>
  );
}

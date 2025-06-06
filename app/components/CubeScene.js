'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Face({ position, rotation, color }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function CubeScene() {
  const group = useRef(null);

  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate />

      <group ref={group} rotation={[0.4, 0.4, 0]}>
        <Face position={[0, 0, 1]} rotation={[0, 0, 0]} color="#007aff" />
        <Face position={[0, 0, -1]} rotation={[0, Math.PI, 0]} color="#34d399" />
        <Face position={[1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} color="#facc15" />
        <Face position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]} color="#f87171" />
        <Face position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]} color="#a78bfa" />
        <Face position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} color="#fb923c" />
      </group>
    </Canvas>
  );
}

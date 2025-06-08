'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function Face({ position, rotation, texture }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

export default function CubeScene() {
  const group = useRef(null);

  // Load textures (add your 4 images in /public/textures/)
  const textures = useLoader(TextureLoader, [
    '../public/textures/face1.png',
    //'/textures/back.jpg',
   // '/textures/left.jpg',
    //'/textures/right.jpg',
  ]);

  return (
    <Canvas camera={{ position: [4, 0, 6], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={1.5}
      />

      <group ref={group} rotation={[0, 0, 0]}>
        <Face position={[0, 0, 1]} rotation={[0, 0, 0]} texture={textures[0]} />
        <Face position={[0, 0, -1]} rotation={[0, Math.PI, 0]} texture={textures[0]} />
        <Face position={[-1, 0, 0]} rotation={[0, Math.PI / 2, 0]} texture={textures[0]} />
        <Face position={[1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} texture={textures[0]} />
      </group>
    </Canvas>
  );
}

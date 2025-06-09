"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

// Face info
const faceData = [
  {
    id: "front",
    position: [0, 0, 1],
    rotation: [0, 0, 0],
    color: "#0f1e17",
    label: "CTO / Developer",
  },
  {
    id: "right",
    position: [1, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    color: "#11303d",
    label: "Entrepreneur",
  },
  {
    id: "back",
    position: [0, 0, -1],
    rotation: [0, Math.PI, 0],
    color: "#1b103f",
    label: "Multiskill / Ideas",
  },
  {
    id: "left",
    position: [-1, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    color: "#251b2e",
    label: "Other",
  },
];

function Face({ position, rotation, color, label }) {
  const { viewport } = useThree();

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshStandardMaterial
          color={color}
          side={THREE.DoubleSide}
          transparent={false}
        />
      </mesh>

      {/* Title centered on each face */}
      <Html position={[0, 0, 0.01]}>
        <h2
          style={{
            color: "#00ffcc",
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          {label}
        </h2>
      </Html>
    </group>
  );
}

export default function CubeScene() {
  const group = useRef();
  const [faceIndex, setFaceIndex] = useState(0);

  const rotateToFace = (index) => {
    const angle = -(index * Math.PI) / 2;
    if (group.current) {
      group.current.rotation.y = angle;
    }
  };

  useEffect(() => {
    rotateToFace(faceIndex);
  }, [faceIndex]);

  // Handle arrow keys
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight") {
      setFaceIndex((prev) => (prev + 1) % faceData.length);
    } else if (e.key === "ArrowLeft") {
      setFaceIndex((prev) => (prev - 1 + faceData.length) % faceData.length);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <group ref={group}>
          {faceData.map((face, idx) => (
            <Face
              key={face.id}
              position={face.position}
              rotation={face.rotation}
              color={face.color}
              label={face.label}
            />
          ))}
        </group>
      </Canvas>

      {/* DOM-based next button (top-right of screen) */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setFaceIndex((faceIndex + 1) % faceData.length)}
          style={{
            padding: "10px 14px",
            backgroundColor: "#00ff88",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ➤ Next
        </button>
      </div>
    </div>
  );
}

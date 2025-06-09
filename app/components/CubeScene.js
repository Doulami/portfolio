"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";

// Face data
const faceData = [
  { id: "front", position: [0, 0, 1], rotation: [0, 0, 0], color: "#0f1e17", label: "CTO / Developer" },
  { id: "right", position: [1, 0, 0], rotation: [0, -Math.PI / 2, 0], color: "#11303d", label: "Entrepreneur" },
  { id: "back", position: [0, 0, -1], rotation: [0, Math.PI, 0], color: "#1b103f", label: "Multiskill / Ideas" },
  { id: "left", position: [-1, 0, 0], rotation: [0, Math.PI / 2, 0], color: "#251b2e", label: "Other" },
];

function Face({ position, rotation, color, label, onNext }) {
  const { viewport } = useThree();

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshStandardMaterial color={color} side={THREE.DoubleSide} />
      </mesh>

      {/* Top-right HTML button */}
      <Html position={[viewport.width / 2 - 1.2, viewport.height / 2 - 0.6, 0.01]}>
        <button
          onClick={onNext}
          style={{
            padding: "8px 12px",
            background: "#00ff88",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ➤ Next
        </button>
      </Html>

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

  // Rotate to selected face
  useEffect(() => {
    rotateToFace(faceIndex);
  }, [faceIndex]);

  // Arrow key navigation
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
              onNext={() => setFaceIndex((faceIndex + 1) % faceData.length)}
            />
          ))}
        </group>
      </Canvas>
    </div>
  );
}

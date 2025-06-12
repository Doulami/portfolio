"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function AnimatedRobot(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/Animation_Agree_Gesture_withSkin.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[Object.keys(actions)[0]]?.play(); // auto-play first animation
  }, [actions]);


  return (
    <group {...props} ref={group}>
      {/* Robot Model */}
      <primitive object={scene} />

      {/* Glow Sphere */}
      <mesh position={[0, 0.5, -1]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.1} />
      </mesh>

      {/* Glow Light */}
      <pointLight
        color="#00CFFF"
        intensity={2}
        distance={8}
        position={[0, 1.5, 2]}
        castShadow={false}
      />
    </group>
  );
}

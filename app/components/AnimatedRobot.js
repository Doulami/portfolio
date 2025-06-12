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

      {/* Glow floor under robot */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
        <circleGeometry args={[2.5, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.08} />
      </mesh>

      {/* Background glow sphere */}
      <mesh position={[0, 0.1, -1.5]}>
        <sphereGeometry args={[3.2, 64, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.1} />
      </mesh>

      {/* Main robot model */}
      <primitive object={scene} />

      {/* Glow light */}
      <pointLight
        color="#00CFFF"
        intensity={1.2}
        distance={6}
        position={[0, 1.5, 2.5]}
        castShadow={false}
      />
    </group>
  );
}

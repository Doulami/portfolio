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
    <mesh position={[0, 0.2, -1]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.2} />
      </mesh>

      {/* Hologram-style Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <circleGeometry args={[2.8, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.05} />
      </mesh>

      {/* Glow Light */}
      <pointLight
        color="#00CFFF"
        intensity={1.4}
        distance={4.5}
        position={[0, 1.2, 1.2]}
      />

    </group>
  );
}

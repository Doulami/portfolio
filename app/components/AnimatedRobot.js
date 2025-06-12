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
      <mesh position={[0, -1.5, -2]}>
        <sphereGeometry args={[3.5, 64, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <circleGeometry args={[5, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.05} />
      </mesh>


      {/* Glow Light */}
      <pointLight
        color="#00CFFF"
        intensity={1.2}
        distance={10}
        position={[0, 2, -4]} // behind and above
        castShadow={false}
      />
    </group>
  );
}

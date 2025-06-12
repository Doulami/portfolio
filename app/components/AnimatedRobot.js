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
    <>
      {/* Robot model */}
     <primitive ref={group} object={scene} {...props} />

      {/* Glow sphere behind robot */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.15} />
      </mesh>

      {/* Point light for glow */}
      <pointLight
        color="#00CFFF"
        intensity={1.5}
        distance={6}
        position={[0, 0.5, 1]}
      />
    </>
  )
}

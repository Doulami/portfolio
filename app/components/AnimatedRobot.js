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

  return <primitive ref={group} object={scene} {...props} />;
}
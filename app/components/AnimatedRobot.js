"use client";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function AnimatedRobot(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/Animation_Agree_Gesture_withSkin.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !animations.length) return;

    const wakeUp = actions["WakeUp"];
    const idle = actions["Idle"];

    if (wakeUp && idle) {
      wakeUp.setLoop(THREE.LoopOnce);
      wakeUp.clampWhenFinished = true;
      wakeUp.reset().play();

      // Wait for WakeUp duration then play Idle
      const wakeUpDuration = wakeUp.getClip().duration * 1000;

      const timeout = setTimeout(() => {
        idle.reset().fadeIn(0.5).play();
      }, wakeUpDuration);

      return () => clearTimeout(timeout);
    } else {
      // fallback: just play first available
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions, animations]);

  return (
    <group {...props} ref={group}>
      <primitive object={scene} />
    </group>
  );
}

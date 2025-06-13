"use client";

import { useEffect, useState } from "react";
import RobotScene from "./RobotScene";
import FakeGPTChatBox from "./FakeGPTChatBox";

export default function CardRight({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(flipOverride);
  }, [flipOverride]);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#F9FAFB] text-black p-6">
      {!flipped ? (
        <div className="w-full h-full flex items-center justify-center">
          <RobotScene />
        </div>
      ) : (
        <FakeGPTChatBox />
      )}
    </div>
  );
}

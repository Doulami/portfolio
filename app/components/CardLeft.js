"use client";

import { useEffect, useState } from "react";
import IntroPanel from "./IntroPanel";
import PortfolioContent from "./PortfolioContent";

export default function CardLeft({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(flipOverride);
  }, [flipOverride]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0f172a] text-white p-6 overflow-y-auto">
      <div className="w-full max-w-3xl">
        {!flipped ? <IntroPanel /> : <PortfolioContent />}
      </div>
    </div>
  );
}

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
    <div className="w-full h-full flex items-start justify-start overflow-y-auto p-6 bg-white text-black">
      <div className="w-full max-w-4xl">
        {!flipped ? <IntroPanel /> : <PortfolioContent />}
      </div>
    </div>
  );
}

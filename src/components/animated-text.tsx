"use client";

import { useEffect, useState } from "react";

export function AnimatedText() {
  const [animatedText, setAnimatedText] = useState("");

  const fullText = "Understand conversations like never before";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setAnimatedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-2xl md:text-3xl text-gray-300 mb-10 h-10 font-light">
      {animatedText}
      <span className="animate-pulse text-cyan-400">|</span>
    </div>
  );
}

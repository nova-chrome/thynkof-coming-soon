"use client";

import { useEffect, useMemo, useState } from "react";

export function AnimatedText() {
  const phrases = useMemo(
    () => [
      "Understand conversations like never before",
      "Remember What Matters",
    ],
    []
  );
  const [animatedText, setAnimatedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && animatedText.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setAnimatedText(currentPhrase.slice(0, animatedText.length + 1));
      }, 50);
    } else if (!isDeleting && animatedText.length === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && animatedText.length > 0) {
      timer = setTimeout(() => {
        setAnimatedText(currentPhrase.slice(0, animatedText.length - 1));
      }, 30);
    } else if (isDeleting && animatedText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [animatedText, isDeleting, phraseIndex, phrases]);

  return (
    <div className="text-2xl md:text-3xl text-gray-300 mb-10 h-10 font-light">
      {animatedText}
      <span className="animate-pulse text-cyan-400">|</span>
    </div>
  );
}

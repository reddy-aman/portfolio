import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0.5 text-primary/80 z-0"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 -left-0.5 text-destructive/80 z-0"
            style={{ clipPath: "inset(50% 0 0 0)" }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;

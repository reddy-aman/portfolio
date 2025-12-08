import { useState, useEffect } from "react";

interface TypingTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText = ({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypingTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypingText;

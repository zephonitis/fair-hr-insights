
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  threshold?: number;
  animation?: "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight";
  delay?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  threshold = 0.1,
  animation = "fadeIn",
  delay = 0,
  ...props
}: AnimatedImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isVisible ? "" : "opacity-0",
        className
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-scout-cream/50 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt || ""}
        onLoad={handleImageLoad}
        style={{
          animation: isVisible
            ? `${animation} 0.8s ease-in-out forwards`
            : "none",
          animationDelay: `${delay}s`,
          opacity: 0,
        }}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;

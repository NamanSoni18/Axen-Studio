import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  radius?: number;
  imageUrl?: string; // New prop for image URL
  imageSize?: number; // New prop for image size
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  radius = 40,
  imageUrl = "", // Default empty image
  imageSize = 24, // Default image size
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <div className={`relative ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      {/* Static Image in Center */}
      {imageUrl && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img 
            src={imageUrl} 
            alt="Center logo" 
            style={{ width: imageSize, height: imageSize }}
            className="object-contain"
          />
        </div>
      )}

      {/* Rotating Text */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          rotate: rotation,
          width: '100%',
          height: '100%',
        }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const angle = (360 / letters.length) * i;
          const radian = (angle * Math.PI) / 180;
          
          const x = radius * Math.cos(radian);
          const y = radius * Math.sin(radian);
          
          const transform = `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`;

          return (
            <span
              key={i}
              className="absolute text-xs sm:text-sm text-white"
              style={{ 
                transform,
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;
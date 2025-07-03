import { useState, useEffect } from "react";
import logo from "@/assets/Footer/Frame 2740.svg"; // Make sure this path is correct

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader = ({ onLoaded }: PreloaderProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500); // Minimum display time for the preloader (2.5 seconds)

    const fadeOutTimer = setTimeout(() => {
      onLoaded();
    }, 3000); // Must be longer than the fade-out duration (2500ms + 500ms)

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          src={logo}
          alt="Axen Studio Logo"
          className="h-120 w-120 animate-pulse"
        />
        <div className="font-medium text-gray-300">
          {" "}
          <span className="shimmer-text text-[50px] font-bold">Axen Studio</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
"use client";

import { useEffect, useState } from "react";
import IncompatibleViewScreen from "@/components/IncompatibleViewScreen";

export default function ScreenGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blocked, setBlocked] = useState<boolean>(false);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log("Checking window size", { width, height } );
      
      setBlocked(width <= 1279 || height <= 584);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <>
      {children}

      {blocked && <IncompatibleViewScreen />}
    </>
  );
}

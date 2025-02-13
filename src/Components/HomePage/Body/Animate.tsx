"use client";

import { useEffect, useRef, useState } from "react";
import {
  KeyframeOptions,
  animate,
} from "framer-motion";
const Length = window.innerWidth;
console.log();
type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [runCounter, setRunCounter] = useState(false);

  useEffect(() => {
    let runConunt = false;
    function handleScroll() {
      if (window.scrollY > ref.current.offsetTop - 500) {
        setRunCounter(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    element.textContent = String(from);

    if (runCounter) {
      animate(from, to, {
        duration: 3,
        ease: "easeOut",
        ...animationOptions,

        onUpdate(value) {
          element.textContent = value.toFixed(0);
        },
      });
    }
  }, [ref, runCounter]);
  return <span ref={ref} />;
};

export default AnimatedCounter;

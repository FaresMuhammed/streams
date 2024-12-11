"use client";

import { useEffect, useRef } from "react";
import { KeyframeOptions, animate, useIsomorphicLayoutEffect } from "framer-motion"
// import { useRef } from "react";

type AnimatedCounterProps = {
    from: number;
    to: number;
    animationOptions ?: KeyframeOptions;
  };

    const AnimatedCounter = ({
      from,
      to,
      animationOptions,
      }: AnimatedCounterProps) => {
      const ref = useRef<HTMLSpanElement>(null);

      useIsomorphicLayoutEffect(() => {
        const element = ref.current;
        
        if (!element) return;
        
        element.textContent = String(from)
        
        const controls = animate(from, to, {
        duration: 3,
        ease: "easeOut",
        ...animationOptions,
        onUpdate(value) {
          element.textContent = value.toFixed(0)
        }
        })
      }, [ref])
      return <span ref={ref} />
    }

    export default AnimatedCounter;
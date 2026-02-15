"use client";
import { useEffect, useState } from "react";

export default function useMouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame;

    const move = (e) => {
      const { clientX, clientY } = e;

      /* Smooth animation frame update */
      frame = requestAnimationFrame(() => {
        setPos({
          x: clientX,
          y: clientY,
        });
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return pos;
}

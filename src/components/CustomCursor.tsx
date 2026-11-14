import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduced = useReducedMotion() ?? false;
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const ringInner = ringInnerRef.current;
    if (!dot || !ring || !ringInner) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;
    let visible = false;

    const reveal = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      reveal();
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const target = event.target;
      const element = target instanceof Element ? target : null;
      const interactive = element?.closest("a, button, [data-cursor-hover], input, textarea, select");
      const hover = Boolean(interactive);
      ringInner.dataset.hover = hover ? "true" : "false";
      dot.style.transform += hover ? " scale(0.55)" : "";
    };

    const onPointerDown = () => {
      ringInner.dataset.down = "true";
    };

    const onPointerUp = () => {
      ringInner.dataset.down = "false";
    };

    const onPointerLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[160] h-1.5 w-1.5 rounded-full bg-brand opacity-0"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[159] opacity-0"
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      >
        <span
          ref={ringInnerRef}
          data-hover="false"
          data-down="false"
          className="cursor-ring block h-9 w-9 rounded-full"
        />
      </div>
    </>
  );
}
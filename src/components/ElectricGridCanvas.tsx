import { useEffect, useRef } from "react";

interface ElectricGridCanvasProps {
  className?: string;
}

interface Pulse {
  axis: "h" | "v";
  line: number;
  pos: number;
  speed: number;
  cyan: boolean;
}

interface Sprites {
  amberDot: HTMLCanvasElement;
  cyanDot: HTMLCanvasElement;
  amberTrail: HTMLCanvasElement;
  cyanTrail: HTMLCanvasElement;
}

function makeDotSprite(rgb: string): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, `rgba(${rgb}, 1)`);
    gradient.addColorStop(0.18, `rgba(${rgb}, 0.95)`);
    gradient.addColorStop(0.44, `rgba(${rgb}, 0.28)`);
    gradient.addColorStop(1, `rgba(${rgb}, 0)`);
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
  }
  return canvas;
}

function makeTrailSprite(rgb: string): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 16;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createLinearGradient(0, 0, 128, 0);
    gradient.addColorStop(0, `rgba(${rgb}, 0)`);
    gradient.addColorStop(0.65, `rgba(${rgb}, 0.22)`);
    gradient.addColorStop(1, `rgba(${rgb}, 0.9)`);
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 16);
  }
  return canvas;
}

export function ElectricGridCanvas({ className }: ElectricGridCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = motionQuery.matches;
    let width = 0;
    let height = 0;
    let gap = 64;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    let frame = 0;
    let running = false;
    let visible = true;
    let last = 0;
    let pulses: Pulse[] = [];

    const mouse = { x: -1000, y: -1000, active: false };

    let sprites: Sprites | null = null;
    if (typeof document !== "undefined") {
      sprites = {
        amberDot: makeDotSprite("255, 180, 0"),
        cyanDot: makeDotSprite("34, 211, 238"),
        amberTrail: makeTrailSprite("255, 180, 0"),
        cyanTrail: makeTrailSprite("34, 211, 238"),
      };
    }

    const getStart = (offset: number): number => {
      const remainder = offset % gap;
      return remainder < 0 ? remainder + gap : remainder;
    };

    const seed = () => {
      const columns = Math.max(1, Math.floor(width / gap));
      const rows = Math.max(1, Math.floor(height / gap));
      const count = width < 640 ? 9 : width < 1280 ? 15 : 20;

      pulses = Array.from({ length: count }, (_, index) => {
        const axis: Pulse["axis"] = index % 2 === 0 ? "h" : "v";
        const lineCount = axis === "h" ? rows : columns;
        const line = 1 + Math.floor(Math.random() * Math.max(1, lineCount - 2));
        return {
          axis,
          line,
          pos: Math.random() * (axis === "h" ? width : height),
          speed: 42 + Math.random() * 78,
          cyan: index % 6 === 0,
        };
      });
    };

    const draw = (withMotion: boolean) => {
      if (!sprites) return;
      context.clearRect(0, 0, width, height);

      const offsetX = withMotion && mouse.active ? (mouse.x / width - 0.5) * 7 : 0;
      const offsetY = withMotion && mouse.active ? (mouse.y / height - 0.5) * 7 : 0;
      const startX = getStart(offsetX);
      const startY = getStart(offsetY);

      context.lineWidth = 1;

      context.strokeStyle = "rgba(138, 148, 166, 0.11)";
      context.beginPath();
      for (let x = startX, index = 0; x < width + gap; x += gap, index += 1) {
        if (index % 5 === 0) continue;
        context.moveTo(Math.round(x) + 0.5, 0);
        context.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = startY, index = 0; y < height + gap; y += gap, index += 1) {
        if (index % 5 === 0) continue;
        context.moveTo(0, Math.round(y) + 0.5);
        context.lineTo(width, Math.round(y) + 0.5);
      }
      context.stroke();

      context.strokeStyle = "rgba(255, 180, 0, 0.13)";
      context.beginPath();
      for (let x = startX, index = 0; x < width + gap; x += gap, index += 1) {
        if (index % 5 !== 0) continue;
        context.moveTo(Math.round(x) + 0.5, 0);
        context.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = startY, index = 0; y < height + gap; y += gap, index += 1) {
        if (index % 5 !== 0) continue;
        context.moveTo(0, Math.round(y) + 0.5);
        context.lineTo(width, Math.round(y) + 0.5);
      }
      context.stroke();

      if (withMotion && mouse.active) {
        const glow = context.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
        glow.addColorStop(0, "rgba(255, 180, 0, 0.055)");
        glow.addColorStop(0.5, "rgba(34, 211, 238, 0.018)");
        glow.addColorStop(1, "rgba(255, 180, 0, 0)");
        context.fillStyle = glow;
        context.fillRect(mouse.x - 240, mouse.y - 240, 480, 480);
      }

      if (!withMotion) return;

      context.globalCompositeOperation = "lighter";

      for (const pulse of pulses) {
        const horizontal = pulse.axis === "h";
        const linePosition = horizontal
          ? startY + pulse.line * gap
          : startX + pulse.line * gap;
        const x = horizontal ? pulse.pos + offsetX : linePosition;
        const y = horizontal ? linePosition : pulse.pos + offsetY;

        if (x < -140 || x > width + 140 || y < -140 || y > height + 140) continue;

        const trail = pulse.cyan ? sprites.cyanTrail : sprites.amberTrail;
        const dot = pulse.cyan ? sprites.cyanDot : sprites.amberDot;

        context.save();
        context.translate(x, y);
        if (!horizontal) context.rotate(Math.PI / 2);
        context.globalAlpha = 0.55;
        context.drawImage(trail, -78, -7, 78, 14);
        context.restore();

        context.globalAlpha = 0.92;
        context.drawImage(dot, x - 12, y - 12, 24, 24);
      }

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
    };

    const step = (delta: number) => {
      for (const pulse of pulses) {
        pulse.pos += pulse.speed * delta;
        const limit = pulse.axis === "h" ? width : height;
        if (pulse.pos > limit + 90) {
          pulse.pos = -90;
          const columns = Math.max(1, Math.floor(width / gap));
          const rows = Math.max(1, Math.floor(height / gap));
          const lineCount = pulse.axis === "h" ? rows : columns;
          pulse.line = 1 + Math.floor(Math.random() * Math.max(1, lineCount - 2));
        }
      }
    };

    const loop = (now: number) => {
      if (!running) return;
      const delta = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      step(delta);
      draw(true);
      frame = requestAnimationFrame(loop);
    };

    const canAnimate = () => !reduced && visible && !document.hidden;

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const start = () => {
      if (running || !canAnimate()) return;
      running = true;
      last = performance.now();
      frame = requestAnimationFrame(loop);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      gap = width < 640 ? 46 : width < 1200 ? 58 : 68;
      seed();
      stop();
      if (reduced) {
        draw(false);
      } else {
        start();
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouse.x = x;
      mouse.y = y;
      mouse.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reduced = event.matches;
      if (reduced) {
        stop();
        draw(false);
      } else {
        start();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        visible = entry ? entry.isIntersecting : true;
        if (visible) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 },
    );

    observer.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);

    resize();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
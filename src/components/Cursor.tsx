import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "view" | "process">("default");
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    let raf = 0;
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.06;
      ring.current.y += (pos.current.y - ring.current.y) * 0.06;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const updateHover = () => {
      const el = document.elementFromPoint(pos.current.x, pos.current.y) as HTMLElement | null;
      if (!el) { setVariant("default"); setLabel(""); return; }
      const interactive = el.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const v = interactive.dataset.cursor as "hover" | "view";
        setVariant(v || "hover");
        setLabel(interactive.dataset.cursorLabel || "");
        return;
      }
      if (el.closest("a, button, input, textarea, [role='button']")) {
        setVariant("hover");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
      const processSection = el.closest("[data-cursor-section='process']");
      if (processSection) {
        setVariant("process");
        setLabel("");
        return;
      }
    };
    const interval = setInterval(updateHover, 60);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block transition-[width,height,background] duration-300 ease-out ${
          variant === "process"
            ? "w-1.5 h-1.5 bg-rust"
            : variant === "default" ? "w-1.5 h-1.5 bg-ink" : "w-0 h-0 bg-transparent"
        } rounded-full ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center rounded-full transition-[width,height,background,color,border] duration-300 ease-out ${
          variant === "default"
            ? "w-10 h-10 border border-black bg-transparent text-transparent"
            : variant === "view"
            ? "w-16 h-16 bg-rust text-paper border-0"
            : variant === "process"
            ? "w-10 h-10 border border-orange bg-transparent"
            : "w-10 h-10 bg-white border-0"
        } ${hidden ? "opacity-0" : "opacity-100"} `}
        style={{ willChange: "transform", mixBlendMode: variant === "hover" ? "difference" : "normal" }}
      >
        {label && (
          <span className="mono text-[10px] uppercase tracking-widest">{label}</span>
        )}
      </div>
    </>
  );
};

export default Cursor;

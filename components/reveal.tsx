export function Reveal({ children, className = "", delay = 0, mode = "scroll" }: { children: React.ReactNode; className?: string; delay?: number; mode?: "load" | "scroll" }) {
  return (
    <div className={`reveal ${mode === "load" ? "reveal-load" : "reveal-scroll"} ${className}`} style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}>
      {children}
    </div>
  );
}

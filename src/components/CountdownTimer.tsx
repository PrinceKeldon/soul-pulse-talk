import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const midnight = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1
      );
      const diff = midnight - now.getTime();
      return {
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      };
    };
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="my-6">
      <div className="font-mono text-[9px] tracking-[0.24em] uppercase text-muted-foreground mb-2.5 text-center">
        Today's pulse closes in
      </div>
      <div
        className="font-mono font-light tracking-[0.04em] text-foreground leading-none text-center"
        style={{
          fontSize: "clamp(42px, 7vw, 88px)",
          textShadow: "0 0 60px hsl(35 56% 51% / 0.25)",
        }}
      >
        <span>{pad(t.h)}</span>
        <span className="animate-blink inline-block">:</span>
        <span>{pad(t.m)}</span>
        <span className="animate-blink inline-block">:</span>
        <span>{pad(t.s)}</span>
      </div>
      <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mt-2.5 text-center">
        hours &nbsp;&nbsp;&nbsp; minutes &nbsp;&nbsp;&nbsp; seconds
      </div>
    </div>
  );
};

export default CountdownTimer;

import { useEffect, useState } from "react";

const useCount = (target: number, delay = 600, duration = 1320) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now() + delay;
    let raf = 0;
    const tick = (t: number) => {
      const elapsed = t - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, elapsed / duration);
      setV(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay, duration]);
  return v;
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <span className="block font-mono text-[22px] text-amber-bright">{value}</span>
    <span className="block font-mono text-[9px] tracking-[0.16em] uppercase text-muted-foreground mt-1">
      {label}
    </span>
  </div>
);

const LiveStatsStrip = () => {
  const msgs = useCount(148302);
  const regions = useCount(127);
  const [score, setScore] = useState<string>("—");
  useEffect(() => {
    const t = setTimeout(() => setScore("6.4"), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-10 flex justify-center gap-12 px-8 py-6 border-t border-dim flex-wrap">
      <Stat value="195" label="Countries & territories" />
      <Stat value={msgs.toLocaleString()} label="Messages today" />
      <Stat value={regions.toString()} label="Active regions" />
      <Stat value={score} label="Global pulse score" />
    </div>
  );
};

export default LiveStatsStrip;

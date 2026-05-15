import { useEffect, useState } from "react";
import { calculatePulseScore, formatPulseScore, useGlobeStats } from "@/lib/pulseTelemetry";

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
  const { data: stats, isLoading, isError } = useGlobeStats();
  const messagesToday = stats?.total_posts || 0;
  const activeRegions = stats ? Object.keys(stats.regional_stats).length : 0;
  const score = calculatePulseScore(stats?.emotion_distribution);
  const msgs = useCount(messagesToday);
  const regions = useCount(activeRegions);
  const unavailable = isError ? "Live data unavailable" : isLoading ? "Syncing live data" : null;

  return (
    <div className="relative z-10 flex justify-center gap-12 px-8 py-6 border-t border-dim flex-wrap">
      <Stat value="195" label="Countries & territories" />
      <Stat value={unavailable || msgs.toLocaleString()} label="Messages today" />
      <Stat value={unavailable || regions.toString()} label="Active regions" />
      <Stat value={unavailable || formatPulseScore(score)} label="Global pulse score" />
    </div>
  );
};

export default LiveStatsStrip;

import {
  calculatePulseScore,
  EMOTIONS,
  formatPulseScore,
  type Emotion,
  type RegionalStats,
  useGlobeStats,
  useHighlights,
} from "@/lib/pulseTelemetry";

const scoreColor = (score: number | null) => {
  if (score === null) return "#94a3b8";
  if (score >= 7) return "#2dd4a8";
  if (score >= 5) return "#c8903a";
  return "#e05050";
};

const regionScore = (region: RegionalStats) => calculatePulseScore(region.emotion_distribution);

const PulseReportCard = () => {
  const { data: stats, isLoading: statsLoading, isError: statsError } = useGlobeStats();
  const { data: highlights } = useHighlights();
  const globalScore = calculatePulseScore(stats?.emotion_distribution);
  const globalScoreColor = scoreColor(globalScore);
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const regions = Object.values(stats?.regional_stats || {})
    .sort((a, b) => b.total_posts - a.total_posts)
    .slice(0, 5)
    .map((region) => {
      const score = regionScore(region);
      return {
        name: region.region,
        val: formatPulseScore(score),
        pct: score === null ? 0 : Math.round(score * 10),
        color: region.dominant_emotion ? EMOTIONS[region.dominant_emotion].color : scoreColor(score),
      };
    });

  const themes =
    highlights?.emotionalTrends.map((trend) => ({
      label: `${EMOTIONS[trend.emotion].label} ${trend.percentage}%`,
      color: EMOTIONS[trend.emotion].color,
    })) ||
    Object.entries(stats?.emotion_distribution || {})
      .filter(([, count]) => count > 0)
      .sort(([, a], [, b]) => b - a)
      .map(([emotion, count]) => ({
        label: `${EMOTIONS[emotion as Emotion].label} ${count}`,
        color: EMOTIONS[emotion as Emotion].color,
      }));

  return (
    <div className="relative bg-card/80 backdrop-blur-md border border-amber-hairline border-hairline p-10 mt-14">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[hsl(var(--pulse-amber))] to-transparent" />

      <div className="flex justify-between items-start pb-6 border-b border-dim mb-6 flex-wrap gap-4">
        <div>
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber mb-1.5">
            Global Pulse · Daily Report
          </div>
          <div className="font-serif text-[22px]">{today}</div>
          <div className="text-xs text-muted-foreground mt-1">
            {statsError
              ? "Live Pulse Chat telemetry temporarily unavailable"
              : statsLoading
                ? "Syncing live Pulse Chat telemetry"
                : `Based on ${(stats?.total_posts || 0).toLocaleString()} pulses · ${regions.length.toLocaleString()} active regions`}
          </div>
        </div>
        <div className="text-right">
          <div className="font-serif text-[52px] leading-none" style={{ color: globalScoreColor }}>
            {formatPulseScore(globalScore)}
          </div>
          <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted-foreground mt-1">
            Global pulse score / 10
          </div>
          <div className="font-mono text-[11px] mt-1" style={{ color: globalScoreColor }}>
            {stats?.last_updated ? `Updated ${new Date(stats.last_updated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Live telemetry"}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {regions.length > 0 ? (
          regions.map((r) => (
            <div key={r.name}>
              <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted-foreground mb-2">
                {r.name}
              </div>
              <div className="h-[2px] bg-white/5 mb-2">
                <div className="h-full" style={{ width: `${r.pct}%`, background: r.color }} />
              </div>
              <div className="font-mono text-[13px] font-medium" style={{ color: r.color }}>
                {r.val}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
            {statsLoading ? "Loading regional telemetry" : "No regional pulse data yet today"}
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-dim">
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber mb-3">
          Today's dominant global themes
        </div>
        {themes.length > 0 ? (
          themes.map((theme) => (
            <span
              key={theme.label}
              className="inline-block font-mono text-[10px] tracking-wider border border-dim border-hairline text-muted-foreground px-3 py-1 mr-1 mb-1"
              style={{ borderColor: theme.color, color: theme.color }}
            >
              {theme.label}
            </span>
          ))
        ) : (
          <span className="inline-block font-mono text-[10px] tracking-wider border border-dim border-hairline text-muted-foreground px-3 py-1 mr-1 mb-1">
            Awaiting live emotional trends
          </span>
        )}
      </div>
    </div>
  );
};

export default PulseReportCard;

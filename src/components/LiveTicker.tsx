import { EMOTIONS, type Emotion, type PulsePost, useLiveFeed } from "@/lib/pulseTelemetry";

type TickerItem = {
  color: string;
  text: string;
};

const buildTickerItems = (posts: PulsePost[] = []): TickerItem[] => {
  const grouped = posts.reduce<Record<string, { count: number; emotions: Record<string, number> }>>((acc, post) => {
    const place = post.country || post.region || "Global";
    if (!acc[place]) {
      acc[place] = { count: 0, emotions: {} };
    }

    acc[place].count += 1;
    acc[place].emotions[post.emotion] = (acc[place].emotions[post.emotion] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(grouped)
    .sort(([, a], [, b]) => b.count - a.count)
    .map(([place, data]) => {
      const dominant = Object.entries(data.emotions).sort(([, a], [, b]) => b - a)[0]?.[0] as Emotion | undefined;
      const emotion = dominant ? EMOTIONS[dominant] : null;
      const countLabel = data.count === 1 ? "1 pulse" : `${data.count.toLocaleString()} pulses`;

      return {
        color: emotion?.color || "#c8903a",
        text: `${place} - ${emotion?.label || "Live"} rising · ${countLabel}`,
      };
    });
};

const LiveTicker = () => {
  const { data, isLoading, isError } = useLiveFeed(100);
  const items = buildTickerItems(data?.posts);

  const displayItems =
    items.length > 0
      ? items
      : [
          {
            color: isError ? "#e05050" : "#c8903a",
            text: isError ? "Live telemetry temporarily unavailable" : isLoading ? "Syncing live pulse telemetry" : "Waiting for today's first pulse",
          },
        ];

  const loop = [...displayItems, ...displayItems];

  return (
    <div className="relative z-10 border-y border-dim overflow-hidden bg-background/70 backdrop-blur-md">
      <div className="flex animate-ticker whitespace-nowrap">
        {loop.map((it, i) => (
          <div
            key={`${it.text}-${i}`}
            className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground px-8 py-[9px] border-r border-dim inline-flex items-center gap-2 shrink-0"
          >
            <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: it.color }} />
            {it.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTicker;

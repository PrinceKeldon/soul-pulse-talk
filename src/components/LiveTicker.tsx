const items = [
  { color: "#2dd4a8", text: "Nigeria — optimism rising · 847 msgs" },
  { color: "#e05050", text: "France — economic concern · 1,203 msgs" },
  { color: "#c8903a", text: "Brazil — political debate · 2,104 msgs" },
  { color: "#2dd4a8", text: "India — cultural celebration · 3,841 msgs" },
  { color: "#4a90d4", text: "Germany — climate focus · 961 msgs" },
  { color: "#2dd4a8", text: "Ukraine — resilience · 2,210 msgs" },
  { color: "#4a90d4", text: "Japan — tech optimism · 1,540 msgs" },
  { color: "#2dd4a8", text: "Kenya — community pride · 711 msgs" },
  { color: "#e05050", text: "Argentina — economic anxiety · 1,908 msgs" },
  { color: "#2dd4a8", text: "South Korea — innovation · 874 msgs" },
  { color: "#c8903a", text: "Mexico — community spirit · 1,120 msgs" },
  { color: "#4a90d4", text: "Indonesia — unity discourse · 2,330 msgs" },
];

const LiveTicker = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative z-10 border-y border-dim overflow-hidden bg-background/70 backdrop-blur-md">
      <div className="flex animate-ticker whitespace-nowrap">
        {loop.map((it, i) => (
          <div
            key={i}
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

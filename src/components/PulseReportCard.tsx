const regions = [
  { name: "Sub-Saharan Africa", val: 7.2, pct: 72, color: "#2dd4a8" },
  { name: "South Asia", val: 6.8, pct: 68, color: "#c8903a" },
  { name: "East Asia", val: 6.5, pct: 65, color: "#c8903a" },
  { name: "Western Europe", val: 5.1, pct: 51, color: "#4a90d4" },
  { name: "Latin America", val: 6.3, pct: 63, color: "#c8903a" },
];

const PulseReportCard = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
            Based on 148,302 messages · 195 regions
          </div>
        </div>
        <div className="text-right">
          <div className="font-serif text-[52px] text-pulse-teal leading-none">6.4</div>
          <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-muted-foreground mt-1">
            Global pulse score / 10
          </div>
          <div className="font-mono text-[11px] text-pulse-teal mt-1">▲ +0.3 vs yesterday</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {regions.map((r) => (
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
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-dim">
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber mb-3">
          Today's dominant global themes
        </div>
        {["Economic outlook", "Climate & environment", "Local politics", "Community & culture"].map((t) => (
          <span
            key={t}
            className="inline-block font-mono text-[10px] tracking-wider border border-dim border-hairline text-muted-foreground px-3 py-1 mr-1 mb-1"
          >
            {t}
          </span>
        ))}
        <span className="inline-block font-mono text-[10px] tracking-wider border border-amber-hairline border-hairline text-amber px-3 py-1 mr-1 mb-1">
          ↑ Youth employment
        </span>
      </div>
    </div>
  );
};

export default PulseReportCard;

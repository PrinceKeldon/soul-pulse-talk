const tiers = [
  {
    tier: "Free",
    name: "Public Pulse",
    body: "Daily PulseReport summary. Global score. Top 5 global themes. Free for everyone — drives discovery and press coverage.",
    cta: "Enter the chat →",
    href: "https://pulsechat.online",
    featured: false,
  },
  {
    tier: "Intelligence",
    name: "PulseIntel",
    body: "Full regional breakdowns. Historical archive. API feed. Topic & brand tracking. For media, research, and risk analysts.",
    cta: "Request access →",
    href: "mailto:intelligence@globalpulseworld.xyz",
    featured: true,
  },
  {
    tier: "Enterprise",
    name: "PulseEnterprise",
    body: "Custom regional channels. Verified presence. White-label feeds. Crisis monitoring. For NGOs, governments, global brands.",
    cta: "Contact us →",
    href: "mailto:enterprise@globalpulseworld.xyz",
    featured: false,
  },
];

const IntelTiers = () => (
  <div className="relative z-10 bg-card/70 backdrop-blur-lg border-y border-dim">
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 px-10">
      {tiers.map((t, i) => (
        <div
          key={t.name}
          className={`p-12 ${i < tiers.length - 1 ? "md:border-r border-dim" : ""} ${
            t.featured ? "bg-[hsl(35_56%_51%/0.04)] md:border md:border-amber-hairline border-hairline" : ""
          }`}
        >
          <span className="block font-mono text-[9px] tracking-[0.2em] uppercase text-amber mb-3">
            {t.tier}
          </span>
          <div className="font-serif text-[22px] mb-3">{t.name}</div>
          <div className="text-[13px] text-muted-foreground leading-[1.8] mb-6">{t.body}</div>
          <a
            href={t.href}
            className="font-mono text-[10px] tracking-[0.14em] uppercase text-amber hover:opacity-70 transition-opacity"
          >
            {t.cta}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default IntelTiers;

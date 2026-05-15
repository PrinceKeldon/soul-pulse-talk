import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import LiveStatsStrip from "@/components/LiveStatsStrip";
import LiveTicker from "@/components/LiveTicker";
import PulseReportCard from "@/components/PulseReportCard";
import IntelTiers from "@/components/IntelTiers";

const Home = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-amber mb-8 animate-fade-up flex items-center gap-3">
          <span className="opacity-40">─────</span>
          195 countries · live now · resets at midnight utc
          <span className="opacity-40">─────</span>
        </div>

        <h1
          className="font-serif font-normal leading-[1.1] mb-6 animate-fade-up"
          style={{ fontSize: "clamp(38px, 6vw, 78px)", animationDelay: "0.15s" }}
        >
          The World's <em className="text-amber-bright not-italic font-serif italic">Heartbeat.</em>
          <br />In Real Time.
        </h1>

        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <CountdownTimer />
        </div>

        <p
          className="text-muted-foreground leading-[1.9] max-w-[520px] mb-10 animate-fade-up"
          style={{ fontSize: "clamp(13px, 1.6vw, 16px)", animationDelay: "0.45s" }}
        >
          Every day, 195 countries speak. At midnight, it resets. What the world is saying — and feeling — right now,
          by region and country.
        </p>

        <div className="flex gap-4 flex-wrap justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://pulsechat.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-background bg-amber-bright hover:opacity-85 transition-opacity px-8 py-3.5"
          >
            Join today's conversation
          </a>
          <a
            href="#intelligence"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground border border-hairline border-white/10 hover:text-amber hover:border-amber-hairline transition-colors px-8 py-3.5"
          >
            Access the intelligence
          </a>
        </div>
      </section>

      <LiveStatsStrip />
      <LiveTicker />

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-[1100px] mx-auto px-10 py-24">
        <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-amber mb-4">The mechanic</div>
        <h2 className="font-serif font-normal leading-[1.15] mb-6" style={{ fontSize: "clamp(28px, 4vw, 46px)" }}>
          Why the reset is the <em className="text-amber-bright italic">product</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-hairline border-dim mt-14 bg-card/60 backdrop-blur-md">
          {[
            {
              num: "01 · Every day",
              title: "195 countries speak simultaneously",
              body: "Select your country or region and join a live, anonymous conversation. No permanent accounts, no algorithmic feed. Just today's voices — globally, honestly, collectively.",
            },
            {
              num: "02 · All day",
              title: "AI reads sentiment in real time",
              body: "The intelligence layer runs continuously — tagging emotion, topic, and urgency across every language. The world's mood becomes visible as it shifts, region by region.",
            },
            {
              num: "03 · At midnight UTC",
              title: "The day closes. The intelligence lives.",
              body: "Raw chats delete at midnight. But the AI has already synthesised the day into a permanent PulseReport — a historical record of how the world felt today. Every day, forever.",
            },
          ].map((c, i) => (
            <div
              key={c.num}
              className={`p-10 ${i < 2 ? "md:border-r border-dim border-hairline" : ""}`}
            >
              <span className="block font-mono text-[9px] tracking-[0.2em] uppercase text-amber mb-4">{c.num}</span>
              <div className="font-serif text-[18px] mb-3">{c.title}</div>
              <div className="text-[13px] text-muted-foreground leading-[1.8]">{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-hairline border-dim" />

      {/* INTELLIGENCE / REPORT */}
      <section id="intelligence" className="max-w-[1100px] mx-auto px-10 py-24">
        <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-amber mb-4">
          Daily intelligence product
        </div>
        <h2 className="font-serif font-normal leading-[1.15] mb-6" style={{ fontSize: "clamp(28px, 4vw, 46px)" }}>
          Today's Global Pulse <em className="text-amber-bright italic">Report</em>
        </h2>
        <p className="text-[14px] text-muted-foreground leading-[1.9] max-w-[580px]">
          Every midnight, the AI distills everything humanity said into one structured report. Free to read.
          Available to license. A permanent record of what the world felt — today.
        </p>
        <PulseReportCard />
      </section>

      <IntelTiers />

      {/* CTA */}
      <section className="text-center px-6 py-32 relative z-10 border-t border-hairline border-dim">
        <h2 className="font-serif font-normal leading-[1.1] mb-5" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
          The world speaks for<br />
          <em className="text-amber-bright italic">24 hours.</em> Then resets.
        </h2>
        <p className="text-[14px] text-muted-foreground mb-10">
          Join today's conversation — or access the intelligence it generates.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://pulsechat.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-background bg-amber-bright hover:opacity-85 transition-opacity px-8 py-3.5"
          >
            Enter today's pulse
          </a>
          <a
            href="mailto:intelligence@globalpulseworld.xyz"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground border border-hairline border-white/10 hover:text-amber hover:border-amber-hairline transition-colors px-8 py-3.5"
          >
            Intelligence access →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

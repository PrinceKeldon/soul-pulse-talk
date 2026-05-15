import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative z-10 flex justify-between items-center px-10 py-6 border-t border-dim flex-wrap gap-4">
    <div className="font-mono text-[11px] text-amber tracking-[0.14em]">GLOBALPULSEWORLD.XYZ</div>
    <div className="flex gap-6">
      <a href="/#how" className="font-mono text-[10px] text-muted-foreground hover:text-amber tracking-[0.1em]">
        How it works
      </a>
      <a href="/#intelligence" className="font-mono text-[10px] text-muted-foreground hover:text-amber tracking-[0.1em]">
        Intelligence
      </a>
      <Link to="/about" className="font-mono text-[10px] text-muted-foreground hover:text-amber tracking-[0.1em]">
        About
      </Link>
      <Link to="/roadmap" className="font-mono text-[10px] text-muted-foreground hover:text-amber tracking-[0.1em]">
        Roadmap
      </Link>
    </div>
    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em]">
      © {new Date().getFullYear()} Global Pulse · Resets daily at 00:00 UTC
    </div>
  </footer>
);

export default Footer;

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const { pathname } = useLocation();
  const navItems = [
    { path: "/#how", label: "How it works", isHash: true },
    { path: "/#intelligence", label: "Intelligence", isHash: true },
    { path: "/about", label: "About" },
    { path: "/roadmap", label: "Roadmap" },
    { path: "/podcast", label: "Podcast" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5">
      <Link to="/" className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-amber-bright">
        GLOBAL<span className="text-muted-foreground">PULSE</span>
      </Link>
      <div className="flex items-center gap-6">
        {navItems.map((item) =>
          item.isHash ? (
            <a
              key={item.path}
              href={item.path}
              className="hidden md:inline font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "hidden md:inline font-mono text-[10px] tracking-[0.14em] uppercase transition-colors hover:text-foreground",
                pathname === item.path ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        )}
        <a
          href="https://pulsechat.online"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[0.14em] uppercase text-background bg-amber hover:bg-amber-bright transition-colors px-4 py-2"
        >
          Enter today's pulse →
        </a>
      </div>
    </header>
  );
};

export default Header;

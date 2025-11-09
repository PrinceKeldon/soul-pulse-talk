import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © Global Pulse {new Date().getFullYear()}
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/podcast" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Podcast
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/roadmap" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            "When humanity speaks, the world has a heartbeat."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

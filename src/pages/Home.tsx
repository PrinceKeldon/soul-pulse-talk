import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { MessageCircle, Headphones, Music, Image } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import ComingSoonCard from "@/components/ComingSoonCard";
const Home = () => {
  return <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">The World's 24-Hour Conversation.</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Every day, the world resets. Millions of voices rise again — one heartbeat, one pulse.
          </p>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mt-12">
            <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Join the Conversation
              </Button>
            </a>
            <Link to="/podcast">
              <Button size="lg" variant="outline" className="gap-2">
                <Headphones className="h-5 w-5" />
                Pulse Podcast
              </Button>
            </Link>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Global Pulse connects humanity through a single daily rhythm — a chat that resets every 24 hours.
              <br />
              <span className="text-muted-foreground mt-4 block">
                When the world speaks, emotion becomes data, and data becomes understanding.
              </span>
            </p>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              The Global Pulse Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Beyond the conversation — exploring new ways to experience humanity's heartbeat
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <ComingSoonCard icon={Headphones} title="🎧 Pulse Podcast" description="AI reflections on the world's emotional rhythm." />
              <ComingSoonCard icon={Music} title="🎵 Pulse Songs" description="Music inspired by humanity's collective heartbeat." />
              <ComingSoonCard icon={Image} title="🖼️ Pulse Highlights (NFT)" description="Daily art born from the world's conversations." />
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why It Matters
            </h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Global Pulse is a living emotional record of humanity — one that renews itself every day, 
              free from noise, ego, and algorithms.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Be Part of the Pulse</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the world's 24-hour conversation. Your voice shapes humanity's heartbeat.
            </p>
            <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 animate-heartbeat">
                <MessageCircle className="h-5 w-5" />
                Start Pulsing Now
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Home;
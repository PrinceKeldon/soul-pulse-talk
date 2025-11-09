import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Headphones, MessageCircle } from "lucide-react";
const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            The World's 24-Hour Conversation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
            Humanity speaks, and AI transforms it into sound.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/podcast">
              <Button size="lg" className="gap-2">
                Listen to Global Pulse chat pod
                <Headphones className="h-5 w-5" />
              </Button>
            </Link>
            <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Go to pulse chat
              </Button>
            </a>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              When humanity speaks, the world has a heartbeat.
            </h2>

            <div className="flex items-center justify-center gap-8 text-6xl my-16">
              <span className="animate-pulse">🌍</span>
              <span className="text-muted-foreground">→</span>
              <span className="animate-pulse delay-150">💬</span>
              <span className="text-muted-foreground">→</span>
              <span className="animate-pulse delay-300">🔊</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Emotion</h3>
                <p className="text-muted-foreground">
                  Every 24 hours, billions experience joy, fear, hope, and sadness. Now we can see how the world feels.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Anonymity</h3>
                <p className="text-muted-foreground">
                  No likes, followers, or profiles. Only honest emotion, shared without performance.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Renewal</h3>
                <p className="text-muted-foreground">
                  Every midnight UTC, the conversation resets. Yesterday's emotions don't define today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Listen to the world breathe</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The Pulse Podcast is humanity's daily reflection — an AI-generated soundscape of the world's emotional
              heartbeat.
            </p>
            <Link to="/podcast">
              <Button size="lg">Explore the Pulse Podcast</Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Home;

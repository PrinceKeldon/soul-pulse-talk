import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  const principles = [
    {
      title: "Emotion over metrics",
      description: "We believe emotion is signal, not noise. Global Pulse captures what humanity feels — honestly, anonymously, and without judgment. No likes, no followers, just real feeling."
    },
    {
      title: "Anonymity with authenticity",
      description: "No accounts. No profiles. No performance. Just honest expression, free from the pressure to curate or perform. Real voices, zero ego."
    },
    {
      title: "Renewal through daily reset",
      description: "Every midnight UTC, the conversation resets. Yesterday's emotions don't define today. Every day is a fresh start — a new pulse, a new rhythm."
    },
    {
      title: "Humanity before algorithms",
      description: "This isn't about maximizing engagement or optimizing metrics. It's about seeing ourselves reflected in each other — a living mirror of collective feeling."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A new kind of social rhythm — human, not algorithmic.
          </h1>
          
          <div className="prose prose-lg max-w-none mb-16">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To make the world's emotional rhythm visible and alive — connecting people through shared expression, empathy, and renewal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Modern social media has given us unprecedented connection, but at a cost. Platforms optimize for engagement, 
                  rewarding outrage over empathy, performance over authenticity, metrics over meaning.
                </p>
                <p>
                  We've lost the ability to feel the world together.
                </p>
                <p>
                  Global Pulse is different. It started with a simple question: What if conversation had a heartbeat? 
                  What if we created a space where the entire world could speak freely, knowing that tomorrow it all resets?
                </p>
                <p>
                  At its core is <strong className="text-foreground">Pulsechat.online</strong> — the world's first chat 
                  that resets every 24 hours. A place where emotion is honest, not performative. Where participation is 
                  frictionless, not transactional. Where the experience is poetic, not algorithmic.
                </p>
                <p>
                  Every 24 hours, the world resets. All posts disappear. The emotional map clears. The heartbeat begins again. 
                  This daily rhythm creates transience, renewal, and presence — mirroring the natural rhythm of human life.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  The world doesn't need another feed. It needs a pulse.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">Core Principles</h2>
              <div className="grid gap-8">
                {principles.map((principle, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center py-12 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Join the Pulse
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the world's 24-hour conversation. Every voice matters. Every day is new.
              </p>
              <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Start Pulsing Now
                </Button>
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const principles = [
    {
      title: "Emotion",
      description: "We believe emotion is signal, not noise. Global Pulse captures what humanity feels — honestly, anonymously, and without judgment."
    },
    {
      title: "Anonymity",
      description: "No accounts. No profiles. No followers. Just honest expression, free from the pressure to perform."
    },
    {
      title: "Renewal",
      description: "Every midnight UTC, the conversation resets. Yesterday's emotions don't define today. Every day is a fresh start."
    },
    {
      title: "Simplicity",
      description: "The experience is frictionless and poetic. Type what's on your mind, press Pulse, and contribute to the world's heartbeat."
    },
    {
      title: "Humanity",
      description: "This isn't about algorithms or metrics. It's about seeing ourselves reflected in each other — a living mirror of collective feeling."
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
                To make the world's emotional rhythm visible and audible every 24 hours.
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
                  Global Pulse is different. It's a space where emotion is honest, not performative. Where participation is 
                  frictionless, not transactional. Where the experience is poetic, not algorithmic. Where data is ephemeral, 
                  not exploited.
                </p>
                <p>
                  Every 24 hours, the world resets. All posts disappear. The emotional map clears. The heartbeat begins again. 
                  This daily rhythm creates transience, renewal, and presence — mirroring the natural rhythm of human life.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  The world doesn't need another feed. It needs a mirror.
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
                Listen to the World Breathe
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience humanity's daily emotional rhythm through the Pulse Podcast
              </p>
              <Link to="/podcast">
                <Button size="lg">
                  Explore the Pulse Podcast
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

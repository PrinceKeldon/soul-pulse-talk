import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Zap } from "lucide-react";
import PulseLine from "@/components/PulseLine";

const Roadmap = () => {
  const phases = [
    {
      number: "I",
      title: "Pulsechat MVP",
      status: "completed",
      badge: "Live Now",
      description: "The world's first chat that resets every 24 hours — capturing humanity's daily emotional rhythm.",
      features: [
        "Anonymous pulse submission",
        "Real-time emotional heatmap",
        "24-hour reset cycle at midnight UTC",
        "Global participation system"
      ]
    },
    {
      number: "II",
      title: "Pulse Podcast",
      status: "upcoming",
      badge: "Coming Soon",
      description: "AI-generated daily audio reflections transforming the world's emotions into narrative soundscapes.",
      features: [
        "Daily AI-generated episodes",
        "Emotion-to-audio synthesis",
        "Multi-platform distribution",
        "Episode archive system"
      ]
    },
    {
      number: "III",
      title: "Pulse Songs & Art",
      status: "upcoming",
      badge: "Coming Soon",
      description: "Transform daily emotional snapshots into unique music pieces and digital art collectibles.",
      features: [
        "Generative music creation",
        "Daily Pulse NFT highlights",
        "Emotional metadata encoding",
        "Community ownership model"
      ]
    },
    {
      number: "IV",
      title: "Pulse Credits & Proof of Vibe",
      status: "upcoming",
      badge: "Coming Soon",
      description: "Reward system for authentic participation, creating a reputation layer based on emotional contribution.",
      features: [
        "Pulse Credit system",
        "Proof of Vibe protocol",
        "Reputation mechanics",
        "Community governance"
      ]
    },
    {
      number: "V",
      title: "The Pulse Economy",
      status: "future",
      badge: "Coming Soon",
      description: "Full ecosystem with creator tools, emotional data markets, and decentralized governance.",
      features: [
        "Creator monetization",
        "Emotional data marketplace",
        "DAO governance structure",
        "Global expansion initiatives"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Building Humanity's Heartbeat
          </h1>
          <p className="text-xl text-muted-foreground mb-16">
            A journey from conversation to economy — powered by emotion
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Glowing Pulse Line */}
            <PulseLine />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline marker */}
                  <div className="absolute left-8 -translate-x-1/2 mt-2">
                    {phase.status === "completed" ? (
                      <div className="relative">
                        <CheckCircle2 className="h-8 w-8 text-primary bg-background relative z-10" />
                        <div className="absolute inset-0 animate-heartbeat">
                          <Zap className="h-8 w-8 text-accent opacity-50" />
                        </div>
                      </div>
                    ) : phase.status === "upcoming" ? (
                      <Circle className="h-8 w-8 text-primary bg-background fill-background" />
                    ) : (
                      <Circle className="h-8 w-8 text-muted-foreground bg-background" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className="ml-20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Phase {phase.number}
                          </div>
                          <CardTitle className="text-2xl">{phase.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {phase.description}
                          </CardDescription>
                        </div>
                        {phase.status === "completed" && (
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-pulse-glow">
                            {phase.badge}
                          </span>
                        )}
                        {phase.status === "upcoming" && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                            {phase.badge}
                          </span>
                        )}
                        {phase.status === "future" && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                            {phase.badge}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center border-t border-border pt-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join the Pulse
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the world's 24-hour conversation. Your voice shapes humanity's heartbeat.
            </p>
            <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Start Pulsing Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      number: "I",
      title: "PulseChat MVP",
      status: "completed",
      description: "Anonymous 24-hour conversation platform with real-time emotional mapping and global participation.",
      features: [
        "Anonymous pulse submission",
        "Real-time emotional heatmap",
        "24-hour reset cycle",
        "Basic moderation system"
      ]
    },
    {
      number: "II",
      title: "Pulse Podcast Launch",
      status: "active",
      description: "AI-generated daily audio reflections transforming global emotions into narrative soundscapes.",
      features: [
        "Daily AI-generated episodes",
        "Emotion-to-audio synthesis",
        "Multi-platform distribution",
        "Episode archive system"
      ]
    },
    {
      number: "III",
      title: "Pulse NFT & Song Experiments",
      status: "upcoming",
      description: "Transform daily emotional snapshots into unique digital collectibles and generative music pieces.",
      features: [
        "Daily Pulse NFT minting",
        "Generative music creation",
        "Emotional metadata encoding",
        "Community ownership model"
      ]
    },
    {
      number: "IV",
      title: "Pulse Credits & Proof of Vibe",
      status: "upcoming",
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
      description: "Full ecosystem with creator tools, emotional data markets, and decentralized governance.",
      features: [
        "Creator monetization",
        "Emotional data marketplace",
        "DAO governance structure",
        "Global expansion"
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
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline marker */}
                  <div className="absolute left-8 -translate-x-1/2 mt-2">
                    {phase.status === "completed" ? (
                      <CheckCircle2 className="h-8 w-8 text-primary bg-background" />
                    ) : phase.status === "active" ? (
                      <div className="h-8 w-8 rounded-full border-4 border-primary bg-background animate-pulse" />
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
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            Completed
                          </span>
                        )}
                        {phase.status === "active" && (
                          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                            Active
                          </span>
                        )}
                        {phase.status === "upcoming" && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                            Upcoming
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

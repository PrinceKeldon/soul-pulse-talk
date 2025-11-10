import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones } from "lucide-react";

const Podcast = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Pulse Podcast
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            The world's emotional heartbeat, told through sound.
          </p>
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-12">
            Coming Soon
          </div>

          {/* Preview Section */}
          <Card className="mb-12 border-dashed">
            <CardHeader>
              <CardTitle className="text-2xl">What to Expect</CardTitle>
              <CardDescription>
                Every 24 hours, AI transforms humanity's emotional snapshot into audio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="text-center p-8 relative z-10">
                  <Headphones className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-glow" />
                  <p className="text-muted-foreground mb-2">
                    Spotify player will appear here
                  </p>
                  <p className="text-xs text-muted-foreground">
                    AI-generated daily episodes reflecting the world's pulse
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Preview: Today's Emotional Themes</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Hopeful
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Reflective
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      Connected
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">The Concept</h3>
                  <p className="text-muted-foreground">
                    Each day, the Pulse Podcast transforms the world's collective emotions into a narrative soundscape. 
                    AI analyzes the day's conversations, detects emotional patterns, and generates an audio reflection 
                    that captures humanity's heartbeat — a daily snapshot of how the world feels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Episodes Preview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Episode Archive Preview</h2>
            <p className="text-muted-foreground mb-6">
              Once launched, episodes will be available here for reflection and revisiting
            </p>
            <div className="grid gap-6 opacity-60">
              {[
                { date: "Day 1", mood: "Hopeful · Energetic", description: "A day of global optimism and collective energy" },
                { date: "Day 2", mood: "Calm · Reflective", description: "Quiet contemplation across time zones" },
                { date: "Day 3", mood: "Tense · Determined", description: "The world processing change with resilience" },
              ].map((episode, index) => (
                <Card key={index} className="border-dashed">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{episode.date}</CardTitle>
                        <CardDescription className="mt-2">{episode.mood}</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" disabled>
                        Preview
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{episode.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Shape Tomorrow's Pulse
                </h3>
                <p className="mb-6 opacity-90">
                  Your voice on Pulsechat contributes to future episodes — join the conversation that becomes the soundtrack
                </p>
                <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">
                    Join Pulsechat Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Podcast;

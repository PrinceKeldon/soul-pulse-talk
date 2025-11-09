import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Podcast = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pulse Podcast
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            The world's emotional heartbeat, told through sound.
          </p>

          {/* Featured Episode */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Today's Pulse</CardTitle>
              <CardDescription>
                Every 24 hours, humanity creates a new emotional snapshot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center p-8">
                  <p className="text-muted-foreground mb-4">
                    Spotify player embed will appear here
                  </p>
                  <code className="text-sm bg-background p-2 rounded">
                    {`<iframe src="https://open.spotify.com/embed/..." />`}
                  </code>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Global Emotion Summary</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Hopeful
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      Calm
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      Reflective
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Today's Pulse</h3>
                  <p className="text-muted-foreground">
                    Today, the world spoke with hope and resilience. From quiet moments of reflection to bursts of shared joy, 
                    humanity's emotional rhythm revealed a collective desire for connection and understanding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Episode Archive */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Episode Archive</h2>
            <div className="grid gap-6">
              {[
                { date: "March 8, 2025", mood: "Hopeful · Energetic", description: "A day of global optimism and collective energy" },
                { date: "March 7, 2025", mood: "Calm · Reflective", description: "Quiet contemplation across time zones" },
                { date: "March 6, 2025", mood: "Tense · Determined", description: "The world processing change with resilience" },
              ].map((episode, index) => (
                <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{episode.date}</CardTitle>
                        <CardDescription className="mt-2">{episode.mood}</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        Listen
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
                  Join PulseChat to shape tomorrow's Pulse
                </h3>
                <p className="mb-6 opacity-90">
                  Your voice contributes to the world's daily heartbeat
                </p>
                <a href="https://pulsechat.online" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">
                    Join the Conversation
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

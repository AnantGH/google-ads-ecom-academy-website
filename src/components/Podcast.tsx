import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download, Headphones } from "lucide-react";

const Podcast = () => {
  const episodes = [
    {
      title: "From $0 to $10K: My Complete Journey",
      description: "John shares his entire story from complete beginner to 6-figure entrepreneur",
      duration: "45 min",
      date: "Jan 15, 2024"
    },
    {
      title: "The Google Ads Secrets Nobody Talks About",
      description: "Advanced strategies that separate winners from losers in Google Ads",
      duration: "38 min", 
      date: "Jan 8, 2024"
    },
    {
      title: "Student Success Story: Sarah's $8K Month",
      description: "Interview with Sarah who went from beginner to $8K/month in 75 days",
      duration: "32 min",
      date: "Jan 1, 2024"
    },
    {
      title: "Product Research Mastery",
      description: "How to find winning products that sell like crazy",
      duration: "41 min",
      date: "Dec 25, 2023"
    }
  ];

  return (
    <section id="podcast" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-green/20 text-accent-green border-accent-green/30">
            🎧 Podcast
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Ecom Success Podcast
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Weekly episodes packed with actionable strategies, student interviews, and insider secrets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Featured Episode */}
          <div className="space-y-6">
            <Card className="bg-gradient-accent/10 border-accent-blue/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Headphones className="w-6 h-6 text-accent-blue mr-3" />
                  <Badge className="bg-accent-blue/20 text-accent-blue">Featured Episode</Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  From $0 to $10K: My Complete Journey
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  In this episode, John reveals his complete journey from having $300 to his name 
                  to building multiple 6-figure dropshipping businesses. No fluff, just the raw truth 
                  about what it really takes to succeed.
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">45 minutes</span>
                  <span className="text-sm text-muted-foreground">January 15, 2024</span>
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-gradient-accent text-primary-foreground font-bold flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Listen Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3">Subscribe & Never Miss an Episode</h4>
                <p className="text-muted-foreground mb-4">
                  Get notified when new episodes drop with exclusive strategies and student interviews.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Apple Podcasts</Button>
                  <Button variant="outline" size="sm">Spotify</Button>
                  <Button variant="outline" size="sm">YouTube</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Recent Episodes */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Recent Episodes</h3>
            
            <div className="space-y-4">
              {episodes.map((episode, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-foreground flex-1 mr-4">
                        {episode.title}
                      </h4>
                      <Button variant="ghost" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {episode.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{episode.duration}</span>
                      <span>{episode.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
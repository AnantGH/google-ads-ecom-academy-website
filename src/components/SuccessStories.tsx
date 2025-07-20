import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
  const stories = [
    {
      name: "Sascha Hunter",
      result: "€0 → €513,429",
      timeframe: "4 months",
      testimonial: "Ring the F***ing Bell AGAIN",
      subtitle: "After having performance stability issues, I finally have stable sales.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Kyle",
      result: "$0 → $1,000+",
      timeframe: "1 month", 
      testimonial: "per day within 1 month",
      subtitle: "Incredible results with the Google Ads system",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Olly",
      result: "£0 → £55,800",
      timeframe: "9 weeks",
      testimonial: "Amazing transformation",
      subtitle: "From zero to consistent 5-figure months",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-accent-blue text-accent-blue">
            Student Success
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-accent-blue">100+</span>{" "}
            <span className="text-foreground">People Achieved Their Dream Life Already</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's just a glimpse of what's possible when you follow the system. These students applied what I teach and scaled their stores profitably using Google Ads — often in just a few months.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Your success story could be next...
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-blue font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.timeframe}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-success">
                    {story.result}
                  </div>
                  <h4 className="font-semibold text-foreground">{story.testimonial}</h4>
                  <p className="text-sm text-muted-foreground">{story.subtitle}</p>
                </div>

                {/* Progress Indicator */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-success h-2 rounded-full transition-all duration-1000 group-hover:w-full"
                    style={{ width: `${80 + index * 5}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to write your own success story?
          </p>
          <div className="inline-flex items-center space-x-2 text-accent-blue">
            <span>See more results below</span>
            <div className="w-6 h-6 animate-bounce">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
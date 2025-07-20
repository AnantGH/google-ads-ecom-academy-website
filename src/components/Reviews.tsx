import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "This program completely changed my life. I went from $0 to $8,000/month in just 75 days. The mentorship is incredible!",
      result: "$8,000/month",
      timeframe: "75 days"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Best investment I've ever made. The step-by-step system works exactly as promised. Now making consistent $12k/month.",
      result: "$12,000/month",
      timeframe: "3 months"
    },
    {
      name: "Jessica Williams", 
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. Hit my first $10k month in 85 days!",
      result: "$10,000/month",
      timeframe: "85 days"
    },
    {
      name: "David Rodriguez",
      rating: 5,
      text: "The Google Ads strategies are pure gold. Scaled from $0 to $15k/month with the exact methods taught.",
      result: "$15,000/month",
      timeframe: "4 months"
    },
    {
      name: "Amanda Thompson",
      rating: 5,
      text: "Finally found a program that actually delivers. The weekly calls and support made all the difference.",
      result: "$9,500/month",
      timeframe: "80 days"
    },
    {
      name: "Robert Kim",
      rating: 5,
      text: "Exceeded my expectations. The mentorship is world-class and the community is incredibly supportive.",
      result: "$11,000/month",
      timeframe: "90 days"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-green/20 text-accent-green border-accent-green/30">
            ⭐ Reviews
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Google Ads Ecom Academy Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our students are saying about their incredible transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{review.text}"
                </p>
                
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-money-green font-bold">{review.result}</span>
                    <span className="text-sm text-muted-foreground">in {review.timeframe}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
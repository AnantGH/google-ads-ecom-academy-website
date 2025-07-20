import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Phone, Zap, TrendingUp } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Apply To Join",
      description: "Fill out a quick 2-minute application so we can make sure this business model fits your goals. If it's a match, we'll guide you through the next steps.",
      color: "accent-blue"
    },
    {
      number: "02", 
      icon: Phone,
      title: "Book Your Free Intro Call",
      description: "Once accepted, you'll be invited to book a call. We'll walk you through the system and how to hit $10,000/month as fast as possible.",
      color: "accent-purple"
    },
    {
      number: "03",
      icon: Zap,
      title: "Get Instant Access",
      description: "Get instant access to the private community inside the Academy, complete with 63+ pre-recorded videos & VIP mentorship from Theo. Everything you need to make $10,000/Month in 90 days.",
      color: "accent-green"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Launch & Get Sales",
      description: "Start running your first campaigns, make consistent profitable sales, and scale with confidence using the exact framework taught inside the program.",
      color: "money-green"
    }
  ];

  return (
    <section id="process-steps" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How it works: The 4-step{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">GADS</span>{" "}
            process
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Getting started with the Google Ads Ecom Academy is simple. We're one of the only programs that teaches Google Ads at this level — and we back it with real results. Follow these 4 steps to launch and scale your dropshipping store:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="p-6 space-y-4 relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div className={`text-6xl font-bold text-${step.color} opacity-20`}>
                      {step.number}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-${step.color}/20 flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 text-${step.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-accent text-primary-foreground font-bold px-8 py-4 text-lg shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Apply For Mentorship →
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 100+ students already building their dream businesses
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
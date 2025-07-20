import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Find Winning Products",
    "Build Your Shopify Store", 
    "Get High-Intent Traffic",
    "Complete Google Ads Masterclass",
    "$0 to $10,000/Month Within 90 Days",
    "VIP Access & Weekly Coaching Calls"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/20 border border-accent-blue/30">
              <span className="text-accent-blue text-sm font-medium">💰 Proven System</span>
            </div>

            {/* Main Headline - Original Style */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Make <span className="text-transparent bg-clip-text bg-gradient-accent">$10,000/Month</span> in 90 Days (or Less) with Google Ads Dropshipping - Even if you have No Experience
              </h1>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-gradient-accent text-primary-foreground font-bold px-8 py-4 text-lg shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Apply For Mentorship →
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card bg-card border border-border">
              <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-primary-foreground border-y-[4px] border-y-transparent ml-1" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Make $10,000/Month in 90 Days or Less
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-money-green">100+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">90</div>
                <div className="text-sm text-muted-foreground">Days to Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
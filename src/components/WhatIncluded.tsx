import { Card, CardContent } from "@/components/ui/card";
import { Search, Store, Target, GraduationCap } from "lucide-react";

const WhatIncluded = () => {
  const modules = [
    {
      icon: Search,
      title: "Find Winning Products",
      description: "Learn how to find profitable, in-demand products using data — not guesswork. We'll show you the exact 4-stage product validation method so that you can pick winners before spending a penny on ads.",
      image: "/api/placeholder/300/200"
    },
    {
      icon: Store,
      title: "Build Your Shopify Store", 
      description: "Set up a clean, high-converting Shopify store using our plug-and-play template. We'll cover everything from legal pages to conversion rate optimisation to make sure your store is Google-ready.",
      image: "/api/placeholder/300/200"
    },
    {
      icon: Target,
      title: "Get High-Intent Traffic",
      description: "Drive ready-to-buy traffic straight to your store using Google Ads campaigns. Targeting buyers who are already searching for the products that you sell.",
      image: "/api/placeholder/300/200"
    },
    {
      icon: GraduationCap,
      title: "Google Ads Masterclass",
      description: "Master Google Ads with our comprehensive training. Learn campaign setup, optimization, scaling strategies, and how to achieve profitable ROAS consistently.",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What's Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build a profitable dropshipping business with Google Ads
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/3 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 p-8 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent-blue/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-accent-blue" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-2/3 p-6 space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {module.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-accent-green font-bold text-xl">63+</span>
            </div>
            <h4 className="font-semibold text-foreground">Training Videos</h4>
            <p className="text-sm text-muted-foreground">Comprehensive video training covering every aspect</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-accent-purple font-bold text-xl">VIP</span>
            </div>
            <h4 className="font-semibold text-foreground">Weekly Coaching</h4>
            <p className="text-sm text-muted-foreground">Direct access to Theo and weekly coaching calls</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-money-green/20 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-money-green font-bold text-xl">∞</span>
            </div>
            <h4 className="font-semibold text-foreground">Lifetime Access</h4>
            <p className="text-sm text-muted-foreground">Keep access to all materials and updates forever</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIncluded;
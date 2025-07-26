import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OurMentor = () => {
  return (
    <section id="our-mentor" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Mentor Image & Analytics */}
          <div className="relative">
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-accent-blue/20 to-primary/30 rounded-lg flex items-center justify-center border border-border">
                <div className="text-center text-primary-foreground/60">
                  <div className="text-6xl mb-2">👨‍💼</div>
                  <div className="text-lg font-semibold">Theo Clarke</div>
                </div>
              </div>
              
              {/* Analytics Chart Overlay */}
              <div className="absolute bottom-4 left-4 bg-background rounded-lg p-4 shadow-lg border">
                <div className="flex space-x-4 mb-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-accent-blue">7.1M</div>
                    <div className="text-xs text-muted-foreground">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-destructive">£3.48M</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-yellow-500">20.0M</div>
                    <div className="text-xs text-muted-foreground">Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-500">596.36%</div>
                    <div className="text-xs text-muted-foreground">ROAS</div>
                  </div>
                </div>
                <div className="h-16 w-full bg-gradient-to-r from-accent-blue/20 to-green-500/20 rounded"></div>
              </div>
            </div>
            
            {/* Before/After Images */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div className="text-center">
                <div className="text-sm font-bold text-primary-foreground mb-2">2023:</div>
                <div className="w-24 h-16 bg-muted rounded-lg border-2 border-border"></div>
              </div>
              <ArrowRight className="text-primary-foreground w-8 h-8" />
              <div className="text-center">
                <div className="text-sm font-bold text-primary-foreground mb-2">2024:</div>
                <div className="w-24 h-16 bg-accent-blue/20 rounded-lg border-2 border-accent-blue"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Mentor Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary-foreground/80 text-sm mb-2">Meet your mentor:</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Theo Clarke
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                Theo Clarke is an ecommerce entrepreneur, Google Ads expert, and mentor who helps people launch and scale profitable 
                online stores using data - not guesswork.
              </p>
            </div>

            <div className="space-y-4 text-primary-foreground/90">
              <p>
                <span className="text-accent-blue font-semibold">In 2020,</span> he built and scaled his first high-ticket dropshipping store to $30,000/month in just 6 months, entirely with Google 
                Ads. This success led to a mentorship role with Drop Ship Lifestyle (Shopify's #1 rated ecommerce course), where he helped 
                hundreds of new entrepreneurs start making consistent sales using Google Ads.
              </p>
              
              <p>
                Here he realised that most ecom owners struggle with the one thing that actually matters - getting sales! Theo launched 
                Profit Driven Marketing, a Google Ads agency that's since generated £20M+ in sales for D2C brands.
              </p>
              
              <p>
                <span className="text-accent-blue font-semibold">In 2024,</span> he relocated to Dubai and founded The Google Ads Ecom Academy — a mentorship program designed to help 
                aspiring dropshippers go from $0 to $10,000/month in sales using Google Ads.
              </p>
              
              <p>
                He also hosts The Theo Clarke Podcast, where he interviews top ecommerce entrepreneurs. Recent guests include The Ecom 
                King, Ecom Legend, Ecom Wizard, Dihano Harting — and many more.
              </p>
            </div>

            <Button className="bg-accent-blue hover:bg-accent-blue/90 text-primary-foreground font-bold px-8 py-3 text-lg">
              Apply For Mentorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMentor;
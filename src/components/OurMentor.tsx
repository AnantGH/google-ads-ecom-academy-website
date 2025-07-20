import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, DollarSign, Calendar } from "lucide-react";

const OurMentor = () => {
  const achievements = [
    {
      icon: DollarSign,
      number: "$2M+",
      label: "Generated in Revenue"
    },
    {
      icon: Users,
      number: "500+",
      label: "Students Mentored"
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate"
    },
    {
      icon: Calendar,
      number: "5+",
      label: "Years Experience"
    }
  ];

  return (
    <section id="our-mentor" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-purple/20 text-accent-purple border-accent-purple/30">
            🎯 Our Mentor
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Your Mentor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from someone who's actually done it and helped hundreds achieve the same results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">John Martinez</h3>
                    <p className="text-accent-blue font-semibold">Founder & Lead Mentor</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    John went from working a dead-end job to building multiple 7-figure dropshipping businesses using Google Ads. 
                    After achieving massive success, he decided to share his exact system with others who want to break free from 
                    the traditional 9-5 lifestyle.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">His Journey:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Started with $300 and a laptop in his bedroom
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Hit his first $10K month within 6 months
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Scaled to multiple 6-figure businesses
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Now mentors others to achieve the same success
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-accent/10 border-accent-blue/30">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-foreground mb-3">Personal 1-on-1 Mentorship</h4>
                <p className="text-muted-foreground mb-4">
                  Get direct access to John through weekly coaching calls, private messaging, 
                  and personalized feedback on your campaigns.
                </p>
                <Button className="bg-gradient-accent text-primary-foreground font-bold">
                  Book Your Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMentor;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin } from "lucide-react";

const OurStudents = () => {
  const students = [
    {
      name: "Alex Rivera",
      age: 28,
      location: "Los Angeles, CA",
      background: "Former Uber Driver",
      result: "$14,000/month",
      timeframe: "3 months",
      story: "Went from driving 12 hours a day to building a profitable dropshipping business"
    },
    {
      name: "Emily Carter",
      age: 34,
      location: "Austin, TX", 
      background: "Stay-at-home Mom",
      result: "$8,500/month",
      timeframe: "85 days",
      story: "Built her business while raising two kids, now has financial freedom"
    },
    {
      name: "Marcus Johnson",
      age: 25,
      location: "Miami, FL",
      background: "College Student",
      result: "$12,000/month",
      timeframe: "4 months",
      story: "Started with $500 and scaled to 5-figure months before graduation"
    },
    {
      name: "Sofia Martinez",
      age: 31,
      location: "Phoenix, AZ",
      background: "Retail Manager",
      result: "$10,200/month",
      timeframe: "90 days",
      story: "Escaped the 9-5 grind and now travels while running her business"
    },
    {
      name: "James Wilson",
      age: 42,
      location: "Seattle, WA",
      background: "Construction Worker",
      result: "$16,000/month",
      timeframe: "5 months",
      story: "Transitioned from physical labor to digital entrepreneurship"
    },
    {
      name: "Isabella Chen",
      age: 29,
      location: "New York, NY",
      background: "Marketing Assistant",
      result: "$9,800/month",
      timeframe: "75 days",
      story: "Used her marketing background to accelerate her dropshipping success"
    }
  ];

  return (
    <section id="our-students" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-blue/20 text-accent-blue border-accent-blue/30">
            👥 Our Students
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real results. See how our students transformed their lives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">Age {student.age}</p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-money-green" />
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {student.location}
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-muted-foreground">Background: </span>
                    <span className="text-foreground">{student.background}</span>
                  </div>
                </div>
                
                <div className="bg-gradient-success/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-money-green font-bold text-lg">{student.result}</span>
                    <span className="text-sm text-muted-foreground">in {student.timeframe}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  "{student.story}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStudents;
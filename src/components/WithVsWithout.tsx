import { X, Check } from "lucide-react";

const WithVsWithout = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            With vs. without The Google Ads Ecom Academy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without The Academy */}
          <div className="bg-background border border-destructive/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-destructive/10 rounded-full">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Without The Academy</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You waste thousands testing ads that don't convert</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Your results are inconsistent & unpredictable</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Meta ads keep burning cash, and scaling feels impossible</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You're stuck watching competitors scale while you guess</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You rely on YouTube videos and conflicting advice</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You feel overwhelmed by Google Ads settings & data</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Your business is plateauing, and growth feels out of reach</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You're doing it all alone, with no expert guidance or community</span>
              </li>
            </ul>
          </div>

          {/* With The Academy */}
          <div className="bg-background border border-primary/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-full">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">With The Academy</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You follow a proven framework that removes all the guesswork</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Your Google Ads consistently drive profitable sales</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You scale with confidence — no Meta ads required</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Your competitors wonder how you're growing so fast</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You use battle-tested structures and automation tools</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You know exactly how to optimize and scale</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Your ecom store is growing predictably month-over-month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">You're backed by a winning community and expert support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithVsWithout;
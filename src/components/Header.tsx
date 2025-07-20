import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "About Us", "Reviews", "Our Students", "Results", 
    "How It Works", "What We Offer", "Our Mentor", "Podcast", "FAQs"
  ];

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-xl font-bold text-foreground">Gads Ecom</span>
            <span className="text-xl font-bold text-accent-blue">Academy</span>
          </div>

          {/* Navigation - Better spacing and responsive */}
          <nav className="hidden xl:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap px-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-gradient-accent text-primary-foreground font-semibold px-4 py-2 shadow-glow hover:shadow-lg transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0"
          >
            Apply For Mentorship
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
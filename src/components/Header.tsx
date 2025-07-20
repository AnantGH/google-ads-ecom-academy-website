import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "About Us", "Reviews", "Our Students", "Results", 
    "How It Works", "What We Offer", "Our Mentor", "Podcast", "FAQs"
  ];

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">Gads Ecom</span>
            <span className="text-2xl font-bold text-accent-blue">Academy</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-gradient-accent text-primary-foreground font-semibold px-6 py-2 shadow-glow hover:shadow-lg transition-all duration-300"
          >
            Apply For Mentorship
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
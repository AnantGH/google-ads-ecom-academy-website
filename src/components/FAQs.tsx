import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Do I need experience with Google Ads or dropshipping?",
      answer: "Not at all! Our program is designed for complete beginners. We start from the very basics and guide you step-by-step through everything you need to know. Many of our most successful students had zero experience when they started."
    },
    {
      question: "How much money do I need to start?",
      answer: "We recommend starting with at least $500-1000 for your first campaigns and inventory. However, we'll teach you how to minimize risk and scale gradually. Some students have started with as little as $300 and still achieved great results."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "While results vary, most of our dedicated students see their first profitable campaigns within 30-60 days. Our goal is to help you reach $10,000/month within 90 days, and many students achieve this faster with consistent effort."
    },
    {
      question: "Is this just another course or do I get real support?",
      answer: "This is much more than a course. You get direct access to John through weekly coaching calls, private messaging, campaign reviews, and a supportive community of fellow entrepreneurs. It's like having a successful mentor guide you personally."
    },
    {
      question: "What if I don't have much time to work on this?",
      answer: "Our system is designed to be efficient. Most students spend 2-3 hours per day initially setting up their business, then 1-2 hours daily managing and optimizing. Once systems are in place, many students run their businesses in just 30-60 minutes per day."
    },
    {
      question: "Do you guarantee results?",
      answer: "While we can't guarantee specific results (success depends on your effort and implementation), we do offer a 30-day money-back guarantee. If you're not completely satisfied with the program after 30 days, we'll refund your investment."
    },
    {
      question: "What makes this different from other programs?",
      answer: "Three key differences: 1) Proven system that's generated over $2M in student revenue, 2) Direct access to a mentor who's actually done it, not just taught it, and 3) Focus on Google Ads specifically, which is less saturated than Facebook Ads."
    },
    {
      question: "Can I do this while working a full-time job?",
      answer: "Absolutely! Many of our students started while working full-time. The beauty of dropshipping is that you can work on it in the evenings and weekends. Once profitable, many students transition to doing this full-time."
    },
    {
      question: "What kind of support do I get after joining?",
      answer: "You get lifetime access to the training materials, weekly group coaching calls with John, access to our private community, campaign review sessions, and direct messaging support. We're committed to your success long-term."
    },
    {
      question: "Is there an application process?",
      answer: "Yes, we have a brief application process to ensure we only work with serious, committed individuals. This helps maintain the quality of our community and ensures everyone gets the attention they deserve. The application takes about 5 minutes to complete."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-purple/20 text-accent-purple border-accent-purple/30">
            ❓ FAQs
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
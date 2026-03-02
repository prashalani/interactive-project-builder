import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can I book a customized tour package?",
    a: "Absolutely! We specialize in tailor-made tour packages. Just share your preferences, dates, and budget—and we'll create a personalized itinerary that perfectly matches your travel dreams.",
  },
  {
    q: "Do you offer airport pickup services?",
    a: "Yes, we provide comfortable and reliable airport pickup and drop-off services. Our drivers will be waiting for you at the airport with a warm welcome.",
  },
  {
    q: "Is Sri Lanka safe for solo travelers or families?",
    a: "Sri Lanka is one of the safest countries in South Asia for travelers. Whether you're solo, a couple, or a family—our team ensures your safety and comfort throughout the journey.",
  },
  {
    q: "Can you help with train tickets or safari bookings?",
    a: "Of course! We handle all reservations including scenic train rides, national park safaris, whale watching, and more—so you don't have to worry about logistics.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your Questions, Answered
        </p>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

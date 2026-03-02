import { MapPin, Settings, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Experts in Sri Lankan Travel",
    desc: "Our team is made up of passionate locals who know Sri Lanka inside out. From hidden waterfalls to the best roadside eateries, we take you beyond the guidebooks.",
  },
  {
    icon: Settings,
    title: "100% Tailored & Hassle-Free Planning",
    desc: "Every trip we plan is customized to fit your interests, schedule, and budget. Just tell us what you're looking for—and we'll handle everything else.",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable & Safe Private Transport",
    desc: "Travel in clean, air-conditioned vehicles with friendly, experienced drivers. Your comfort and safety are always our priority.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="whyus" className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-bold">{r.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

import { Plane, Hotel, Car, Users, TreePine, Landmark, Binoculars } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Tailor-Made Tour Packages",
    desc: "Custom itineraries across Sri Lanka to match your interests, budget, and travel style.",
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Bookings",
    desc: "From boutique stays to beachfront resorts—we handpick the best accommodations for you.",
  },
  {
    icon: Car,
    title: "Airport Transfers & Transport",
    desc: "Safe, reliable, and air-conditioned transport throughout your journey.",
  },
  {
    icon: Users,
    title: "Group Tours & Corporate Travel",
    desc: "School tours, pilgrimages, MICE events, or company retreats—we take care of it all.",
  },
  {
    icon: TreePine,
    title: "Hiking & Nature Escapes",
    desc: "3–4 day forest hikes, waterfall treks, and camping under starlit skies.",
  },
  {
    icon: Landmark,
    title: "Cultural & Heritage Trails",
    desc: "Ancient temples, colorful festivals, and local food experiences.",
  },
  {
    icon: Binoculars,
    title: "Safaris & Wild Adventures",
    desc: "Get up close with elephants in Yala, chase sunsets on a jeep safari, and trek into the heart of the forest.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Do We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <s.icon className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

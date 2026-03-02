import { Check } from "lucide-react";

const packages = [
  {
    title: "Customizable Tours",
    subtitle: "Trips designed your way, down to every detail.",
    items: [
      "Fully personalized itineraries",
      "Flexible dates & duration",
      "Hotel & stay options",
      "Transport arrangements",
      "Activity add-ons",
      "Budget-based planning",
      "Dedicated travel support",
    ],
  },
  {
    title: "Day & Night Tours",
    subtitle: "Immersive journeys that go beyond daylight.",
    items: [
      "Roam Ceylon Highlight Tour",
      "Northern + Cultural Triangle Tour",
      "Grand Tour",
      "Cultural Triangle Tour",
      "10 Days Tours",
      "2 Days Tour",
      "3 Days Tours",
    ],
  },
  {
    title: "Day Excursions",
    subtitle: "Quick escapes packed with iconic sights.",
    items: [
      "Pinnawala & Kandy Tour",
      "Sigiriya & Dambulla Tour",
      "Galle Tour - Southern Scenery",
      "Colombo - City Tour",
      "Udawalave Elephant Safari",
      "Negombo - City Tour",
      "Mirissa Whale Watching",
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                <p className="text-sm opacity-60">{pkg.subtitle}</p>
              </div>
              <ul className="space-y-3">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;

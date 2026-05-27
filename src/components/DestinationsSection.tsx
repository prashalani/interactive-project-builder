import ruwanweliseya from "../assets/Ruwanweliseya.webp";
import santorini from "../assets/Santorini.webp";
import yala from "../assets/yala.jpeg";

const destinations = [
  { src: ruwanweliseya, alt: "Ruwanwelisaya Stupa" },
  { src: santorini, alt: "Scenic Coastline" },
  { src: yala, alt: "Yala National Park" },
  { src: "/images/beach1.jpg", alt: "Beach" },
  { src: "/images/beach2.jpg", alt: "Coast" },
  { src: "/images/wildlife.jpg", alt: "Wildlife" },
  { src: "/images/elephants.jpg", alt: "Elephants" },
  { src: "/images/nine-arches.jpg", alt: "Nine Arches Bridge" },
  { src: "/images/tea-fields.jpg", alt: "Tea Fields" },
];

const DestinationsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Must-Visit Gems Across Sri Lanka
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          From misty mountains and ancient cities to golden beaches and lush rainforests, Sri Lanka offers a stunning variety of landscapes and experiences.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden aspect-square shadow-md"
            >
              <img
                src={d.src}
                alt={d.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

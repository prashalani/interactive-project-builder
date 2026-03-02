const AboutSection = () => {
  const images = [
    { src: "/images/statue.jpg", alt: "Buddha statue" },
    { src: "/images/hiking.jpg", alt: "Hiking in Sri Lanka" },
    { src: "/images/surfer.jpg", alt: "Surfing" },
  ];

  return (
    <section id="about" className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image grid */}
          <div className="flex gap-4 lg:w-1/2">
            {images.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-lg flex-1 ${
                  i === 1 ? "animate-float-delayed -mt-8" : "animate-float"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-lg font-semibold text-primary">
              Your journey to finding the perfect Vacation starts with Roam Ceylon Tours
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Ceylon Travels your trusted partner in discovering Sri Lanka's beauty.</strong>{" "}
              Whether you're seeking a serene beach escape, a scenic hill-country retreat, or a cultural adventure, we offer tailored travel experiences to match your dream getaway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

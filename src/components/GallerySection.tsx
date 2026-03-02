const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/beach1.jpg",
  "/images/beach2.jpg",
  "/images/wildlife.jpg",
  "/images/elephants.jpg",
  "/images/tea-fields.jpg",
  "/images/misty-hills.jpg",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-section-warm overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Roam Ceylon Gallery
        </h2>
      </div>
      {/* Scrolling row */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll-left w-max">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="w-56 h-56 rounded-xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src={src}
                alt={`Gallery ${(i % images.length) + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

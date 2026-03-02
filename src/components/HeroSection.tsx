const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src="/images/coconut.jpg"
        alt="Sri Lanka adventure"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Roam Ceylon Tours – Your Gateway to Sri Lanka's Wonders
        </h1>
        <a
          href="#contact"
          className="inline-block bg-foreground text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

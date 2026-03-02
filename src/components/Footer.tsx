const Footer = () => {
  return (
    <footer className="bg-section-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RoamCeylonTours</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Ceylon Travels your trusted partner in discovering Sri Lanka's beauty
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-60">
              {["Home", "About", "Services", "Why Us", "Testimonials", "Packages"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:opacity-100 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>Tailor-Made Tour Packages</li>
              <li>Hotel & Resort Bookings</li>
              <li>Airport Transfers & Transport</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "/images/surfer.jpg",
    title: "Love in Every Leaf",
    text: "There's a special joy in slowing down, holding hands, and letting nature surprise you. In Sri Lanka's lush landscapes, two couples wandered through whispering forests and misty waterfalls, finding peace away from the rush of cities.",
  },
  {
    image: "/images/misty-hills.jpg",
    title: "Romance in the Misty Hills",
    text: "Sri Lanka's highlands are pure romance—tea trails, cool breezes, and sunsets over emerald valleys. From Ella's Nine Arches Bridge to Nuwara Eliya's dreamy gardens, every moment feels like love in the clouds.",
  },
  {
    image: "/images/culture.jpg",
    title: "A Journey Through Time & Tradition",
    text: "From Kandy's sacred Temple of the Tooth to the ancient city of Anuradhapura, Sri Lanka's culture is alive with stories. Every festival, mural, and ritual brings you closer to its vibrant soul.",
  },
  {
    image: "/images/heartbeat.jpg",
    title: "Heartbeats of Sri Lanka",
    text: "Honestly, the best part of my trip wasn't the views—it was the people. I shared a home-cooked meal in a tiny village and even ended up playing cricket with a bunch of kids on a dusty street.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Experiences from Our Adventurers
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Unforgettable Escapes, Happy Travelers
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
            <div className="md:w-1/2 h-72 md:h-96">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 space-y-4">
              <h3 className="text-2xl font-bold">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

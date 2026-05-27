import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.from("contact_submissions").insert([
      { name: form.name, email: form.email, message: form.message },
    ]);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact Info</h2>
            </div>
            <div className="space-y-5">
              <a href="tel:+94775788118" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                +94 77 578 8118
              </a>
              <a href="mailto:info.roamceylon@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                info.roamceylon@gmail.com
              </a>
              <div className="flex items-start gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                368/24 Present Camp Road, Dalupatha, Negombo
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Your Message!</h3>

            {status === "success" ? (
              <div className="p-6 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center">
                <p className="font-semibold text-lg">Message sent!</p>
                <p className="text-sm mt-1">We'll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm underline text-green-700 hover:text-green-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

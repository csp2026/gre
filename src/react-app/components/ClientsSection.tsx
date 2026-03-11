import { useEffect, useState, useRef } from "react";
import { Building2, Factory, Landmark, Home, Building, Hotel } from "lucide-react";

const clients = [
  {
    icon: Building2,
    name: "Real Estate Developers",
    description: "Leading property developers across Gujarat",
  },
  {
    icon: Factory,
    name: "Industrial Groups",
    description: "Manufacturing and industrial conglomerates",
  },
  {
    icon: Landmark,
    name: "Government Bodies",
    description: "State and local government agencies",
  },
  {
    icon: Home,
    name: "Housing Societies",
    description: "Cooperative housing and township projects",
  },
  {
    icon: Building,
    name: "Corporate Clients",
    description: "National and multinational corporations",
  },
  {
    icon: Hotel,
    name: "Hospitality Sector",
    description: "Hotels, resorts, and leisure properties",
  },
];

const testimonials = [
  {
    quote:
      "GRE Infrastructure provided exceptional guidance throughout our land acquisition process. Their expertise in regulatory matters saved us significant time and resources.",
    author: "Rajesh Patel",
    position: "Director, Patel Realty Group",
  },
  {
    quote:
      "Their market research and feasibility studies were instrumental in our decision-making. Highly professional and detail-oriented team.",
    author: "Amit Shah",
    position: "CEO, Shah Infrastructure",
  },
  {
    quote:
      "From documentation to CLU approvals, GRE handled everything seamlessly. A trusted partner for any real estate venture in Gujarat.",
    author: "Priya Mehta",
    position: "Managing Partner, Mehta Developers",
  },
];

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#b8926e]/10 rounded-full text-[#b8926e] text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3b1107] mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#3b1107]/70 max-w-2xl mx-auto">
            We've partnered with diverse organizations across Gujarat, helping
            them achieve their real estate and infrastructure goals.
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group text-center p-6 bg-gradient-to-b from-[#e7decf]/50 to-transparent rounded-2xl border border-[#d5c9ba]/30 hover:border-[#b8926e]/50 hover:bg-[#e7decf] transition-all duration-500 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <client.icon className="w-8 h-8 text-[#b8926e]" />
              </div>
              <h3 className="text-sm font-semibold text-[#3b1107] mb-1">
                {client.name}
              </h3>
              <p className="text-xs text-[#3b1107]/60 hidden sm:block">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`relative bg-gradient-to-br from-[#3b1107] to-[#3b1107]/90 rounded-3xl p-8 sm:p-12 overflow-hidden transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8926e]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#b8926e]/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                What Our Clients Say
              </h3>
              <div className="w-16 h-1 bg-[#b8926e] mx-auto rounded-full" />
            </div>

            {/* Testimonial Content */}
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                    index === activeTestimonial
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                >
                  <svg
                    className="w-12 h-12 text-[#b8926e]/50 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-[#b8926e] font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-white/60 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 ${
                    index === activeTestimonial
                      ? "w-8 h-2 bg-[#b8926e] rounded-full"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50 rounded-full"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

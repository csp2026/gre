import { useEffect, useState, useRef } from "react";
import { Shield, Users, Award, Clock, Target, Handshake } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Expert Consultants" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const reasons = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Over 15 years of specialized experience in Gujarat's real estate and infrastructure advisory sector.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We prioritize understanding your unique requirements and delivering tailored solutions.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Successfully completed 500+ projects with a 98% client satisfaction rate.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Committed to meeting deadlines without compromising on quality or compliance.",
  },
  {
    icon: Target,
    title: "Strategic Insights",
    description:
      "Data-driven market intelligence and feasibility analysis for informed decision-making.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description:
      "Comprehensive services from land acquisition to documentation and regulatory approvals.",
  },
];

function Counter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#e7decf] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#b8926e]/10 rounded-full text-[#b8926e] text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3b1107] mb-6">
            Your Trusted Partner in
            <br />
            Real Estate Advisory
          </h2>
          <p className="text-lg text-[#3b1107]/70 max-w-2xl mx-auto">
            We bring expertise, integrity, and commitment to every project,
            ensuring your real estate ventures are built on a solid foundation.
          </p>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg shadow-[#3b1107]/5 border border-[#d5c9ba]/50 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#3b1107] mb-2">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-sm sm:text-base text-[#b8926e] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl border border-[#d5c9ba]/50 hover:border-[#b8926e]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#b8926e]/10 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#b8926e] to-[#3b1107] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3b1107] mb-3">
                {reason.title}
              </h3>
              <p className="text-[#3b1107]/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

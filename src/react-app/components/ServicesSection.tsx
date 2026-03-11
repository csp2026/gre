import { useState } from "react";
import {
  MapPin,
  FileSearch,
  BarChart3,
  FileText,
  Building,
  Scale,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Land Acquisition",
    description:
      "Strategic identification and evaluation of land parcels. We conduct thorough due diligence, title verification, and negotiation support to secure optimal land assets for your projects.",
    features: [
      "Site identification & evaluation",
      "Title verification & due diligence",
      "Negotiation & deal structuring",
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: FileSearch,
    title: "Feasibility Studies",
    description:
      "Comprehensive project viability analysis covering technical, financial, and regulatory aspects. We help you understand risks and opportunities before committing resources.",
    features: [
      "Technical feasibility analysis",
      "Financial modeling & projections",
      "Risk assessment & mitigation",
    ],
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description:
      "Data-driven market intelligence covering demand analysis, pricing trends, and competitive landscape. Make informed decisions backed by robust research.",
    features: [
      "Demand & supply analysis",
      "Pricing & trend forecasting",
      "Competitive benchmarking",
    ],
    gradient: "from-amber-500 to-amber-600",
  },
  {
    icon: FileText,
    title: "Statutory Documentation",
    description:
      "End-to-end support for all regulatory approvals and documentation. Navigate complex compliance requirements with expert guidance.",
    features: [
      "Approval & permit assistance",
      "Compliance documentation",
      "Liaison with authorities",
    ],
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Building,
    title: "Project Advisory",
    description:
      "Strategic guidance throughout the project lifecycle. From concept to completion, we provide insights that drive successful outcomes.",
    features: [
      "Project planning & strategy",
      "Execution oversight",
      "Performance optimization",
    ],
    gradient: "from-rose-500 to-rose-600",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Expert navigation of real estate regulations and legal requirements. Stay compliant and avoid costly delays with our specialized knowledge.",
    features: [
      "Regulatory framework guidance",
      "RERA compliance support",
      "Legal risk assessment",
    ],
    gradient: "from-cyan-500 to-cyan-600",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Advisory
            <span className="text-primary"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From land acquisition to project completion, we provide expert
            guidance at every stage of your real estate journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Card */}
              <div
                className={`
                  relative h-full bg-white dark:bg-card rounded-2xl p-8 
                  border border-border/50 shadow-sm
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? "shadow-2xl border-secondary/30 -translate-y-2" : ""}
                  ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-60 scale-[0.98]" : ""}
                `}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} 
                    opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient}
                    flex items-center justify-center mb-6
                    shadow-lg transition-transform duration-500
                    group-hover:scale-110 group-hover:rotate-3
                  `}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <div
                  className={`
                    flex items-center gap-2 text-sm font-semibold 
                    text-primary opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                  `}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Corner decoration */}
                <div
                  className={`
                    absolute top-4 right-4 w-20 h-20 
                    bg-gradient-to-br ${service.gradient} opacity-0 
                    rounded-full blur-2xl
                    group-hover:opacity-10 transition-opacity duration-500
                  `}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-border/50">
            <p className="text-foreground font-medium">
              Need a customized solution for your project?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

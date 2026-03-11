import { CheckCircle2, Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide strategic advisory services that empower real estate stakeholders to make informed decisions, minimize risks, and maximize returns on their investments.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted real estate advisory firm in Gujarat, known for our integrity, expertise, and commitment to client success.",
  },
  {
    icon: Award,
    title: "Values",
    description:
      "Integrity, transparency, and excellence guide every engagement. We prioritize our clients' interests and deliver actionable insights.",
  },
];

const highlights = [
  "Deep understanding of Gujarat's real estate landscape",
  "End-to-end advisory from acquisition to execution",
  "Regulatory expertise and compliance guidance",
  "Data-driven market intelligence and research",
  "Network of industry experts and stakeholders",
  "Track record of successful project deliveries",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#e7decf] to-[#d5c9ba]/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8926e]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#3b1107]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gujarat's Trusted Real Estate
            <span className="text-secondary"> Advisory Partner</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            With deep roots in Gujarat's real estate ecosystem, we bring
            unparalleled local expertise combined with industry-leading advisory
            methodologies.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl">
                {/* Inner content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                  <div className="text-8xl font-bold mb-4">15+</div>
                  <div className="text-2xl font-medium mb-2">
                    Years of Excellence
                  </div>
                  <div className="text-white/70 text-center">
                    Shaping Gujarat's real estate landscape through strategic
                    advisory
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white/20 rounded-full" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-secondary/30 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Bringing Clarity to Complex Real Estate Decisions
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gujarat Real Estate Infrastructure (GREI) is a premier advisory
              firm specializing in guiding developers, investors, and landowners
              through the complexities of real estate and infrastructure
              development.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our advisory spans land acquisition, feasibility studies, market
              research, and statutory documentation—bringing regulatory clarity,
              market intelligence, and execution-focused guidance at the
              earliest stages of development.
            </p>

            {/* Highlights list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/80 dark:hover:bg-white/5 transition-colors group"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-white dark:bg-white/5 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-secondary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/25">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

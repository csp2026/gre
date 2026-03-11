import { ArrowRight, MapPin, FileCheck, TrendingUp } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const features = [
  { icon: MapPin, text: "Land Acquisition" },
  { icon: FileCheck, text: "Feasibility Studies" },
  { icon: TrendingUp, text: "Market Research" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 border border-white/30 rounded-full" />
          <div className="absolute top-40 left-20 w-96 h-96 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border border-white/25 rounded-full" />
          <div className="absolute -bottom-20 right-40 w-64 h-64 border border-white/15 rounded-full" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Animated shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse animation-delay-200" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in opacity-0">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Trusted Real Estate Advisory
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100">
              Strategic Real Estate &{" "}
              <span className="text-secondary">Infrastructure</span> Advisory
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up opacity-0 animation-delay-200">
              Advising developers, investors, and landowners on critical real
              estate and infrastructure decisions with regulatory clarity,
              market intelligence, and execution-focused guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up opacity-0 animation-delay-300">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/25 group"
              >
                Start Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Explore Services
              </Button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up opacity-0 animation-delay-400">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <feature.icon className="w-4 h-4 text-secondary" />
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Stats card */}
          <div className="hidden lg:block animate-fade-in-right opacity-0 animation-delay-300">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-2xl blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-2xl blur-xl" />

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <StatCard number="15+" label="Years Experience" />
                  <StatCard number="500+" label="Projects Delivered" />
                  <StatCard number="₹2000" label="Cr+ Portfolio" suffix="+" />
                  <StatCard number="50+" label="Expert Team" />
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm text-center mb-4">
                    Trusted by leading developers across Gujarat
                  </p>
                  <div className="flex justify-center gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                      >
                        <span className="text-white/40 text-xs font-bold">
                          CLIENT
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-slide-up" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  number,
  label,
  suffix = "",
}: {
  number: string;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
      <div className="text-3xl font-bold text-white mb-1">
        {number}
        {suffix && <span className="text-secondary">{suffix}</span>}
      </div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

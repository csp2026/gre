import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    title: "Strategic Real Estate Advisory",
    subtitle: "Expert Guidance for Developers & Investors",
    description:
      "Bringing regulatory clarity, market intelligence, and execution-focused guidance at the earliest stages of development.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80",
    title: "Land Acquisition Excellence",
    subtitle: "Securing Premium Land Assets",
    description:
      "Strategic identification, thorough due diligence, and seamless acquisition of land parcels across Gujarat.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80",
    title: "Infrastructure Development",
    subtitle: "Building Tomorrow's Foundation",
    description:
      "Comprehensive advisory services for infrastructure projects that shape Gujarat's growth story.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b1107]/90 via-[#3b1107]/70 to-[#3b1107]/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Subtitle */}
                <div
                  className={`transform transition-all duration-700 delay-100 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <span className="inline-block px-4 py-2 bg-[#b8926e]/20 backdrop-blur-sm border border-[#b8926e]/30 rounded-full text-[#b8926e] text-sm font-medium mb-6">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 transform transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className={`text-lg sm:text-xl text-white/80 mb-8 leading-relaxed transform transition-all duration-700 delay-300 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-400 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#b8926e] text-white font-semibold rounded-lg hover:bg-[#b8926e]/90 transition-all shadow-lg shadow-[#b8926e]/25 hover:shadow-xl hover:shadow-[#b8926e]/30"
                  >
                    Get Consultation
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#b8926e] transition-all border border-white/20 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#b8926e] transition-all border border-white/20 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 700);
              }
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-10 h-3 bg-[#b8926e] rounded-full"
                : "w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

const services = [
  "Land Acquisition & Procurement",
  "Feasibility Studies & Consulting",
  "Market Research & Intelligence",
  "Project Evaluation & Advisory",
  "Documentation & CLU",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#3b1107] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 border border-[#b8926e]/10 rounded-full" />
        <div className="absolute -top-24 -right-24 w-80 h-80 border border-[#b8926e]/5 rounded-full" />
        
        {/* Small circles bottom left */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-[#b8926e]/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-[#b8926e]/5 rounded-full" />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#b8926e]/5 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#b8926e]/5 to-transparent" />
        
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b8926e]/5 rounded-full blur-3xl" />
      </div>

      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#b8926e] to-transparent" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Logo & Social */}
          <div className="lg:col-span-3 flex flex-col">
            <img
              src="https://019c8921-3d8f-75d4-8924-c80da6145fce.mochausercontent.com/logo.png"
              alt="Gujarat Real Estate Infrastructure"
              className="h-16 w-auto brightness-0 invert mb-8"
            />
            <div className="flex gap-4 mt-auto">
              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 bg-[#b8926e]/10 border border-[#b8926e]/20 rounded-xl flex items-center justify-center hover:bg-[#b8926e] hover:border-[#b8926e] transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-[#b8926e] group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-12 h-12 bg-[#b8926e]/10 border border-[#b8926e]/20 rounded-xl flex items-center justify-center hover:bg-[#b8926e] hover:border-[#b8926e] transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-[#b8926e] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8926e] mb-8">
              Quick Links
            </h3>
            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8926e] mb-8">
              Our Services
            </h3>
            <ul className="space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8926e] mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <a
                href="#"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 bg-[#b8926e]/10 border border-[#b8926e]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b8926e]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#b8926e]" />
                </div>
                <div>
                  <p className="text-white/80 group-hover:text-white transition-colors leading-relaxed">
                    123 Business Hub, SG Highway,
                    <br />
                    Ahmedabad, Gujarat 380054
                  </p>
                </div>
              </a>
              
              <a
                href="tel:+917912345678"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#b8926e]/10 border border-[#b8926e]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b8926e]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#b8926e]" />
                </div>
                <p className="text-white/80 group-hover:text-white transition-colors">
                  +91 79 1234 5678
                </p>
              </a>
              
              <a
                href="mailto:info@greinfra.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#b8926e]/10 border border-[#b8926e]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b8926e]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#b8926e]" />
                </div>
                <p className="text-white/80 group-hover:text-white transition-colors">
                  info@greinfra.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Gujarat Real Estate Infrastructure. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-sm">
              <a
                href="#"
                className="text-white/40 hover:text-[#b8926e] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-[#b8926e] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#b8926e] hover:bg-[#3b1107] border-2 border-[#b8926e] rounded-full flex items-center justify-center shadow-lg shadow-[#b8926e]/20 hover:shadow-xl transition-all group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:text-[#b8926e]" />
      </button>
    </footer>
  );
}

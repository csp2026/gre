import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-lg py-2" : "shadow-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="https://019c8921-3d8f-75d4-8924-c80da6145fce.mochausercontent.com/logo.png"
              alt="Gujarat Real Estate Infrastructure"
              className={`transition-all duration-300 ${
                isScrolled ? "h-12" : "h-14"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-sm font-medium text-[#3b1107] hover:text-[#b8926e] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-[#b8926e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <Button
              className="ml-4 bg-[#3b1107] text-white hover:bg-[#3b1107]/90 px-6"
              asChild
            >
              <a href="#contact">Get Consultation</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#3b1107] hover:bg-[#e7decf] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-80 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 p-4 bg-[#e7decf] rounded-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-[#3b1107] hover:bg-white rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="mt-2 bg-[#3b1107] text-white hover:bg-[#3b1107]/90"
              asChild
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Consultation
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

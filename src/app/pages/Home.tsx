import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router"; 
import { 
  Package, Candy, Box, FileText, Gift, Boxes, 
  ArrowRight, Mail, ChevronRight, Phone, Globe, Menu, MapPin, ChevronDown
} from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // FIX: Use the global language state so it matches the rest of the site
  const { language: lang, toggleLanguage } = useLanguage();
  const servicesRef = useRef<HTMLElement>(null);

  // FIX: Added "." to paths so GitHub Pages finds them relatively
  const partners = [
    { name: "Aviva", logo: "./images/aviva.png" },
    { name: "BGK", logo: "./images/bgk.png" },
    { name: "Hochtief", logo: "./images/hochtief.png" },
    { name: "PKO", logo: "./images/pko.png" },
    { name: "Ruukki", logo: "./images/ruukki.png" },
    { name: "Saturn", logo: "./images/saturn.png" },
    { name: "Tauron", logo: "./images/tauron.png" },
  ];

  const services = [
    {
      title: lang === 'pl' ? "Produkcja zestawów upominkowych" : "Gift Set Production",
      path: "/oferta/zestawy-upominkowe",
      icon: <Gift className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: lang === 'pl' ? "Słodycze reklamowe" : "Promotional Sweets",
      path: "/oferta/slodycze-reklamowe",
      icon: <Candy className="w-6 h-6" />,
      img: "./images/slodycze.webp", // Added "."
    },
    {
      title: lang === 'pl' ? "Produkcja opakowań" : "Packaging Production",
      path: "/oferta/opakowania",
      icon: <Package className="w-6 h-6" />,
      img: "./images/produkcja_opakowan.jpg", // Added "."
    },
    {
      title: lang === 'pl' ? "Produkcja materiałów poligraficznych i promocyjnych" : "Printing & Promotional Materials",
      path: "/oferta/materialy-poligraficzne",
      icon: <FileText className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: lang === 'pl' ? "Produkcja setów reklamowych" : "Promotional Sets",
      path: "/oferta/sety-reklamowe",
      icon: <Box className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: lang === 'pl' ? "Konfekcjonowanie i pakowanie produktów" : "Product Co-packing & Packaging",
      path: "/oferta/konfekcjonowanie",
      icon: <Boxes className="w-6 h-6" />,
      img: "./images/konfekcjonowanie.jpg", // Added "."
    },
  ];

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3));
    }, 4000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUFTG_f6Z0aQHEDQxx-ZRoTEoyuEzCpy9qNpEZS4uag&s&ec=121638480" 
              alt="Logo Icon" 
              className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm"
            />
            <span className="font-black text-xl tracking-tighter uppercase transition-colors">
              TOP<span className="text-[#C1272D]">MARKETING</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wider h-full">
            <Link to="/o-nas" className="hover:text-[#C1272D] transition-colors">
              {lang === 'pl' ? "O nas" : "About Us"}
            </Link>

            {/* Hoverable Dropdown */}
            <div className="relative group h-full flex items-center">
              <button 
                onClick={scrollToServices}
                className="flex items-center gap-1 hover:text-[#C1272D] transition-colors h-full py-2"
              >
                {lang === 'pl' ? "OFERTA" : "OFFER"}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-20 left-0 w-72 bg-white shadow-xl border-t-2 border-[#C1272D] rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {services.map((s, i) => (
                    <Link 
                      key={i} 
                      to={s.path}
                      className="block px-6 py-3 text-[11px] text-gray-700 hover:bg-red-50 hover:text-[#C1272D] transition-colors border-b border-gray-50 last:border-0"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/katalogi" className="hover:text-[#C1272D] transition-colors">
              {lang === 'pl' ? "Katalogi" : "Catalogs"}
            </Link>
            
            <button 
              onClick={() => toggleLanguage()}
              className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-all text-xs"
            >
              <Globe className="w-4 h-4 text-[#C1272D]" />
              {lang === 'pl' ? "EN" : "PL"}
            </button>

            <Link to="/kontakt" className="px-5 py-2.5 bg-[#C1272D] text-white rounded hover:bg-red-700 transition-all">
              {lang === 'pl' ? "Kontakt" : "Contact"}
            </Link>
          </div>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.marthastewart.com/thmb/bVZviHPXQHs2tJqbkNNJhq1VdFw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eco-friendly-gift-wrap-kraft-paper-getty-1123-2a789b29d8bd42d1bfd2fee54f861a40.jpg" 
            className="w-full h-full object-cover"
            alt="Marketing Production"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#C1272D] text-white text-xs font-bold tracking-widest uppercase mb-6">
              {lang === 'pl' ? "Od 2008 roku na rynku" : "On the market since 2008"}
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              {lang === 'pl' ? "Tworzymy Twoją" : "Creating Your" } <br/> 
              <span className="text-[#C1272D]">{lang === 'pl' ? "Markę Wyjątkową" : "Brand Unique"}</span>
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed border-l-2 border-[#C1272D] pl-6">
              {lang === 'pl' 
                ? "Producent opakowań, zestawów upominkowych i poligrafii. Dostarczamy rozwiązania, które budują relacje z Twoimi klientami."
                : "Manufacturer of packaging, gift sets, and printing. We provide solutions that build relationships with your customers."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="px-8 py-4 bg-[#C1272D] text-white font-bold rounded shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
                {lang === 'pl' ? "Rozpocznij projekt" : "Start a Project"} 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/katalogi" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded hover:bg-white/20 transition-all text-center">
                {lang === 'pl' ? "Zobacz Katalogi" : "View Catalogs"}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section ref={servicesRef} id="oferta-section" className="py-24 bg-[#FDFBF7] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-[#C1272D] uppercase tracking-widest mb-2">
                {lang === 'pl' ? "Nasza Specjalizacja" : "Our Specialization"}
              </h2>
              <p className="text-4xl font-bold text-gray-900 leading-tight">
                {lang === 'pl' ? "Kompleksowe usługi marketingowe i produkcyjne" : "Comprehensive marketing and production services"}
              </p>
            </div>
            <p className="text-gray-600 max-w-sm italic border-r-4 border-[#C1272D] pr-4 text-right">
              {lang === 'pl' 
                ? '"TOPMARKETING – producent opakowań i dostawca emocji zawartych w każdym prezencie."'
                : '"TOPMARKETING – packaging manufacturer and provider of emotions in every gift."'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 shadow-2xl shadow-gray-200/50">
            {services.map((s, i) => (
              <Link 
                key={i} 
                to={s.path} 
                className="group relative h-80 overflow-hidden border-r border-b border-gray-200 bg-white"
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all duration-700 ease-out scale-100 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#C1272D]/0 group-hover:bg-[#C1272D]/30 transition-colors duration-500 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>
                
                <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
                  <div className="p-3 w-fit bg-white/10 backdrop-blur-md rounded border border-white/20 group-hover:bg-[#C1272D] group-hover:border-[#C1272D] transition-all duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 pr-10 leading-snug drop-shadow-md">
                      {s.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      {lang === 'pl' ? "SZCZEGÓŁY" : "DETAILS"} <ChevronRight className="w-4 h-4 text-[#C1272D]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Carousel */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-gray-400 font-semibold uppercase tracking-widest text-sm mb-12">
            {lang === 'pl' ? "Zaufali nam liderzy rynku" : "Market leaders trust us"}
          </h3>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out items-center"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex justify-around items-center gap-8">
                  {partners.slice(slideIndex * 3, slideIndex * 3 + 3).map((partner, index) => (
                    <div key={index} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 py-4 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-12 w-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Area */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C1272D] skew-x-12 translate-x-20 z-0 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                {lang === 'pl' ? "Masz pytania? Skontaktuj się z nami" : "Any questions? Get in touch"}
              </h2>
              
              <div className="space-y-8 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Phone className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{lang === 'pl' ? "Telefon" : "Phone"}</p>
                    <p className="font-bold text-lg">+48 22 811 57 02</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Mail className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-bold text-lg">biuro@topmarketing.com.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{lang === 'pl' ? "Adres" : "Address"}</p>
                    <p className="font-bold text-lg leading-relaxed">
                      ul. Kołacińska 35<br/>
                      03-171 Warszawa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{lang === 'pl' ? "Szybki kontakt" : "Quick Contact"}</h3>
              <Link to="/kontakt" className="block w-full text-center py-4 bg-[#C1272D] text-white font-bold rounded hover:bg-red-700 transition-all mb-4 uppercase tracking-widest text-sm">
                {lang === 'pl' ? "Wyślij zapytanie" : "Send Inquiry"}
              </Link>
              <p className="text-center text-xs text-gray-400">
                {lang === 'pl' ? "Gwarantujemy odpowiedź w ciągu jednego dnia roboczego." : "We guarantee a response within one business day."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
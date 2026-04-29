import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Globe, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ofertaOpen, setOfertaOpen] = useState(false);
  
  // FIXED: Changed lang/setLang to language/toggleLanguage
  const { language, toggleLanguage, t } = useLanguage(); 
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setOfertaOpen(false);
  }, [location.pathname]);

  const ofertaLinks = [
    { path: "/oferta/slodycze-reklamowe", label: t("Słodycze reklamowe", "Promotional Sweets") },
    { path: "/oferta/zestawy-upominkowe", label: t("Zestawy upominkowe", "Gift Sets") },
    { path: "/oferta/opakowania", label: t("Produkcja opakowań", "Packaging") },
    { path: "/oferta/materialy-poligraficzne", label: t("Poligrafia i druk", "Printing") },
    { path: "/oferta/sety-reklamowe", label: t("Sety reklamowe", "Promo Sets") },
    { path: "/oferta/konfekcjonowanie", label: t("Konfekcjonowanie", "Co-packing") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-red-100">
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
            <Link to="/o-nas" className={`transition-colors hover:text-[#C1272D] ${location.pathname === '/o-nas' ? 'text-[#C1272D]' : 'text-gray-700'}`}>
              {t("O nas", "About Us")}
            </Link>

            <div className="relative group h-full flex items-center">
              <button className="flex items-center gap-1 hover:text-[#C1272D] transition-colors h-full py-2 uppercase">
                {t("Oferta", "Offer")}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-20 left-0 w-72 bg-white shadow-xl border-t-2 border-[#C1272D] rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {ofertaLinks.map((link, i) => (
                    <Link key={i} to={link.path} className="block px-6 py-3 text-[11px] text-gray-700 hover:bg-red-50 hover:text-[#C1272D] transition-colors border-b border-gray-50 last:border-0">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/katalogi" className={`transition-colors hover:text-[#C1272D] ${location.pathname === '/katalogi' ? 'text-[#C1272D]' : 'text-gray-700'}`}>
              {t("Katalogi", "Catalogs")}
            </Link>
            
            {/* FIXED: Using toggleLanguage and language instead of setLang/lang */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-all text-xs font-bold"
            >
              <Globe className="w-4 h-4 text-[#C1272D]" />
              {language === 'pl' ? "EN" : "PL"}
            </button>

            <Link to="/kontakt" className="px-5 py-2.5 bg-[#C1272D] text-white rounded hover:bg-red-700 transition-all shadow-md active:scale-95">
              {t("Kontakt", "Contact")}
            </Link>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4 shadow-xl">
            <Link to="/o-nas" className="block text-lg font-bold uppercase tracking-tight">{t("O nas", "About Us")}</Link>
            <div className="space-y-3">
              <button onClick={() => setOfertaOpen(!ofertaOpen)} className="flex items-center justify-between w-full text-lg font-bold uppercase tracking-tight">
                <span>{t("Oferta", "Offer")}</span>
                <ChevronDown className={`transition-transform ${ofertaOpen ? 'rotate-180 text-[#C1272D]' : ''}`} />
              </button>
              {ofertaOpen && (
                <div className="grid gap-3 pl-4 border-l-2 border-red-100">
                  {ofertaLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="text-gray-600 font-medium">{link.label}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/katalogi" className="block text-lg font-bold uppercase tracking-tight">{t("Katalogi", "Catalogs")}</Link>
            <Link to="/kontakt" className="block py-4 bg-[#C1272D] text-white text-center rounded font-bold uppercase tracking-widest">{t("Kontakt", "Contact")}</Link>
          </div>
        )}
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-16">
          <div>
             <div className="flex items-center gap-3 mb-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUFTG_f6Z0aQHEDQxx-ZRoTEoyuEzCpy9qNpEZS4uag&s&ec=121638480" alt="Logo" className="w-8 h-8 rounded-full" />
                <span className="font-black text-xl tracking-tighter uppercase">TOP<span className="text-[#C1272D]">MARKETING</span></span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed italic">
               {t("Producent opakowań i dostawca emocji zawartych w każdym prezencie. Od 2008 roku na rynku.", 
                  "Packaging manufacturer and provider of emotions in every gift. On the market since 2008.")}
             </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#C1272D]">{t("Oferta", "Offer")}</h4>
            <div className="grid grid-cols-1 gap-2">
              {ofertaLinks.slice(0, 4).map(l => (
                <Link key={l.path} to={l.path} className="text-slate-400 hover:text-white transition-colors text-sm">{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#C1272D]">{t("Kontakt", "Contact")}</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#C1272D]" /> +48 22 811 57 02</div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#C1272D]" /> biuro@topmarketing.com.pl</div>
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#C1272D]" /> <span>ul. Kołacińska 35, 03-171 Warszawa</span></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 text-center">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em]">© {new Date().getFullYear()} TOPMARKETING PRODUCTION. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
import React, { useState } from "react";
import { Link } from "react-router"; 
import { 
  Target, Award, Users, TrendingUp, ChevronDown, Menu, 
  ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function About() {
  const { t } = useLanguage(); // Only pull 't' to avoid the errors
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: t("Nasza misja", "Our Mission"),
      description: t(
        "Dążenie do doskonałości i wyjątkowości dostarczanych produktów: słodyczy, zestawów upominkowych oraz gadżetów reklamowych i poligraficznych a także terminowość i rzetelność proponowanych usług.",
        "Striving for excellence and uniqueness in delivered products: sweets, gift sets, and promotional gadgets, as well as timeliness and reliability."
      ),
    },
    {
      icon: Award,
      title: t("Najwyższa jakość", "Highest Quality"),
      description: t(
        "Oferujemy klientom wsparcie techniczne w postaci doradztwa produktowego, technik znakowania produktów, możliwości produkcyjnych i logistyki.",
        "We offer technical support in product consultancy, branding techniques, production capabilities, and logistics."
      ),
    },
    {
      icon: Users,
      title: t("Pracujemy dla Klienta", "We Work for the Client"),
      description: t(
        "Fundamentem naszej działalności jest dbałość o sukces klienta. Działamy opierając się na partnerskich relacjach.",
        "The foundation of our business is care for the client's success. We operate based on partnership relations."
      ),
    },
    {
      icon: TrendingUp,
      title: t("Ciągły rozwój", "Continuous Development"),
      description: t(
        "Nieustannie poszerzamy naszą ofertę asortymentową, wprowadzając nowe produkty i nowe rozwiązania kompleksowe.",
        "We are constantly expanding our product range, introducing new products and comprehensive solutions."
      ),
    },
  ];

  const brands = [
    { name: t("Produkcja zestawów upominkowych", "Gift Set Production"), path: "/oferta/zestawy-upominkowe" },
    { name: t("Słodycze reklamowe", "Promotional Sweets"), path: "/oferta/slodycze-reklamowe" },
    { name: t("Produkcja opakowań", "Packaging Production"), path: "/oferta/opakowania" },
    { name: t("Materiały poligraficzne i promocyjne", "Printing & Promotional Materials"), path: "/oferta/materialy-poligraficzne" },
    { name: t("Produkcja setów reklamowych", "Advertising Set Production"), path: "/oferta/sety-reklamowe" },
    { name: t("Konfekcjonowanie i pakowanie produktów", "Co-packing & Product Packaging"), path: "/oferta/konfekcjonowanie" },
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[#C1272D]/10 text-[#C1272D] text-xs font-bold tracking-widest uppercase mb-6">
            {t("Poznaj naszą historię", "Discover Our Story")}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
            {t("Budujemy relacje ", "Building relations ")} <br/>
            <span className="text-[#C1272D]">{t("od 2008 roku.", "since 2008.")}</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            {t(
              "TOPMARKETING działa na rynku polskim i europejskim, tworząc brandy dedykowane najbardziej wymagającym dziedzinom produkcji marketingowej i logistyki.",
              "TOPMARKETING operates on the Polish and European markets, creating brands dedicated to the most demanding areas of marketing production and logistics."
            )}
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#C1272D]/5 -skew-x-12 translate-x-20 z-0" />
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt={t("Nasz zespół", "Our Team")} 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#C1272D] rounded-2xl -z-0 opacity-10" />
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-[#C1272D] uppercase tracking-widest mb-4">{t("Nasz Cel i Filozofia", "Our Goal & Philosophy")}</h2>
              <p className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                {t("Rzetelność, która stała się fundamentem zaufania.", "Reliability that has become the foundation of trust.")}
              </p>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 italic border-l-4 border-[#C1272D] pl-6">
                  {t(
                    '"Być rzetelnym dostawcą oferowanych produktów i partnerem biznesowym godnym zaufania."',
                    '"To be a reliable supplier of offered products and a trustworthy business partner."'
                  )}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {t(
                    "Działania nasze sprawiają, że jesteśmy uznanym dostawcą na polskim rynku. Każdy projekt traktujemy jako szansę na zbudowanie długofalowej relacji.",
                    "Our actions make us a recognized supplier on the Polish market. We treat every project as an opportunity to build a long-term relationship."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">{t("Nasze specjalizacje", "Our Specializations")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, i) => (
              <Link to={brand.path} key={i} className="group p-8 border border-white/10 rounded-xl hover:bg-[#C1272D] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl pr-4">{brand.name}</h3>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </div>
                <span className="text-xs font-bold text-[#C1272D] group-hover:text-white uppercase tracking-widest">{t("Zobacz więcej", "See more")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 md:p-20 shadow-xl border border-gray-100 text-center">
            <h2 className="text-sm font-bold text-[#C1272D] uppercase tracking-widest mb-4">{t("Nasze Motto", "Our Motto")}</h2>
            <p className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              {t("Pracujemy dla ", "We Work for the ")} <span className="text-[#C1272D]">{t("Klienta", "Client")}</span>
            </p>
            <div className="h-1 w-24 bg-[#C1272D] mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-16">
              {values.map((v, i) => (
                <div key={i} className="group">
                  <div className="w-14 h-14 bg-[#FDFBF7] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C1272D] transition-colors">
                    <v.icon className="w-6 h-6 text-[#C1272D] group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">
                {t("Wsparcie techniczne na każdym etapie", "Technical support at every stage")}
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  t("Doradztwo produktowe", "Product consultancy"),
                  t("Nowoczesne techniki znakowania", "Modern branding techniques"),
                  t("Zaawansowane możliwości produkcyjne", "Advanced production capabilities"),
                  t("Pełna logistyka i dystrybucja", "Full logistics and distribution")
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#C1272D]" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C1272D] text-white font-bold rounded hover:bg-red-700 transition-all group">
                {t("Zapytaj o szczegóły", "Ask for details")} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=600" className="rounded-xl h-64 w-full object-cover shadow-lg" alt="Logistics" />
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" className="rounded-xl h-64 w-full object-cover mt-8 shadow-lg" alt="Production" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
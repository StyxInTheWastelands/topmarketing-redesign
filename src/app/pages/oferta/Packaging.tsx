import React from "react";
import { Link } from "react-router";
import { Package, ArrowRight, Paintbrush, ShieldCheck, Recycle, Box } from "lucide-react";
import { useLanguage } from "../../components/LanguageContext";

export function Packaging() {
  const { t } = useLanguage();

  const productImages = [
    "https://topmarketing.com.pl/wp-content/uploads/top-pudelko2.png",
    "https://topmarketing.com.pl/wp-content/uploads/g-pud1.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-pud2.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-pud3.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-pud4.jpg",
  ];

  const irlImages = [
    "https://topmarketing.com.pl/wp-content/uploads/26996039_1731656570198511_1548599330_n.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/26994546_1730645433632958_1247420752_n.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/26943440_1730647320299436_174377595_n.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/26914138_1731655890198579_279970284_n.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/26913890_1730647063632795_1720543608_n.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/26943468_1731687336862101_2068933800_n-1.jpg",
  ];

  const types = [
    t("Ekskluzywne opakowania ze sztywnych tektur", "Exclusive rigid cardboard packaging"),
    t("Opakowania kaszerowane na mikrofali", "Laminated corrugated packaging"),
    t("Opakowania kartonowe i ekologiczne", "Cardboard and eco-friendly packaging"),
    t("Opakowania wykrojnikowe o dowolnych wymiarach", "Die-cut packaging of any dimensions"),
    t("Różne systemy składania i zamknięć", "Various folding and closure systems"),
    t("Elementy dodatkowe (wstążki, wypełnienia)", "Additional elements (ribbons, fillers)")
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#C1272D] rounded-xl shadow-lg shadow-red-200">
              <Package className="w-8 h-8 text-white" />
            </div>
            <span className="text-[#C1272D] font-bold tracking-widest uppercase text-sm">
              {t("Brand: TOPMARKETING Opakowania", "Brand: TOPMARKETING Packaging")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-slate-900">
            {t("Wiemy, jak", "We know how to")} <span className="text-[#C1272D]">{t("to", "pack")}</span> <br/>{t("opakować.", "it.")}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            {t(
              "Zbyt często słyszeliśmy, że czegoś nie da się zrobić. Stworzyliśmy własną produkcję, by spełniać wymagania nawet najbardziej wymagających Klientów.",
              "We've heard too often that something couldn't be done. We created our own production facility to meet the requirements of even the most demanding Clients."
            )}
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Box className="w-full h-full text-slate-300 transform translate-x-20 -translate-y-20" />
        </div>
      </section>

      {/* Designer & Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#C1272D] uppercase tracking-[0.2em] mb-4">
                {t("Wsparcie Projektowe", "Design Support")}
              </h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">
                {t("Własny projektant na każdym etapie produkcji", "Your own designer at every production stage")}
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t(
                  "Nasz projektant czuwa nad wyborem właściwego rozwiązania z punktu widzenia technologii, zastosowania i grafiki. Adresujemy ofertę do Klientów, którzy cenią sobie najwyższą jakość i niepowtarzalny styl.",
                  "Our designer oversees the selection of the right solution from a technical, functional, and graphic standpoint. We address our offer to Clients who value the highest quality and unique style."
                )}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Paintbrush, title: t("Unikatowy Design", "Unique Design"), desc: t("Tworzymy autorskie projekty wykrojników.", "We create original die-cut designs.") },
                  { icon: ShieldCheck, title: t("Trwałość", "Durability"), desc: t("Stosujemy sztywne tektury introligatorskie.", "We use rigid bookbinding boards.") },
                  { icon: Recycle, title: t("Eko Rozwiązania", "Eco Solutions"), desc: t("Pełna oferta opakowań ekologicznych.", "Full range of eco-friendly packaging.") },
                  { icon: Box, title: t("Personalizacja", "Personalization"), desc: t("Dowolne wymiary i techniki zdobienia.", "Any dimensions and decoration techniques.") },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <item.icon className="w-6 h-6 text-[#C1272D] mb-3 transition-transform group-hover:scale-110" />
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src={productImages[0]} alt={t("Opakowanie premium", "Premium packaging")} className="rounded-2xl shadow-xl hover:-translate-y-1 transition-transform" />
                <img src={productImages[1]} alt={t("Opakowanie kaszerowane", "Laminated packaging")} className="rounded-2xl shadow-xl mt-12 hover:-translate-y-1 transition-transform" />
              </div>
              <div className="absolute -z-10 inset-0 bg-[#C1272D]/5 rounded-[3rem] blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Types Checklist - Dark Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-12">{t("Co wykonujemy?", "What we produce?")}</h2>
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
              {types.map((type, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-[#C1272D] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-lg text-slate-300 group-hover:text-white transition-colors">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Realizations Grid */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">{t("Nasze Realizacje", "Our Realizations")}</h2>
            <p className="text-slate-600">{t("Zobacz, jak nasze opakowania prezentują się w rzeczywistości.", "See how our packaging looks in reality.")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {irlImages.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl shadow-md group relative">
                <img 
                  src={img} 
                  alt={t(`Realizacja ${i}`, `Project ${i}`)} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="text-white text-sm font-medium">{t("Realizacja TOPMARKETING", "TOPMARKETING Project")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {productImages.slice(1).map((img, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <img src={img} alt={t("Model opakowania", "Packaging model")} className="w-full h-48 object-contain mb-6" />
                <div className="h-1 w-12 bg-[#C1272D] mb-4" />
                <span className="text-xs font-bold text-slate-400 uppercase">{t("Model Katalogowy", "Catalog Model")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#C1272D] rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-white">{t("Twój produkt zasługuje na lepszą oprawę", "Your product deserves a better setting")}</h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                {t(
                  "Skontaktuj się z nami, aby otrzymać bezpłatną konsultację technologiczną i wycenę Twojego projektu.",
                  "Contact us to receive a free technological consultation and a quote for your project."
                )}
              </p>
              <Link 
                to="/kontakt" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all group"
              >
                {t("Rozpocznij projekt", "Start project")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 -translate-y-20 blur-3xl" />
          </div>
        </div>
      </section>

    </div>
  );
}
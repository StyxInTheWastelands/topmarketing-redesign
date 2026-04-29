import React from "react";
import { Link } from "react-router";
import { Box, CheckCircle2, ArrowRight, Briefcase, Coffee, Zap, Users } from "lucide-react";
import { useLanguage } from "../../components/LanguageContext";

export function PromotionalSets() {
  const { t } = useLanguage();

  const brands = [
    "Werther's Original", "Knorr", "Whiskas", "Pedigree", "Tchibo", "Somat"
  ];

  const categories = [
    {
      title: t("Produkty Spożywcze", "Food Products"),
      desc: t("Wyselekcjonowane przekąski, słodycze i napoje dopasowane do charakteru akcji.", "Selected snacks, sweets, and drinks tailored to the nature of the campaign."),
      icon: Coffee
    },
    {
      title: t("Upominki i Gadżety", "Gifts & Gadgets"),
      desc: t("Przedmioty użytkowe, które zostają z klientem na dłużej.", "Practical items that stay with the customer for longer."),
      icon: Zap
    },
    {
      title: t("Custom Packaging", "Custom Packaging"),
      desc: t("Indywidualne pudełka projektowane od zera pod wymiar zestawu.", "Individual boxes designed from scratch to the dimensions of the set."),
      icon: Box
    },
    {
      title: t("Co-packing", "Co-packing"),
      desc: t("Możliwość dołączenia produktów dostarczonych bezpośrednio przez Klienta.", "Option to include products provided directly by the Client."),
      icon: Briefcase
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#C1272D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
            <span className="text-white/80 font-bold tracking-widest uppercase text-sm">Custom Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            {t("Sety", "Advertising")} <br/>
            <span className="text-slate-900">{t("Reklamowe", "Sets")}</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            {t(
              "Tworzymy spójne koncepcje oparte o indywidualne potrzeby Twojej marki. Od pomysłu, przez dobór produktów, aż po unikalne opakowanie.",
              "We create cohesive concepts based on the individual needs of your brand. From the idea, through product selection, to unique packaging."
            )}
          </p>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-900/10 -skew-x-12 translate-x-1/4" />
      </section>

      {/* Brands Trust Section */}
      <section className="py-12 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
            {t("Zaufali nam m.in.", "They trusted us among others")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {brands.map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-serif font-bold text-slate-800">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t("Tworzone pod konkretną akcję marketingową", "Created for a specific marketing campaign")}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t(
                  "Nie wierzymy w gotowe rozwiązania z katalogu. Każdy Set Reklamowy to nowa historia, którą piszemy wspólnie z Klientem. Łączymy światy produktów spożywczych, eleganckich upominków i funkcjonalnych gadżetów.",
                  "We don't believe in ready-made solutions from a catalog. Every Advertising Set is a new story we write together with the Client. We combine the worlds of food products, elegant gifts, and functional gadgets."
                )}
              </p>
              <div className="space-y-4">
                {[
                  t("Indywidualne podejście do każdej koncepcji", "Individual approach to every concept"),
                  t("Pełna spójność wizualna całego zestawu", "Full visual consistency of the entire set"),
                  t("Profesjonalne doradztwo w doborze asortymentu", "Professional advice in assortment selection"),
                  t("Logistyka i bezpieczna wysyłka", "Logistics and secure shipping")
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C1272D]" />
                    <span className="font-semibold text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Grid */}
            <div className="grid grid-cols-2 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#C1272D]/20 transition-all group">
                  <cat.icon className="w-10 h-10 text-[#C1272D] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-lg mb-2">{cat.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Collaboration CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <Users className="w-16 h-16 text-[#C1272D] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("Zapraszamy do kreatywnej współpracy!", "We invite you to creative collaboration!")}
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {t(
              "Masz wizję akcji marketingowej, ale nie wiesz jak ją 'ubrać'? Nasz zespół pomoże Ci stworzyć set, który zapadnie w pamięć.",
              "Do you have a vision for a marketing campaign but don't know how to 'dress' it? Our team will help you create a set that will be remembered."
            )}
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C1272D] text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all group"
          >
            {t("Stwórzmy coś razem", "Let's create something together")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-6 italic text-slate-400">
              {t(
                "\"Całość opakowana jest w indywidualne pudełko dopasowane wizualnie do całej koncepcji.\"",
                "\"The whole thing is wrapped in an individual box visually matched to the entire concept.\""
              )}
            </h3>
            <div className="w-20 h-1 bg-[#C1272D] mx-auto" />
        </div>
      </section>

    </div>
  );
}
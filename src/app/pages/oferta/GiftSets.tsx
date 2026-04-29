import React from "react";
import { Link } from "react-router";
import { Gift, CheckCircle2, ArrowRight, ExternalLink, Package, ShoppingBag, Sparkles } from "lucide-react";
import { useLanguage } from "../../components/LanguageContext";

export function GiftSets() {
  const { t } = useLanguage();

  const images = [
    "https://topmarketing.com.pl/wp-content/uploads/top-opakowanie1.png",
    "https://topmarketing.com.pl/wp-content/uploads/g-opak5.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-opak4.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-opak3.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-opak2.jpg",
  ];

  const points = [
    t("Bogactwo i różnorodność produktów", "Wealth and variety of products"),
    t("Wyszukiwanie nowych, unikalnych dostawców", "Sourcing new, unique suppliers"),
    t("Najnowsze trendy w zakresie opakowań i wzornictwa", "Latest trends in packaging and design"),
    t("Częsta zmiana asortymentu gwarantująca niepowtarzalność", "Frequent assortment changes guaranteeing uniqueness"),
    t("Kreowanie autorskiego wzornictwa opakowań", "Creating original packaging designs"),
    t("Profesjonalne doradztwo branżowe", "Professional industry consulting"),
    t("Dedykowany Dział Kreujący ofertę", "Dedicated Offer Creation Department")
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#C1272D] rounded-xl">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <span className="text-[#C1272D] font-bold tracking-widest uppercase text-sm">
              {t("Nasza Oferta", "Our Offer")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            {t("Produkcja zestawów", "Production of")} <br/>
            <span className="text-[#C1272D]">{t("upominkowych", "gift sets")}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            {t(
              "Tworzenie nowych produktów i projektowanie sprawia nam ogromną satysfakcję. Dostarczamy kosze delikatesowe i zestawy, które budują relacje.",
              "Creating new products and designing gives us great satisfaction. We deliver gourmet baskets and sets that build relationships."
            )}
          </p>
        </div>
        {/* Background Accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#C1272D]/10 skew-x-12 translate-x-32 z-0" />
      </section>

      {/* Intro & Strategy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t("Dążymy do doskonałości i wyjątkowości", "Striving for excellence and uniqueness")}
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t(
                  "W naszym portfolio znajdą Państwo zestawy upominkowe i kosze delikatesowe zarówno całoroczne, jak i okazjonalne – dedykowane na Boże Narodzenie i Wielkanoc. Nasze cele realizujemy poprzez bezkompromisowe podejście do jakości:",
                  "In our portfolio, you will find gift sets and gourmet baskets for both year-round and occasional use – dedicated to Christmas and Easter. We achieve our goals through an uncompromising approach to quality:"
                )}
              </p>
              <div className="grid sm:grid-cols-1 gap-4">
                {points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#FDFBF7] rounded-lg border-l-4 border-[#C1272D]">
                    <CheckCircle2 className="w-5 h-5 text-[#C1272D] shrink-0" />
                    <span className="font-medium text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={images[0]} alt="Gift Set" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform" />
                <img src={images[1]} alt="Gift Set" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={images[2]} alt="Gift Set" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform" />
                <img src={images[3]} alt="Gift Set" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content / Premium Products */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-6">
                  {t("Co znajdziesz w naszych zestawach?", "What will you find in our sets?")}
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {t(
                    "Zestawy upominkowe i kosze delikatesowe to elegancka propozycja dla tych, którzy chcą obdarować Bliskich, Kontrahentów lub Pracowników upominkiem wyszukanym i... pyszynym.",
                    "Gift sets and gourmet baskets are an elegant choice for those who want to give loved ones, partners, or employees a gift that is sophisticated and... delicious."
                  )}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: ShoppingBag, text: t("Pięknie zapakowane słodkości", "Beautifully packaged sweets") },
                    { icon: Sparkles, text: t("Wykwintne alkohole i aromatyczne herbaty", "Exquisite spirits and aromatic teas") },
                    { icon: Package, text: t("Zdobione pierniczki i produkty Premium", "Decorated gingerbread and Premium products") },
                    { icon: Gift, text: t("Wsparcie techniczne i doradztwo", "Technical support and consulting") }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-700 font-semibold">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#C1272D]" />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#C1272D] text-white p-10 rounded-2xl text-center transform lg:rotate-3">
                <h4 className="text-xl font-bold mb-4">{t("Potrzebujesz wyceny?", "Need a quote?")}</h4>
                <p className="text-white/80 mb-6 text-sm">
                  {t(
                    "Nieustannie poszerzamy ofertę, wprowadzając nowe opakowania i rozwiązania kompleksowe.",
                    "We are constantly expanding our offer, introducing new packaging and comprehensive solutions."
                  )}
                </p>
                <Link to="/kontakt" className="inline-block w-full py-3 bg-white text-[#C1272D] font-bold rounded-lg hover:bg-slate-100 transition-colors">
                  {t("Zapytaj o ofertę", "Request a quote")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Brand CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {t("Dedykowane rozwiązania świąteczne", "Dedicated holiday solutions")}
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              {t(
                "Zapraszamy do odwiedzenia naszej dedykowanej strony poświęconej wyłącznie rozwiązaniom świątecznym i zestawom okolicznościowym.",
                "We invite you to visit our dedicated website devoted exclusively to Christmas solutions and special occasion sets."
              )}
            </p>
            <a 
              href="http://www.swietaswieta.com.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-[#C1272D] transition-all group shadow-xl"
            >
              {t("PRZEJDŹ DO SWIETASWIETA.COM.PL", "VISIT SWIETASWIETA.COM.PL")} 
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Product Image */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl bg-[#FDFBF7] p-4">
           <img src={images[4]} alt={t("Premium Gift Set", "Premium Gift Set")} className="w-full h-auto rounded-2xl mx-auto" />
        </div>
      </section>

    </div>
  );
}
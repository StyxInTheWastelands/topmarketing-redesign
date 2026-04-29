import React from "react";
import { Link } from "react-router";
import { Candy, CheckCircle2, ArrowRight, ExternalLink, Smile, Utensils, Star, Heart } from "lucide-react";
import { useLanguage } from "../../components/LanguageContext";

export function PromotionalSweets() {
  const { t } = useLanguage();

  const images = [
    "https://topmarketing.com.pl/wp-content/uploads/top-slodycze.png",
    "https://topmarketing.com.pl/wp-content/uploads/g-slod1.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-slod3.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-slod2.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-slod4.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-slod5.jpg",
  ];

  const categories = [
    t("Cukierki i Krówki", "Candies & Fudge"),
    t("Lizaki reklamowe", "Promotional Lollipops"),
    t("Czekoladki i praliny", "Chocolates & Pralines"),
    t("Ciasteczka", "Cookies"),
    t("Śliwki w czekoladzie", "Chocolate-covered Plums"),
    t("Eleganckie bombonierki", "Elegant Chocolate Boxes")
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#C1272D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
              <Candy className="w-8 h-8 text-white" />
            </div>
            <span className="text-white/80 font-bold tracking-widest uppercase text-sm">
              {t("Słodki Marketing", "Sweet Marketing")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            {t("Słodycze", "Promotional")} <br/>
            <span className="text-slate-900">{t("reklamowe", "Sweets")}</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            {t(
              "Najprostszy i najprzyjemniejszy sposób, by wywołać uśmiech na twarzy Twojego klienta. Buduj pozytywne skojarzenia z marką dzięki pysznym upominkom.",
              "The simplest and most pleasant way to put a smile on your customer's face. Build positive brand associations with delicious gifts."
            )}
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Main Content & Value Prop */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img 
                src={images[0]} 
                alt={t("Słodycze reklamowe zestaw", "Promotional sweets set")} 
                className="w-full rounded-3xl shadow-2xl relative z-10 group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute -inset-4 bg-red-50 rounded-[40px] -z-0" />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t("Dlaczego warto wybrać słodką reklamę?", "Why choose sweet advertising?")}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t(
                  "Słodycze to prezenty, które niemal zawsze spotykają się z pozytywnym odbiorem. Są tanie, nie stanowią dużego kosztu podczas akcji marketingowej, a jednocześnie wywołują trwałe, pozytywne emocje.",
                  "Sweets are gifts that almost always meet with a positive reception. They are affordable, do not represent a high cost during marketing campaigns, and simultaneously evoke lasting, positive emotions."
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Smile, text: t("Pozytywne skojarzenia", "Positive associations") },
                  { icon: Utensils, text: t("Świetny, sprawdzony smak", "Great, proven taste") },
                  { icon: Star, text: t("Indywidualne znakowanie", "Individual branding") },
                  { icon: Heart, text: t("Atrakcyjne opakowania", "Attractive packaging") }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <item.icon className="w-5 h-5 text-[#C1272D]" />
                    <span className="font-semibold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("Nasza oferta asortymentowa", "Our product range")}</h2>
            <p className="text-slate-600">{t("Szeroki wybór produktów idealnych na targi, eventy i spotkania biznesowe.", "A wide selection of products perfect for trade fairs, events, and business meetings.")}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {images.slice(1).map((img, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="h-40 flex items-center justify-center mb-4">
                  <img src={img} alt={`Product ${i}`} className="max-h-full object-contain" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                  {categories[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">{t("Znasz już nasz dedykowany serwis?", "Do you know our dedicated service?")}</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                {t(
                  "Aby sprostać rosnącym wymaganiom rynku, stworzyliśmy wyspecjalizowaną platformę dedykowaną wyłącznie słodyczom reklamowym. Znajdziesz tam setki inspiracji i gotowych rozwiązań.",
                  "To meet growing market demands, we created a specialized platform dedicated exclusively to promotional sweets. You will find hundreds of inspirations and ready-made solutions there."
                )}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="http://www.topslodycze.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-[#C1272D] hover:text-white transition-all group"
                >
                  {t("ODWIEDŹ TOPSLODYCZE.PL", "VISIT TOPSLODYCZE.PL")}
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                >
                  {t("Zapytaj o wycenę", "Get a quote")} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#C1272D]">{t("Spersonalizowane wsparcie", "Personalized support")}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "Oferujemy klientom wsparcie techniczne w postaci doradztwa produktowego, technik znakowania produktów oraz możliwości produkcyjnych.",
                  "We offer technical support in product consultancy, branding techniques, and production capabilities."
                )}
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                t("Indywidualne znakowanie logo", "Individual logo branding"),
                t("Nowoczesne techniki nadruku", "Modern printing techniques"),
                t("Wysokie moce produkcyjne", "High production capacity"),
                t("Logistyka i dostawa pod drzwi", "Logistics and door-to-door delivery"),
                t("Nowe rozwiązania kompleksowe", "New comprehensive solutions"),
                t("Gwarancja świeżości i smaku", "Guaranteed freshness and taste")
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C1272D] shrink-0" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
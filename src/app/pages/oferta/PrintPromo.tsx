import React from "react";
import { Link } from "react-router";
import { FileText, ArrowRight, Printer, Layout, Lightbulb } from "lucide-react";
import { useLanguage } from "../../components/LanguageContext";

export function PrintPromo() {
  const { t } = useLanguage();

  const images = [
    "https://topmarketing.com.pl/wp-content/uploads/g-poli5.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-poli3.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-poli4.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-poli2.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-poli6.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/g-poli1.jpg",
  ];

  const mainProducts = [
    { 
      title: t("Gry i Zabawy", "Games & Fun"), 
      items: t("Karty do gry, puzzle, gry planszowe, kolorowanki", "Playing cards, puzzles, board games, coloring books") 
    },
    { 
      title: t("Eventy", "Events"), 
      items: t("Flagi papierowe, wiatraczki, daszki, czapki, wachlarze", "Paper flags, pinwheels, visors, hats, fans") 
    },
    { 
      title: t("Promocja", "Promotion"), 
      items: t("Display'e, ulotki, broszury, foldery reklamowe", "Displays, flyers, brochures, advertising folders") 
    },
    { 
      title: t("Custom", "Custom"), 
      items: t("Indywidualne projekty wykrojników i konstrukcji", "Individual die-cut designs and constructions") 
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#C1272D] rounded-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <span className="text-[#C1272D] font-bold tracking-widest uppercase text-sm">
              {t("Poligrafia i Design", "Printing & Design")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            {t("Nie znamy", "We know no")} <br/>
            <span className="text-[#C1272D]">{t("ograniczeń.", "limits.")}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {t(
              "Oferujemy kompleksowy zakres usług poligraficznych, druku i projektowania graficznego, od prostych ulotek po skomplikowane gry i display'e.",
              "We offer a comprehensive range of printing, publishing, and graphic design services, from simple flyers to complex games and displays."
            )}
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="grid grid-cols-2 gap-2 transform rotate-12 translate-x-20">
            {images.slice(0, 4).map((img, i) => (
              <img key={i} src={img} alt="Detail" className="w-48 h-48 object-cover rounded-xl shadow-2xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={images[0]} alt={t("Karty do gry", "Playing cards")} className="w-full rounded-2xl shadow-lg" />
                <img src={images[1]} alt={t("Puzzle", "Puzzles")} className="w-full rounded-2xl shadow-lg mt-8" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-[#C1272D] uppercase tracking-[0.2em] mb-4">
                {t("Fachowe Doradztwo", "Professional Advice")}
              </h2>
              <h3 className="text-4xl font-bold mb-8">
                {t("Wybór papieru to sztuka", "Paper selection is an art")}
              </h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t(
                  "Rodzaj papieru dobierany jest przez naszych techników w zależności od rodzaju produkowanego gadżetu. Zawsze służymy fachowym doradztwem, aby Twój produkt był nie tylko ładny, ale i trwały.",
                  "The type of paper is selected by our technicians depending on the type of gadget produced. We always provide professional advice to ensure your product is not only beautiful but also durable."
                )}
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: Printer, 
                    title: t("Nowoczesny Park Maszynowy", "Modern Machinery"), 
                    desc: t("Druk offsetowy i cyfrowy najwyższej próby.", "Top-tier offset and digital printing.") 
                  },
                  { 
                    icon: Layout, 
                    title: t("Projektowanie Graficzne", "Graphic Design"), 
                    desc: t("Kompleksowe wsparcie od koncepcji po plik do druku.", "Comprehensive support from concept to print-ready file.") 
                  },
                  { 
                    icon: Lightbulb, 
                    title: t("Innowacyjne Materiały", "Innovative Materials"), 
                    desc: t("Wiatraczki, daszki, czapki i nietypowe gadżety papierowe.", "Pinwheels, visors, hats, and unusual paper gadgets.") 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#C1272D]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("Co drukujemy?", "What do we print?")}</h2>
            <p className="text-slate-600">
              {t("Produkcja materiałów poligraficznych reklamowych nie ma przed nami tajemnic.", "Promotional printing production holds no secrets for us.")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainProducts.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#C1272D] transition-colors group">
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#C1272D] transition-colors">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{p.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <img 
                  src={img} 
                  alt={t(`Realizacja poligraficzna ${i}`, `Printing project ${i}`)} 
                  className="w-full rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#C1272D] rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden">
            <div className="relative z-10 md:max-w-xl">
              <h2 className="text-4xl font-bold mb-6 italic">
                {t("Zawsze służymy fachowym doradztwem.", "We always serve with professional advice.")}
              </h2>
              <p className="text-white/80 text-lg mb-0">
                {t(
                  "Masz pomysł na nietypowy gadżet papierowy? Nasi technicy dobiorą materiały i technikę druku, która najlepiej odda Twój projekt.",
                  "Have an idea for an unusual paper gadget? Our technicians will select the materials and printing technique that best reflect your project."
                )}
              </p>
            </div>
            <div className="relative z-10 mt-10 md:mt-0">
              <Link 
                to="/kontakt" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#C1272D] font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all group"
              >
                {t("Rozpocznij druk", "Start printing")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

    </div>
  );
}
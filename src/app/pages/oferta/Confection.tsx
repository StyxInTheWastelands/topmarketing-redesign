import React from "react";
import { Link } from "react-router";
import { Boxes, CheckCircle2, ArrowRight, Clock, ShieldCheck, Truck, Phone, Mail } from "lucide-react";
import { useLanguage } from "../../components/LanguageContext";

export function Confection() {
  const { t } = useLanguage();

  const images = [
    "https://topmarketing.com.pl/wp-content/uploads/1.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/2.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/3.jpg",
    "https://topmarketing.com.pl/wp-content/uploads/4.jpg",
  ];

  const fullServiceList = [
    t("Konfekcjonowanie i porcjowanie", "Packaging and portioning"),
    t("Pakowanie produktów i poligrafii", "Product and print packing"),
    t("Insertowanie prezentów i ulotek", "Inserting gifts and flyers"),
    t("Wrzutkowanie i sortowanie", "Collating and sorting"),
    t("Kompletacja i paletowanie", "Picking and palletizing"),
    t("Foliowanie towaru", "Shrink wrapping"),
    t("Co-packing i etykietowanie", "Co-packing and labeling"),
    t("Montaż materiałów reklamowych", "Assembly of promotional materials")
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-red-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#C1272D] rounded-xl shadow-lg shadow-red-900/20">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <span className="text-[#C1272D] font-bold tracking-widest uppercase text-sm">
              {t("Dostępność 24/7", "Available 24/7")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            {t("Konfekcjonowanie", "Co-packing")} <br/>
            <span className="text-[#C1272D]">{t("& pakowanie", "& packaging")}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {t(
              "Zintegrowane działania dopasowane do indywidualnych potrzeb. Własna przestrzeń składowa i zespół, który nie boi się wyzwań.",
              "Integrated operations tailored to individual needs. Our own storage space and a team that is not afraid of challenges."
            )}
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#C1272D]/5 -skew-x-12 translate-x-20" />
      </section>

      {/* Expertise & Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 !== 0 ? 'mt-8' : ''}`}>
                  <img src={img} alt={t("Praca zespołu", "Team at work")} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8 italic">
                {t("Doświadczenie poparte referencjami", "Experience backed by references")}
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t(
                  "Posiadamy sprawdzony zespół doświadczonych specjalistów, którzy poradzą sobie z każdym zleceniem dzięki zdobytej wiedzy, wypracowanym metodom i wysokim standardom. Zapewniamy pełną kontrolę ważenia, liczenia oraz kompletowania towaru.",
                  "We have a proven team of experienced specialists who can handle any order thanks to acquired knowledge, developed methods, and high standards. We provide full control over weighing, counting, and completing goods."
                )}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {fullServiceList.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#C1272D] shrink-0" />
                    <span className="text-slate-700 font-medium group-hover:text-black transition-colors">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Standards */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <ShieldCheck className="w-12 h-12 text-[#C1272D] mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">{t("Pełna Kontrola", "Full Control")}</h4>
              <p className="text-slate-500 text-sm italic">
                {t("Stały nadzór nad procesem ważenia i liczenia towaru.", "Constant supervision over the process of weighing and counting goods.")}
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50">
              <Boxes className="w-12 h-12 text-[#C1272D] mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">{t("Własny Magazyn", "Own Warehouse")}</h4>
              <p className="text-slate-500 text-sm italic">
                {t("Odpowiednia przestrzeń usługowa do składowania i kompletowania.", "Appropriate service space for storage and picking.")}
              </p>
            </div>
            <div className="p-8">
              <Truck className="w-12 h-12 text-[#C1272D] mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-4">{t("Logistyka", "Logistics")}</h4>
              <p className="text-slate-500 text-sm italic">
                {t("Zintegrowane działania od przyjęcia towaru po wysyłkę.", "Integrated actions from goods receipt to shipment.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("Masz pilne zlecenie?", "Do you have an urgent order?")}</h2>
                <p className="text-slate-400 text-lg mb-8">
                  {t(
                    "Nasz zespół jest do Twojej dyspozycji 24 godziny na dobę, 7 dni w tygodniu. Skontaktuj się bezpośrednio z naszym działem operacyjnym.",
                    "Our team is at your disposal 24 hours a day, 7 days a week. Contact our operations department directly."
                  )}
                </p>
                <div className="space-y-4">
                  <a href="tel:+48506150443" className="flex items-center gap-4 text-xl font-bold hover:text-[#C1272D] transition-colors">
                    <Phone className="w-6 h-6" /> 506 150 443
                  </a>
                  <a href="mailto:slawomir.sowa@topmarketing.com.pl" className="flex items-center gap-4 text-xl font-bold hover:text-[#C1272D] transition-colors">
                    <Mail className="w-6 h-6" /> slawomir.sowa@topmarketing.com.pl
                  </a>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#C1272D] text-white font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all group"
                >
                  {t("Zapytaj o współpracę", "Inquire about cooperation")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C1272D] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Team Signature */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="w-px h-24 bg-slate-200 mx-auto mb-12" />
            <p className="text-slate-400 font-serif italic text-2xl">{t("Zapraszamy do współpracy", "We look forward to working with you")}</p>
            <p className="text-slate-900 font-bold mt-2 uppercase tracking-[0.3em]">{t("Zespół Top Marketing", "The Top Marketing Team")}</p>
        </div>
      </section>

    </div>
  );
}
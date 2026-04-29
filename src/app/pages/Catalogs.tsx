import { Download, ExternalLink } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function Catalogs() {
  const { t } = useLanguage();

  const catalogs = [
    {
      title: t("Katalog Bestseller Biuro", "Office Bestsellers Catalog"),
      description: t(
        "Wyselekcjonowane produkty biurowe i gadżety, które cieszą się największą popularnością.",
        "Curated office products and gadgets that are most popular among our clients."
      ),
      image: "https://topmarketing.com.pl/wp-content/uploads/katalog-bestseller-biuro.jpg",
      pdfUrl: "https://topmarketing.com.pl/dok/katalogi/KATALOG_BEST_SELLER_TM_biuro.pdf",
    },
    {
      title: t("Katalog Top Events", "Top Events Catalog"),
      description: t(
        "Inspiracje i produkty idealne na eventy, konferencje oraz spotkania firmowe.",
        "Inspirations and products perfect for events, conferences, and corporate meetings."
      ),
      image: "https://topmarketing.com.pl/wp-content/uploads/katalog-top-events.jpg",
      pdfUrl: "https://topmarketing.com.pl/dok/katalogi/Katalog-Top-Events.pdf",
    },
    {
      title: t("Siła Koloru", "The Power of Color"),
      description: t(
        "Katalog skupiający się na barwnych i wyrazistych materiałach promocyjnych.",
        "A catalog focusing on colorful and expressive promotional materials."
      ),
      image: "https://topmarketing.com.pl/wp-content/uploads/katalog-sila-koloru.jpg",
      pdfUrl: "https://topmarketing.com.pl/dok/katalogi/3-Katalog-Si%C5%82a-Koloru.pdf",
    },
    {
      title: t("Pudełkowo Dopasowani", "Perfectly Boxed"),
      description: t(
        "Nasza specjalność: luksusowe opakowania i zestawy dopasowane do Twojej marki.",
        "Our specialty: luxury packaging and sets tailored perfectly to your brand."
      ),
      image: "https://topmarketing.com.pl/wp-content/uploads/katalog-pudelkowo-dopasowani.jpg",
      pdfUrl: "https://topmarketing.com.pl/dok/katalogi/PUDE%C5%81KOWO-DOPASOWANI-TOP-MARKETING.pdf",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#c1272d_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#c1272d] text-white text-xs font-bold tracking-widest uppercase mb-6">
            {t("Zasoby do pobrania", "Downloadable Resources")}
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            {t("Nasze ", "Our ")}
            <span className="text-[#c1272d]">{t("Katalogi", "Catalogs")}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            {t(
              "Przeglądaj nasze najnowsze kolekcje i zainspiruj się rozwiązaniami, które wyróżnią Twoją markę na tle konkurencji.",
              "Browse our latest collections and get inspired by solutions that will make your brand stand out from the competition."
            )}
          </p>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {catalogs.map((catalog, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col sm:flex-row"
              >
                {/* Visual Part */}
                <div className="sm:w-1/2 relative overflow-hidden">
                  <img
                    src={catalog.image}
                    alt={catalog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Content Part */}
                <div className="sm:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-3 group-hover:text-[#c1272d] transition-colors">
                      {catalog.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {catalog.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={catalog.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#c1272d] text-white py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {t("Pobierz PDF", "Download PDF")}
                    </a>
                    <a
                      href={catalog.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-slate-900 border border-slate-200 py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("Podgląd online", "Online Preview")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-24 relative rounded-3xl overflow-hidden bg-[#c1272d] p-12 text-center text-white shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                {t("Nie znalazłeś tego, czego szukasz?", "Didn't find what you were looking for?")}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-medium">
                {t(
                  "Przygotujemy dla Ciebie dedykowaną prezentację produktów idealnie dopasowaną do Twojego briefu i budżetu.",
                  "We will prepare a dedicated product presentation perfectly matched to your brief and budget."
                )}
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-white text-[#c1272d] px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl hover:shadow-none"
              >
                {t("Poproś o indywidualną ofertę", "Request a custom offer")}
              </a>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
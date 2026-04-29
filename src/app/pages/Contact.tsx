import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../components/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      t(
        "Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.",
        "Thank you for your message! We will get back to you as soon as possible."
      )
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#c1272d_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#c1272d] text-white text-xs font-bold tracking-widest uppercase mb-6">
            {t("Zostańmy w kontakcie", "Let's stay in touch")}
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            {t("Skontaktuj się ", "Contact ")}
            <span className="text-[#c1272d]">{t("z nami", "us")}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            {t(
              "Masz pytania dotyczące naszej oferty? Chcesz otrzymać indywidualną wycenę? Nasz zespół jest do Twojej dyspozycji.",
              "Do you have questions about our offer? Want to receive a custom quote? Our team is at your disposal."
            )}
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100">
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                {t("Wyślij zapytanie", "Send an inquiry")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1"
                    >
                      {t("Imię i nazwisko *", "Full Name *")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c1272d] focus:border-transparent outline-none transition-all font-medium"
                      placeholder={t("Jan Kowalski", "John Doe")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1"
                    >
                      {t("Adres Email *", "Email Address *")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c1272d] focus:border-transparent outline-none transition-all font-medium"
                      placeholder="biuro@firma.pl"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1"
                  >
                    {t("Numer telefonu", "Phone Number")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c1272d] focus:border-transparent outline-none transition-all font-medium"
                    placeholder="+48 000 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1"
                  >
                    {t("Twoja wiadomość *", "Your message *")}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c1272d] focus:border-transparent outline-none transition-all resize-none font-medium"
                    placeholder={t(
                      "W czym możemy pomóc?",
                      "How can we help you?"
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c1272d] text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>{t("Wyślij wiadomość", "Send message")}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-4">
                  {t(
                    "Gwarantujemy odpowiedź w ciągu 24h roboczych",
                    "We guarantee a response within 24 business hours"
                  )}
                </p>
              </form>
            </div>

            {/* Contact Info Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight border-l-4 border-[#c1272d] pl-6">
                {t("Dane ", "Company ")}
                <span className="text-[#c1272d]">{t("Firmowe", "Details")}</span>
              </h2>

              <div className="grid gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#c1272d] transition-colors">
                    <Phone className="w-6 h-6 text-[#c1272d] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c1272d] mb-1">
                      {t("Telefon", "Phone")}
                    </p>
                    <p className="text-xl font-black text-slate-900">
                      +48 22 811 57 02
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#c1272d] transition-colors">
                    <Mail className="w-6 h-6 text-[#c1272d] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c1272d] mb-1">
                      Email
                    </p>
                    <p className="text-xl font-black text-slate-900">
                      biuro@topmarketing.com.pl
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#c1272d] transition-colors">
                    <MapPin className="w-6 h-6 text-[#c1272d] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c1272d] mb-1">
                      {t("Adres biura", "Office Address")}
                    </p>
                    <p className="text-xl font-black text-slate-900 leading-tight">
                      ul. Kołacińska 35
                      <br />
                      03-171 Warszawa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#c1272d] transition-colors">
                    <Clock className="w-6 h-6 text-[#c1272d] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c1272d] mb-1">
                      {t("Godziny pracy", "Working Hours")}
                    </p>
                    <div className="text-slate-600 font-bold">
                      <span className="text-slate-900">
                        {t("Pon - Pt:", "Mon - Fri:")}
                      </span>{" "}
                      08:00 - 16:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold mb-2">
                    {t("Zapraszamy do współpracy", "Join our cooperation")}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {t(
                      "Nasza siedziba znajduje się w Warszawie, ale realizujemy projekty dla klientów z całej Polski i Europy.",
                      "Our headquarters is in Warsaw, but we carry out projects for clients from all over Poland and Europe."
                    )}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c1272d] opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.467812351234!2d20.9856!3d52.3214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc123456789%3A0x1234567890abcdef!2zS2_FgmFjaMWFc2thIDM1LCAwMy0xNzEgV2Fyc3phd2E!5e0!3m2!1spl!2spl!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
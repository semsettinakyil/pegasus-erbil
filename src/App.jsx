import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MapSection from "./components/MapSection";
import TicketForm from "./components/TicketForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileActionBar from "./components/MobileActionBar";
import { translations } from "./data/translations";

export default function App() {
  const [lang, setLang] = useState("tr");
  const [dark, setDark] = useState(false);

  const t = translations[lang];

  return (
    <main
      dir={t.dir}
      className={
        dark
          ? "min-h-screen bg-slate-950 pb-24 text-white md:pb-0"
          : "min-h-screen bg-[#f7f9fc] pb-24 text-slate-900 md:pb-0"
      }
    >
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        dark={dark}
        setDark={setDark}
      />

      <Hero t={t} dark={dark} />
      <Services t={t} dark={dark} />
      <MapSection t={t} dark={dark} />
      <TicketForm t={t} dark={dark} />
      <FAQ t={t} dark={dark} />
      <Footer t={t} dark={dark} />

      <div className="hidden md:block">
        <WhatsAppButton />
      </div>

      <MobileActionBar t={t} dark={dark} />
    </main>
  );
}

import { MapPin, Phone, Clock, Navigation, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/contact";
import AnimatedSection from "./AnimatedSection";

const WAZE_URL =
  "https://ul.waze.com/ul?place=ChIJc799-uAjB0AR_eW_Uuc8iNE&ll=36.21046570%2C44.02772440&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/mtSHVcYQHw4ckBEK7";

export default function MapSection({ t, dark }) {
  const box = dark
    ? "rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
    : "rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl md:p-8";

  const item = dark
    ? "flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
    : "flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5";

  return (
    <section id="map" className="px-5 py-16 md:py-20">
      <AnimatedSection className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {/* LEFT */}
        <div className={box}>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            {t.mapSmall}
          </p>

          <h2 className="mt-3 text-4xl font-black">{t.mapTitle}</h2>

          <p className={dark ? "mt-4 text-slate-300" : "mt-4 text-slate-600"}>
            {t.mapText}
          </p>

          {/* INFO */}
          <div className="mt-8 grid gap-4">
            {[
              [MapPin, t.office, contact.address],
              [
                Phone,
                t.phone,
                `${contact.phoneDisplay1}\n${contact.phoneDisplay2}`,
              ],
              [Mail, "E-Mail", contact.email],
              [Clock, t.hoursTitle, t.hours],
            ].map(([Icon, title, text]) => (
              <motion.div key={title} whileHover={{ x: 6 }} className={item}>
                <Icon className="mt-1 shrink-0 text-red-600" />

                <div>
                  <b className="text-lg">{title}</b>

                  {String(text)
                    .split("\n")
                    .map((line) => (
                      <p
                        key={line}
                        className={
                          dark ? "mt-1 text-slate-300" : "mt-1 text-slate-600"
                        }
                      >
                        {line}
                      </p>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* WAZE */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={WAZE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#33CCFF] px-7 py-4 font-black text-white shadow-xl shadow-cyan-400/20"
            >
              <Navigation size={20} />
              {t.openWaze}
            </motion.a>

            {/* GOOGLE MAPS */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className={
                dark
                  ? "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-black text-white backdrop-blur"
                  : "inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-950 shadow-lg"
              }
            >
              <MapPin size={20} />
              Google Maps
            </motion.a>
          </div>
        </div>

        {/* MAP */}
        <motion.a
          href={WAZE_URL}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.01 }}
          className="block h-[520px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl lg:h-auto"
        >
          <iframe
            title="Pegasus Erbil Location"
            src="https://embed.waze.com/iframe?zoom=17&lat=36.21046570&lon=44.02772440&pin=1"
            className="pointer-events-none h-full min-h-[520px] w-full border-0"
            loading="lazy"
          />
        </motion.a>
      </AnimatedSection>
    </section>
  );
}

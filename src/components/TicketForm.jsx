import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/contact";
import AnimatedSection from "./AnimatedSection";

export default function TicketForm({ t, dark }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    tripType: "oneway",
    departureDate: "",
    returnDate: "",
    passengers: "",
    note: "",
  });

  const updateForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const tripLabel =
      form.tripType === "roundtrip" ? t.fields.roundTrip : t.fields.oneWay;

    const message = `
${t.formTitle}

${t.fields.name}: ${form.name}
${t.fields.phone}: ${form.phone}
${t.fields.from}: ${form.from}
${t.fields.to}: ${form.to}
${t.fields.tripType}: ${tripLabel}
${t.fields.departureDate}: ${form.departureDate}
${
  form.tripType === "roundtrip"
    ? `${t.fields.returnDate}: ${form.returnDate}`
    : ""
}
${t.fields.passengers}: ${form.passengers}
${t.fields.note}: ${form.note}
`;

    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        message,
      )}`,
      "_blank",
    );
  };

  const inputClass = dark
    ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[16px] text-white outline-none placeholder:text-slate-400 focus:border-red-500"
    : "rounded-2xl border border-slate-200 bg-white px-4 py-4 text-[16px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-red-500";

  const passiveTripClass = dark
    ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 font-black text-slate-300 transition hover:bg-white/10"
    : "rounded-2xl border border-slate-200 bg-white px-4 py-4 font-black text-slate-700 transition hover:bg-slate-50";

  const activeTripClass =
    "rounded-2xl border border-red-600 bg-red-600 px-4 py-4 font-black text-white shadow-lg shadow-red-500/20";

  return (
    <section id="ticket" className="px-4 py-14 sm:px-5 md:py-20">
      <AnimatedSection
        className={
          dark
            ? "mx-auto grid max-w-7xl gap-8 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
            : "mx-auto grid max-w-7xl gap-8 rounded-[1.6rem] border border-slate-100 bg-white p-5 shadow-xl sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
        }
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            {t.formSmall}
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            {t.formTitle}
          </h2>

          <p className={dark ? "mt-4 text-slate-300" : "mt-4 text-slate-600"}>
            {t.formText}
          </p>
        </div>

        <form
          onSubmit={sendWhatsApp}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          {["name", "phone", "from", "to"].map((key) => (
            <label key={key} className="grid gap-2 text-sm font-black">
              <span>{t.fields[key]}</span>

              <input
                required
                type={key === "phone" ? "tel" : "text"}
                value={form[key]}
                onChange={(e) => {
                  if (key === "phone") {
                    const onlyNumbers = e.target.value.replace(/[^0-9+]/g, "");
                    updateForm(key, onlyNumbers);
                  } else {
                    updateForm(key, e.target.value);
                  }
                }}
                placeholder={t.placeholders[key]}
                className={inputClass}
                inputMode={key === "phone" ? "numeric" : "text"}
              />
            </label>
          ))}

          <div className="grid gap-2 text-sm font-black sm:col-span-2">
            <span>{t.fields.tripType}</span>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => {
                  updateForm("tripType", "oneway");
                  updateForm("returnDate", "");
                }}
                className={
                  form.tripType === "oneway"
                    ? activeTripClass
                    : passiveTripClass
                }
              >
                {t.fields.oneWay}
              </button>

              <button
                type="button"
                onClick={() => updateForm("tripType", "roundtrip")}
                className={
                  form.tripType === "roundtrip"
                    ? activeTripClass
                    : passiveTripClass
                }
              >
                {t.fields.roundTrip}
              </button>
            </div>
          </div>

          <label className="grid gap-2 text-sm font-black">
            <span>{t.fields.departureDate}</span>

            <input
              required
              type="date"
              value={form.departureDate}
              onChange={(e) => updateForm("departureDate", e.target.value)}
              className={inputClass}
            />
          </label>

          {form.tripType === "roundtrip" && (
            <label className="grid gap-2 text-sm font-black">
              <span>{t.fields.returnDate}</span>

              <input
                required
                type="date"
                value={form.returnDate}
                onChange={(e) => updateForm("returnDate", e.target.value)}
                className={inputClass}
              />
            </label>
          )}

          <label
            className={
              form.tripType === "roundtrip"
                ? "grid gap-2 text-sm font-black"
                : "grid gap-2 text-sm font-black sm:col-span-2"
            }
          >
            <span>{t.fields.passengers}</span>

            <input
              required
              type="number"
              min="1"
              value={form.passengers}
              onChange={(e) => updateForm("passengers", e.target.value)}
              placeholder={t.placeholders.passengers}
              className={inputClass}
            />
          </label>

          <label className="grid gap-2 text-sm font-black sm:col-span-2">
            <span>{t.fields.note}</span>

            <textarea
              value={form.note}
              onChange={(e) => updateForm("note", e.target.value)}
              placeholder={t.placeholders.note}
              className={`${inputClass} min-h-28`}
            />
          </label>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 font-black text-white shadow-xl shadow-red-500/20 sm:col-span-2"
          >
            <Send size={20} />
            {t.fields.submit}
          </motion.button>
        </form>
      </AnimatedSection>
    </section>
  );
}

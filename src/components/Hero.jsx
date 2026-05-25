import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Plane,
} from "lucide-react";

import { motion } from "framer-motion";
import heroPlane from "../assets/hero-plane.jpg";

export default function Hero({ t, dark }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-40 sm:px-5 sm:pt-36"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute right-[-12rem] top-16 h-[34rem] w-[34rem] rounded-full bg-yellow-300/40 blur-3xl" />

      <div className="absolute left-[-10rem] top-[30rem] h-[28rem] w-[28rem] rounded-full bg-red-300/25 blur-3xl" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-[12%] top-40 h-40 w-40 rounded-full bg-yellow-400/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-black text-yellow-800">
            <ShieldCheck size={16} />
            {t.heroBadge}
          </div>

          {/* TITLE */}
          <h2
            className={
              dark
                ? "max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl"
                : "max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-7xl"
            }
          >
            {t.heroTitle}
          </h2>

          {/* TEXT */}
          <p
            className={
              dark
                ? "mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
                : "mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
            }
          >
            {t.heroText}
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/9647508955020"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-yellow-400/30 transition hover:scale-105 hover:bg-yellow-300"
            >
              {t.whatsapp}
              <MessageCircle size={20} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 font-black text-white shadow-xl shadow-red-500/20 transition hover:scale-105 hover:bg-slate-950"
            >
              {t.explore}
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* glow */}
          <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-yellow-300/30 blur-3xl" />

          <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-red-400/20 blur-3xl" />

          {/* floating icon */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-4 -top-4 z-20 hidden rounded-full bg-white p-4 shadow-2xl lg:block"
          >
            <Plane className="h-8 w-8 text-red-600" />
          </motion.div>

          {/* image container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-950 shadow-2xl shadow-slate-900/10"
          >
            <img
              src={heroPlane}
              alt="Pegasus Flight"
              className="h-[260px] w-full object-cover object-center sm:h-[380px]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

            {/* content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-md">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-yellow-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-xs sm:tracking-[0.32em]">
                  PEGASUS • AL ZEDAN
                </p>

                <h3 className="mt-2 text-2xl font-black leading-tight text-white [text-shadow:0_4px_18px_rgba(0,0,0,1)] sm:mt-3 sm:text-4xl">
                  {t.supportTitle}
                </h3>

                <div className="mt-4 grid gap-2 sm:mt-6 sm:gap-3">
                  {t.supportItems.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/45 px-3 py-2 sm:rounded-2xl sm:px-4 sm:py-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-yellow-400"
                      />

                      <span className="text-xs font-bold leading-5 text-white [text-shadow:0_2px_10px_rgba(0,0,0,1)] sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

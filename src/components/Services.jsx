import { motion } from "framer-motion";
import {
  Ticket,
  Plane,
  Luggage,
  MessageCircle,
  Building2,
  Languages,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Services({ t, dark }) {
  const icons = [Ticket, Plane, Luggage, MessageCircle, Building2, Languages];

  return (
    <section id="services" className="px-4 py-14 sm:px-5 md:py-24">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-600 sm:text-sm">
            {t.servicesSmall}
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            {t.servicesTitle}
          </h2>

          <p
            className={
              dark
                ? "mx-auto mt-5 text-base leading-8 text-slate-300 sm:text-lg"
                : "mx-auto mt-5 text-base leading-8 text-slate-600 sm:text-lg"
            }
          >
            {t.servicesText}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {t.serviceCards.map(([title, text], index) => {
            const Icon = icons[index] || Ticket;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={
                  dark
                    ? "group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-7"
                    : "group relative overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/[0.05] sm:p-7"
                }
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-300/20 blur-3xl transition group-hover:bg-yellow-300/30" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 sm:h-16 sm:w-16">
                    <Icon
                      size={28}
                      strokeWidth={2.3}
                      className="text-red-600"
                    />
                  </div>

                  <h3
                    className={
                      dark
                        ? "mt-6 text-xl font-black leading-tight text-white sm:text-2xl"
                        : "mt-6 text-xl font-black leading-tight text-slate-950 sm:text-2xl"
                    }
                  >
                    {title}
                  </h3>

                  <p
                    className={
                      dark
                        ? "mt-3 text-sm leading-7 text-slate-300 sm:text-base"
                        : "mt-3 text-sm leading-7 text-slate-600 sm:text-base"
                    }
                  >
                    {text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FAQ({ t, dark }) {
  return (
    <section id="faq" className="px-5 py-20">
      <AnimatedSection className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            {t.faqSmall}
          </p>

          <h2 className="mt-3 text-4xl font-black">{t.faqTitle}</h2>
        </div>

        <div className="mt-12 grid gap-4">
          {t.faqs.map(([question, answer], index) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ scale: 1.015 }}
              className={
                dark
                  ? "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  : "rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/[0.03]"
              }
            >
              <h3 className="text-lg font-black">{question}</h3>

              <p
                className={
                  dark
                    ? "mt-2 leading-7 text-slate-300"
                    : "mt-2 leading-7 text-slate-600"
                }
              >
                {answer}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

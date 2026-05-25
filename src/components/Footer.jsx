import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { contact } from "../data/contact";

export default function Footer({ t, dark }) {
  return (
    <>
      <section id="contact" className="px-5 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 shadow-2xl shadow-yellow-400/20 md:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                {t.ctaTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-800 md:text-lg">
                {t.ctaText}
              </p>

              <div className="mt-8 grid gap-5 text-slate-950">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0" />
                  <p className="font-bold">{contact.address}</p>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0" />
                  <a href={`mailto:${contact.email}`} className="font-bold">
                    {contact.email}
                  </a>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0" />
                  <div className="font-bold">
                    <p>{contact.phoneDisplay1}</p>
                    <p>{contact.phoneDisplay2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-xl gap-4">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-5 text-lg font-black text-white"
                href={`tel:${contact.phoneDisplay1}`}
              >
                <Phone size={22} />
                {t.call}
              </a>

              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-5 text-lg font-black text-slate-950"
                href={`https://wa.me/${contact.whatsappNumber}`}
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>

              <a
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-slate-950 px-7 py-5 text-lg font-black text-slate-950"
                href={`mailto:${contact.email}`}
              >
                <Mail size={22} />
                {t.sendMail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={
          dark
            ? "border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400"
            : "border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500"
        }
      >
        © 2026 Pegasus • Al Zedan
      </footer>
    </>
  );
}

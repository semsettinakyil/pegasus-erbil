import { Phone, MessageCircle, Navigation } from "lucide-react";

import { contact } from "../data/contact";

const WAZE_URL =
  "https://ul.waze.com/ul?place=ChIJc799-uAjB0AR_eW_Uuc8iNE&ll=36.21046570%2C44.02772440&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";

export default function MobileActionBar({ dark }) {
  return (
    <div className="fixed bottom-2 left-0 right-0 z-[90] px-3 md:hidden">
      <div
        className={
          dark
            ? "mx-auto grid max-w-md grid-cols-3 gap-2 rounded-3xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-2xl"
            : "mx-auto grid max-w-md grid-cols-3 gap-2 rounded-3xl border border-white/80 bg-white/92 p-2 shadow-2xl shadow-black/5 backdrop-blur-2xl"
        }
      >
        {/* CALL */}
        <a
          href={`tel:${contact.phoneDisplay1}`}
          className="flex flex-col items-center justify-center rounded-2xl bg-[#020617] px-2 py-2.5 text-white transition active:scale-95"
        >
          <Phone size={17} strokeWidth={2.3} />

          <span className="mt-1 text-[10px] font-bold">Ara</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${contact.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center rounded-2xl bg-[#25D366] px-2 py-2.5 text-white transition active:scale-95"
        >
          <MessageCircle size={17} strokeWidth={2.3} />

          <span className="mt-1 text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* WAZE */}
        <a
          href={WAZE_URL}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center rounded-2xl bg-[#33CCFF] px-2 py-2.5 text-white transition active:scale-95"
        >
          <Navigation size={17} strokeWidth={2.3} />

          <span className="mt-1 text-[10px] font-bold">Waze</span>
        </a>
      </div>
    </div>
  );
}

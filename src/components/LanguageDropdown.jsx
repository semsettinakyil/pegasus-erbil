import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { translations } from "../data/translations";

export default function LanguageDropdown({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const active = translations[lang];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-900 shadow-sm"
      >
        <span>{active.flag}</span>
        <span className="hidden sm:inline">{active.name}</span>
        <ChevronDown
          size={16}
          className={open ? "rotate-180 transition" : "transition"}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
          {Object.entries(translations).map(([key, language]) => (
            <button
              key={key}
              onClick={() => {
                setLang(key);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 text-left last:border-b-0 hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{language.flag}</span>
                <div>
                  <p className="font-black text-slate-950">{language.name}</p>
                  <p className="text-xs text-slate-500">{key.toUpperCase()}</p>
                </div>
              </div>

              {lang === key && (
                <CheckCircle2 size={18} className="text-green-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

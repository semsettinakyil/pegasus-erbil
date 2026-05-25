import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import LanguageDropdown from "./LanguageDropdown";
import Logo from "./Logo";

export default function Header({ t, lang, setLang, dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const current = t.nav.find((item) => {
        const el = document.querySelector(item.href);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) setActive(current.href);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [t.nav]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-[calc(env(safe-area-inset-top)+10px)] sm:px-5 sm:pt-4">
        <div
          className={
            dark
              ? `mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-3xl border border-white/10 bg-slate-950/90 px-3 py-3 shadow-xl shadow-black/20 backdrop-blur-2xl sm:gap-4 sm:px-5 sm:py-4 ${
                  scrolled ? "bg-slate-950/95" : ""
                }`
              : `mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-3xl border border-white/70 bg-white/92 px-3 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-2xl sm:gap-4 sm:px-5 sm:py-4 ${
                  scrolled ? "bg-white" : ""
                }`
          }
        >
          <a href="#home" className="min-w-0 shrink">
            <Logo dark={dark} />
          </a>

          <nav
            className={
              dark
                ? "hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-bold text-slate-200 lg:flex"
                : "hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 text-sm font-bold text-slate-700 lg:flex"
            }
          >
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  active === item.href
                    ? "rounded-full bg-red-600 px-4 py-2 text-white shadow-lg shadow-red-500/20 transition"
                    : dark
                      ? "rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                      : "rounded-full px-4 py-2 transition hover:bg-yellow-100 hover:text-slate-950"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageDropdown lang={lang} setLang={setLang} dark={dark} />

            <button
              onClick={() => setDark(!dark)}
              aria-label="Theme"
              className={
                dark
                  ? "rounded-full border border-white/10 bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:p-3"
                  : "rounded-full border border-slate-200 bg-white p-2.5 text-slate-900 transition hover:bg-slate-100 sm:p-3"
              }
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
              className={
                dark
                  ? "rounded-full border border-white/10 bg-white/10 p-2.5 text-white transition hover:bg-white/20 lg:hidden sm:p-3"
                  : "rounded-full border border-slate-200 bg-white p-2.5 text-slate-900 transition hover:bg-slate-100 lg:hidden sm:p-3"
              }
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[80] bg-slate-950/50 backdrop-blur-sm lg:hidden">
          <aside
            className={
              dark
                ? "absolute right-0 top-0 h-full w-80 max-w-[88vw] border-l border-white/10 bg-slate-950 px-5 pb-5 pt-[calc(env(safe-area-inset-top)+24px)] text-white shadow-2xl"
                : "absolute right-0 top-0 h-full w-80 max-w-[88vw] bg-white px-5 pb-5 pt-[calc(env(safe-area-inset-top)+24px)] text-slate-950 shadow-2xl"
            }
          >
            <div className="mb-8 flex items-center justify-between gap-3">
              <Logo dark={dark} />

              <button
                onClick={() => setMobileOpen(false)}
                className={
                  dark
                    ? "shrink-0 rounded-full border border-white/10 p-3 transition hover:bg-white/10"
                    : "shrink-0 rounded-full border border-slate-200 p-3 transition hover:bg-slate-100"
                }
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-3">
              {t.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    active === item.href
                      ? "rounded-2xl bg-red-600 p-4 font-black text-white shadow-lg shadow-red-500/20"
                      : dark
                        ? "rounded-2xl bg-white/5 p-4 font-black transition hover:bg-white/10"
                        : "rounded-2xl bg-slate-50 p-4 font-black transition hover:bg-slate-100"
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div
              className={
                dark
                  ? "mt-8 rounded-3xl border border-white/10 bg-white/5 p-5"
                  : "mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5"
              }
            >
              <p className="text-sm font-black text-red-600">
                Pegasus • Al Zedan
              </p>

              <p
                className={
                  dark
                    ? "mt-2 text-sm leading-7 text-slate-300"
                    : "mt-2 text-sm leading-7 text-slate-600"
                }
              >
                {t.brandSub}
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

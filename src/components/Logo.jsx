import logo from "../assets/pegasus-logo.png";

export default function Logo({ dark }) {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-4">
      {/* ICON */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFD21A] sm:h-14 sm:w-14">
        <svg
          viewBox="0 0 64 64"
          className="h-6 w-6 rotate-[35deg] sm:h-8 sm:w-8"
          fill="none"
        >
          <path
            d="M30.5 6
       C28.8 6 27.5 7.3 27.5 9V27.5
       L10.5 34
       C8.8 34.7 7.5 36.3 7.5 38.2V41
       L27.5 36L27.5 48
       L21.5 53V56
       L32 52.8
       L42.5 56V53
       L36.5 48V36
       L56.5 41V38.2
       C56.5 36.3 55.2 34.7 53.5 34
       L36.5 27.5V9
       C36.5 7.3 35.2 6 33.5 6H30.5Z"
            fill="#8B0000"
          />
        </svg>
      </div>

      {/* TEXT */}
      <div className="min-w-0 leading-none">
        {/* PEGASUS LOGO */}
        <img
          src={logo}
          alt="Pegasus"
          className="h-5 w-auto max-w-[110px] object-contain sm:h-9 sm:max-w-[160px]"
        />

        {/* BOTTOM */}
        <div className="mt-1 flex items-center gap-1 sm:gap-2">
          <div className="h-[2px] w-4 shrink-0 rounded-full bg-[#FFD21A] sm:w-8" />

          <div className="flex min-w-0 flex-col items-center leading-none">
            <span
              className={
                dark
                  ? "text-[7px] font-black tracking-[0.24em] text-[#FFD21A] sm:text-[11px] sm:tracking-[0.34em]"
                  : "text-[7px] font-black tracking-[0.24em] text-orange-500 sm:text-[11px] sm:tracking-[0.34em]"
              }
            >
              AL ZEDAN
            </span>

            <span
              className={
                dark
                  ? "mt-[3px] text-[5px] font-bold uppercase tracking-[0.18em] text-white/55 sm:text-[8px]"
                  : "mt-[3px] text-[5px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-[8px]"
              }
            >
              AUTHORIZED GSA
            </span>
          </div>

          <div className="h-[2px] w-4 shrink-0 rounded-full bg-[#FFD21A] sm:w-8" />
        </div>
      </div>
    </div>
  );
}

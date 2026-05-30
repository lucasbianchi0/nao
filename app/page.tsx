import Link from "next/link";
import ChocolateChipSVG from "@/components/cookies/ChocolateChipSVG";
import RedVelvetSVG from "@/components/cookies/RedVelvetSVG";
import CookiesAndCreamSVG from "@/components/cookies/CookiesAndCreamSVG";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-64px)] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #FFE4C4 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #FFDDB0 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, #FFE9CC 0%, transparent 50%), #FFF0DC",
        }}
      />

      {/* Floating background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {[
          { cls: "drift-1", size: 80, top: "8%", left: "5%", opacity: 0.07 },
          { cls: "drift-2", size: 55, top: "15%", right: "8%", opacity: 0.09 },
          { cls: "drift-3", size: 100, top: "55%", left: "2%", opacity: 0.06 },
          { cls: "drift-4", size: 70, bottom: "10%", right: "5%", opacity: 0.08 },
          { cls: "drift-5", size: 45, top: "38%", right: "14%", opacity: 0.1 },
          { cls: "drift-6", size: 90, bottom: "20%", left: "10%", opacity: 0.07 },
        ].map((b, i) => (
          <span
            key={i}
            className={`absolute text-amber-800 ${b.cls}`}
            style={{
              fontSize: b.size,
              top: b.top,
              left: (b as { left?: string }).left,
              right: (b as { right?: string }).right,
              bottom: (b as { bottom?: string }).bottom,
              opacity: b.opacity,
            }}
          >
            🍪
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-amber-700 text-lg md:text-xl mb-3 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            animationDelay: "0.1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Una tarde de horno y mucho amor
        </p>

        {/* Main title */}
        <h1
          className="text-[#3D1A08] mb-4 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 9vw, 6.5rem)",
            lineHeight: 1.05,
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Las Cookies de
          <br />
          <span style={{ color: "#8B4513", fontStyle: "italic" }}>
            Lucas & Nao
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#7A4A2A] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{
            animationDelay: "0.35s",
            opacity: 0,
            animationFillMode: "forwards",
            fontWeight: 500,
          }}
        >
          Tres recetas premium con todos los secretos de las mejores bakeries
          del mundo. Estilo{" "}
          <strong className="text-[#5C3317]">Levain NYC</strong> y{" "}
          <strong className="text-[#5C3317]">Crumbl</strong>.
        </p>

        {/* Cookie SVGs row */}
        <div
          className="flex justify-center items-end gap-4 md:gap-8 mb-10 animate-fade-in-up"
          style={{
            animationDelay: "0.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div className="w-36 h-36 md:w-48 md:h-48 animate-float-delayed drop-shadow-xl">
            <ChocolateChipSVG />
          </div>
          <div className="w-44 h-44 md:w-60 md:h-60 animate-float drop-shadow-2xl">
            <RedVelvetSVG />
          </div>
          <div className="w-36 h-36 md:w-48 md:h-48 animate-float-slow drop-shadow-xl">
            <CookiesAndCreamSVG />
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up"
          style={{
            animationDelay: "0.65s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Link
            href="/recetas"
            className="inline-flex items-center justify-center gap-2 bg-[#5C3317] text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:bg-[#7B4420] hover:-translate-y-1 transition-all duration-200"
            style={{ boxShadow: "0 8px 25px rgba(92,51,23,0.35)" }}
          >
            🍪 Ver las recetas
          </Link>
          <Link
            href="/lista-de-compras"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#5C3317] border-2 border-[#D4A574] px-8 py-3.5 rounded-full text-base font-bold hover:bg-amber-50 hover:-translate-y-1 transition-all duration-200"
          >
            🛒 Lista de compras
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
        <span className="text-xs font-bold tracking-widest text-[#8B4513] uppercase">
          scroll
        </span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          className="text-[#8B4513]"
        >
          <path
            d="M1 1l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

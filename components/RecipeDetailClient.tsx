"use client";
import { useState, useEffect, useRef } from "react";
import type { Recipe } from "@/data/recipes";
import CookieSVG from "@/components/cookies/CookieSVGMap";

export default function RecipeDetailClient({ recipe }: { recipe: Recipe }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("step-visible");
            entry.target.classList.remove("step-hidden");
          }
        });
      },
      { threshold: 0.15 }
    );
    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const calloutStyles = {
    time: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
    },
    temp: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      text: "text-amber-800",
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back button */}
      <a
        href="/recetas"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#8B4513] hover:text-[#5C3317] mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
        Volver a recetas
      </a>

      {/* Hero section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-14">
        {/* Illustration */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="w-52 h-52 md:w-64 md:h-64 animate-float drop-shadow-2xl">
            <CookieSVG slug={recipe.slug} />
          </div>
        </div>

        {/* Title & info */}
        <div className="flex-1 text-center md:text-left">
          <span
            className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-3 ${recipe.theme.badge}`}
          >
            {recipe.badge}
          </span>
          <h1
            className="text-[#3D1A08] mb-3 leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            {recipe.title}{" "}
            <span style={{ fontStyle: "italic" }}>{recipe.titleItalic}</span>
          </h1>
          <p className="text-[#7A4A2A] leading-relaxed mb-5 font-medium text-sm md:text-base">
            {recipe.description}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {[
              { icon: "🍪", label: recipe.yield },
              { icon: "⚖️", label: recipe.weight },
              { icon: "⏱", label: recipe.totalTime },
              { icon: "❄️", label: recipe.coldTime },
            ].map((s) => (
              <span
                key={s.label}
                className="flex items-center gap-1.5 bg-white border border-amber-200 rounded-full px-3 py-1.5 text-xs font-bold text-[#5C3317] shadow-sm"
              >
                {s.icon} {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ——— INGREDIENTS ——— */}
      <Section
        title="Ingredientes"
        emoji="🛒"
        accent={recipe.theme.accent}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {recipe.ingredients.main.map((ing, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl p-3 shadow-sm border-l-4 ${recipe.theme.cardBorder} flex items-start gap-2`}
          >
            <span className="text-xl flex-shrink-0">{ing.icon}</span>
            <div>
              <span className={`text-xs font-black block ${recipe.theme.accent}`}>
                {ing.amount}
              </span>
              <span className="text-sm font-bold text-[#3D1A08] leading-tight">
                {ing.name}
              </span>
              {ing.note && (
                <span className="text-xs text-[#9A6040] block leading-tight mt-0.5 italic">
                  {ing.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Extra ingredients (frosting / glaze) */}
      {recipe.ingredients.extra && (
        <>
          <h3
            className="text-base font-bold text-[#5C3317] mt-6 mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span>✨</span>
            {recipe.ingredients.extra.label}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-2">
            {recipe.ingredients.extra.items.map((ing, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-3 shadow-sm border-l-4 border-l-amber-300 flex items-start gap-2`}
              >
                <span className="text-xl flex-shrink-0">{ing.icon}</span>
                <div>
                  <span className="text-xs font-black block text-amber-700">
                    {ing.amount}
                  </span>
                  <span className="text-sm font-bold text-[#3D1A08] leading-tight">
                    {ing.name}
                  </span>
                  {ing.note && (
                    <span className="text-xs text-[#9A6040] block leading-tight mt-0.5 italic">
                      {ing.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ——— STEPS ——— */}
      <div className="mt-12">
        <Section title="Paso a paso" emoji="👩‍🍳" accent={recipe.theme.accent} />

        <div className="space-y-4">
          {recipe.steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { stepsRef.current[i] = el; }}
              className="step-hidden flex gap-4"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full ${recipe.theme.number} text-white flex items-center justify-center flex-shrink-0 shadow-md`}
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 900, fontSize: "1.1rem" }}
                >
                  {i + 1}
                </div>
                {i < recipe.steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-2 opacity-30 rounded-full min-h-[24px]"
                    style={{
                      background: `linear-gradient(to bottom, ${recipe.id === "red-velvet" ? "#C0392B" : recipe.id === "cookies-cream" ? "#2C2C2C" : "#D4813A"}, transparent)`,
                    }}
                  />
                )}
              </div>

              {/* Right: card */}
              <div className="flex-1 pb-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-50">
                  <h4 className="text-sm md:text-base font-black text-[#3D1A08] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#7A4A2A] leading-relaxed font-medium">
                    {step.description}
                  </p>
                  {step.callout && (
                    <div
                      className={`flex items-start gap-2 mt-3 p-2.5 rounded-xl border text-xs font-bold ${calloutStyles[step.callout.type].bg} ${calloutStyles[step.callout.type].border} ${calloutStyles[step.callout.type].text}`}
                    >
                      <span className="flex-shrink-0 text-sm">{step.callout.icon}</span>
                      <span>{step.callout.text}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ——— TIPS ——— */}
      <div className="mt-12">
        <Section title="Tips de chef" emoji="💡" accent={recipe.theme.accent} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recipe.tips.map((tip, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm border-t-4 card-hover"
              style={{
                borderTopColor:
                  recipe.id === "red-velvet"
                    ? "#C0392B"
                    : recipe.id === "cookies-cream"
                    ? "#2C2C2C"
                    : "#D4813A",
              }}
            >
              <span className="text-2xl block mb-2">{tip.icon}</span>
              <h4 className="font-black text-[#3D1A08] text-sm mb-1">{tip.title}</h4>
              <p className="text-xs text-[#7A4A2A] leading-relaxed font-medium">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ——— FAQ ——— */}
      <div className="mt-12">
        <Section title="Preguntas frecuentes" emoji="❓" accent={recipe.theme.accent} />
        <div className="space-y-2">
          {recipe.faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
                openFaq === i ? "border-amber-300" : "border-amber-100"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-amber-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-sm font-bold text-[#3D1A08] leading-tight pr-2">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs transition-all duration-300 ${recipe.theme.stepBg} ${openFaq === i ? "rotate-180" : ""}`}
                >
                  ↓
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-4 pb-4 text-sm text-[#7A4A2A] leading-relaxed font-medium bg-amber-50/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-14 pt-8 border-t border-amber-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <a
          href="/recetas"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#8B4513] hover:text-[#5C3317] group"
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
          Ver otras recetas
        </a>
        <a
          href="/lista-de-compras"
          className="inline-flex items-center gap-2 bg-white border-2 border-amber-300 text-[#5C3317] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-amber-50 transition-all"
        >
          🛒 Lista de compras
        </a>
      </div>
    </div>
  );
}

function Section({
  title,
  emoji,
  accent,
}: {
  title: string;
  emoji: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-2xl">{emoji}</span>
      <h2
        className={`text-xl font-black ${accent}`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-amber-200 to-transparent" />
    </div>
  );
}

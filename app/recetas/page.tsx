import Link from "next/link";
import { recipes } from "@/data/recipes";
import CookieSVG from "@/components/cookies/CookieSVGMap";

export default function RecetasPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-amber-700 text-base mb-2"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Tres recetas premium
          </p>
          <h1
            className="text-[#3D1A08] mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Las <span style={{ color: "#8B4513", fontStyle: "italic" }}>Recetas</span>
          </h1>
          <p className="text-[#7A4A2A] max-w-lg mx-auto text-sm md:text-base leading-relaxed font-medium">
            Hacé clic en cada cookie para ver los ingredientes, el paso a paso
            detallado y todos los tips profesionales.
          </p>
        </div>

        {/* Recipe cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recetas/${recipe.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-md card-hover border border-amber-100"
            >
              {/* Illustration area */}
              <div
                className={`relative flex items-center justify-center py-8 px-6 ${
                  recipe.id === "chocolate-chip"
                    ? "bg-gradient-to-br from-amber-50 to-orange-100"
                    : recipe.id === "red-velvet"
                    ? "bg-gradient-to-br from-red-50 to-rose-100"
                    : "bg-gradient-to-br from-zinc-50 to-gray-100"
                }`}
              >
                <div className="w-40 h-40 animate-float group-hover:scale-105 transition-transform duration-300 drop-shadow-xl">
                  <CookieSVG slug={recipe.slug} />
                </div>
                {/* Badge */}
                <span
                  className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full ${recipe.theme.badge}`}
                >
                  {recipe.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h2
                  className="text-[#3D1A08] mb-1 leading-tight"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                  }}
                >
                  {recipe.title}{" "}
                  <span style={{ fontStyle: "italic" }}>{recipe.titleItalic}</span>
                </h2>
                <p className="text-[#7A4A2A] text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                  {recipe.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    { icon: "🍪", label: recipe.yield },
                    { icon: "⚖️", label: recipe.weight },
                    { icon: "❄️", label: recipe.coldTime },
                  ].map((s) => (
                    <span
                      key={s.label}
                      className="flex items-center gap-1 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1 text-xs font-bold text-[#5C3317]"
                    >
                      {s.icon} {s.label}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className={`flex items-center justify-between pt-3 border-t border-amber-50`}
                >
                  <span className="text-sm font-bold text-[#8B4513]">
                    Ver receta completa
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#5C3317] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/lista-de-compras"
            className="inline-flex items-center gap-2 bg-white border-2 border-amber-300 text-[#5C3317] px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-50 hover:-translate-y-1 transition-all duration-200 shadow-sm"
          >
            🛒 Ver lista de compras para las 3 recetas
          </Link>
        </div>
      </div>
    </div>
  );
}

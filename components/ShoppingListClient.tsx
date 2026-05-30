"use client";
import { useState, useEffect } from "react";
import { shoppingCategories } from "@/data/shoppingList";

export default function ShoppingListClient() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<"all" | "pending" | "done">("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("cookies-shopping-list");
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {}
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem("cookies-shopping-list", JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };

  const clearAll = () => {
    setChecked(new Set());
    try { localStorage.removeItem("cookies-shopping-list"); } catch {}
  };

  const allItems = shoppingCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, catId: cat.id, id: `${cat.id}-${item.name}` }))
  );
  const totalItems = allItems.length;
  const checkedCount = allItems.filter((i) => checked.has(`${i.catId}-${i.name}`)).length;

  if (!mounted) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <a
          href="/recetas"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#8B4513] hover:text-[#5C3317] mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
          Ver recetas
        </a>

        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p
              className="text-amber-700 text-sm mb-1"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Para las 3 recetas juntas
            </p>
            <h1
              className="text-[#3D1A08]"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                lineHeight: 1.1,
              }}
            >
              Lista de <span style={{ color: "#8B4513", fontStyle: "italic" }}>Compras</span>
            </h1>
          </div>

          {/* Progress */}
          <div className="flex-shrink-0 text-right">
            <div className="text-2xl font-black text-[#5C3317]">
              {checkedCount}/{totalItems}
            </div>
            <div className="text-xs text-[#9A6040] font-bold">comprados</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-amber-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-700 rounded-full transition-all duration-500"
            style={{ width: `${(checkedCount / totalItems) * 100}%` }}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "pending", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === f
                ? "bg-[#5C3317] text-white"
                : "bg-white border border-amber-200 text-[#5C3317] hover:bg-amber-50"
            }`}
          >
            {f === "all" ? "Todo" : f === "pending" ? "⬜ Por comprar" : "✅ Comprado"}
          </button>
        ))}
        {checkedCount > 0 && (
          <button
            onClick={clearAll}
            className="ml-auto px-4 py-1.5 rounded-full text-xs font-bold text-red-600 border border-red-200 hover:bg-red-50 transition-colors"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {shoppingCategories.map((cat) => {
          const catItems = cat.items.map((item) => ({
            ...item,
            id: `${cat.id}-${item.name}`,
            isDone: checked.has(`${cat.id}-${item.name}`),
          }));

          const visibleItems = catItems.filter((item) => {
            if (filter === "pending") return !item.isDone;
            if (filter === "done") return item.isDone;
            return true;
          });

          if (visibleItems.length === 0) return null;

          return (
            <div key={cat.id}>
              <h2
                className="text-sm font-black text-[#5C3317] mb-3 flex items-center gap-2 uppercase tracking-wider"
              >
                <span>{cat.icon}</span>
                {cat.label}
                <span className="text-[#9A6040] normal-case tracking-normal font-bold text-xs">
                  ({catItems.filter((i) => checked.has(i.id)).length}/{catItems.length})
                </span>
              </h2>

              <div className="space-y-2">
                {visibleItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className={`w-full flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                      item.isDone
                        ? "bg-green-50 border-green-200 opacity-60"
                        : "bg-white border-amber-100 hover:border-amber-300 hover:bg-amber-50"
                    }`}
                  >
                    {/* Checkbox */}
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all ${
                        item.isDone
                          ? "bg-green-500 border-green-500"
                          : "border-amber-300"
                      }`}
                    >
                      {item.isDone && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>

                    {/* Icon */}
                    <span className="text-lg flex-shrink-0">{item.icon}</span>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span
                          className={`text-sm font-black ${item.isDone ? "line-through text-gray-400" : "text-[#3D1A08]"}`}
                        >
                          {item.name}
                        </span>
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex-shrink-0">
                          {item.amount}
                        </span>
                      </div>
                      {item.note && (
                        <p className="text-xs text-[#9A6040] mt-0.5 italic">
                          {item.note}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {item.usedIn.map((u) => (
                          <span
                            key={u}
                            className="text-xs text-[#8B6040] bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full font-medium"
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Done state */}
      {checkedCount === totalItems && (
        <div className="mt-10 text-center py-8 bg-green-50 rounded-3xl border border-green-200">
          <div className="text-4xl mb-2">🎉</div>
          <p
            className="text-green-800 font-bold text-lg"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¡Todo comprado!
          </p>
          <p className="text-green-600 text-sm mt-1 font-medium">
            A hornear con Lucas & Nao 🍪
          </p>
        </div>
      )}
    </div>
  );
}

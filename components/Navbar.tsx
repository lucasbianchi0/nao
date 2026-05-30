"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/recetas", label: "Recetas", icon: "🍪" },
    { href: "/lista-de-compras", label: "Lista de compras", icon: "🛒" },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setOpen(false)}
          >
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300 inline-block">
              🍪
            </span>
            <span
              className="font-serif font-bold text-lg text-[#5C3317] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lucas <span className="text-amber-600">&</span> Nao
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive(l.href)
                    ? "bg-[#5C3317] text-white shadow-md"
                    : "text-[#5C3317] hover:bg-amber-100"
                }`}
              >
                <span>{l.icon}</span>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-amber-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span
              className={`block w-5 h-0.5 bg-[#5C3317] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#5C3317] transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#5C3317] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-[#FFF8F0] shadow-xl border-b border-amber-100 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="p-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-bold transition-all duration-200 ${
                  isActive(l.href)
                    ? "bg-[#5C3317] text-white"
                    : "text-[#5C3317] hover:bg-amber-100"
                }`}
              >
                <span className="text-xl">{l.icon}</span>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-4 pt-1 border-t border-amber-100 mt-1">
            <p
              className="text-xs text-amber-700 font-medium text-center"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Tres recetas premium, un momento especial ✨
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

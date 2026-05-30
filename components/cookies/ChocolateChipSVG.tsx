"use client";
export default function ChocolateChipSVG() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        {/* Main cookie gradient — warm golden */}
        <radialGradient id="cc3Base" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F5C97A" />
          <stop offset="40%" stopColor="#E09A40" />
          <stop offset="80%" stopColor="#C07020" />
          <stop offset="100%" stopColor="#8A4A10" />
        </radialGradient>
        {/* Edge vignette */}
        <radialGradient id="cc3Edge" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="transparent" />
          <stop offset="100%" stopColor="#5C2A05" stopOpacity="0.55" />
        </radialGradient>
        {/* Chip gradient */}
        <radialGradient id="cc3Chip" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#5C2A0A" />
          <stop offset="100%" stopColor="#1E0B02" />
        </radialGradient>
        {/* Surface highlight */}
        <radialGradient id="cc3Highlight" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="rgba(255,240,200,0.35)" />
          <stop offset="100%" stopColor="rgba(255,240,200,0)" />
        </radialGradient>
        {/* Soft drop shadow filter */}
        <filter id="cc3Shadow" x="-15%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#7B3800" floodOpacity="0.3" />
        </filter>
        <filter id="cc3Wobble" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="4" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="153" cy="274" rx="106" ry="11" fill="rgba(100,45,5,0.2)" />

      {/* Cookie base — organic shape via filter */}
      <circle cx="150" cy="146" r="114" fill="url(#cc3Base)" filter="url(#cc3Wobble)" />
      {/* Edge vignette */}
      <circle cx="150" cy="146" r="114" fill="url(#cc3Edge)" filter="url(#cc3Wobble)" />
      {/* Top highlight */}
      <circle cx="150" cy="146" r="114" fill="url(#cc3Highlight)" filter="url(#cc3Wobble)" />

      {/* Surface crinkle lines */}
      <path d="M110 90 Q122 102 112 118" stroke="rgba(160,80,15,0.4)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M185 175 Q172 162 182 148" stroke="rgba(160,80,15,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M95 162 Q108 158 104 172" stroke="rgba(160,80,15,0.3)" strokeWidth="1.4" fill="none" strokeLinecap="round" />

      {/* ── Chocolate chips ── */}
      {/* Chip 1 */}
      <ellipse cx="92" cy="108" rx="17" ry="14" fill="url(#cc3Chip)" transform="rotate(-20 92 108)" />
      <circle cx="86" cy="103" r="4" fill="rgba(255,255,255,0.28)" />
      <circle cx="86" cy="103" r="1.8" fill="rgba(255,255,255,0.55)" />

      {/* Chip 2 */}
      <ellipse cx="152" cy="82" rx="15" ry="13" fill="url(#cc3Chip)" transform="rotate(10 152 82)" />
      <circle cx="146" cy="77" r="3.5" fill="rgba(255,255,255,0.28)" />
      <circle cx="146" cy="77" r="1.5" fill="rgba(255,255,255,0.55)" />

      {/* Chip 3 */}
      <ellipse cx="202" cy="105" rx="16" ry="13" fill="url(#cc3Chip)" transform="rotate(-32 202 105)" />
      <circle cx="196" cy="100" r="3.8" fill="rgba(255,255,255,0.28)" />
      <circle cx="196" cy="100" r="1.6" fill="rgba(255,255,255,0.55)" />

      {/* Chip 4 */}
      <ellipse cx="115" cy="158" rx="15" ry="12" fill="url(#cc3Chip)" transform="rotate(22 115 158)" />
      <circle cx="109" cy="153" r="3.5" fill="rgba(255,255,255,0.28)" />
      <circle cx="109" cy="153" r="1.5" fill="rgba(255,255,255,0.55)" />

      {/* Chip 5 */}
      <ellipse cx="182" cy="155" rx="17" ry="13" fill="url(#cc3Chip)" transform="rotate(-14 182 155)" />
      <circle cx="175" cy="150" r="4" fill="rgba(255,255,255,0.28)" />
      <circle cx="175" cy="150" r="1.8" fill="rgba(255,255,255,0.55)" />

      {/* Chip 6 */}
      <ellipse cx="150" cy="192" rx="16" ry="13" fill="url(#cc3Chip)" transform="rotate(28 150 192)" />
      <circle cx="143" cy="187" r="3.5" fill="rgba(255,255,255,0.28)" />
      <circle cx="143" cy="187" r="1.5" fill="rgba(255,255,255,0.55)" />

      {/* Chip 7 — small, tucked in left */}
      <ellipse cx="90" cy="178" rx="13" ry="10" fill="url(#cc3Chip)" transform="rotate(-8 90 178)" />
      <circle cx="85" cy="174" r="3" fill="rgba(255,255,255,0.25)" />
      <circle cx="85" cy="174" r="1.3" fill="rgba(255,255,255,0.5)" />

      {/* Chip 8 — right side */}
      <ellipse cx="210" cy="152" rx="12" ry="10" fill="url(#cc3Chip)" transform="rotate(18 210 152)" />
      <circle cx="205" cy="148" r="3" fill="rgba(255,255,255,0.25)" />
      <circle cx="205" cy="148" r="1.3" fill="rgba(255,255,255,0.5)" />

      {/* Salt flakes */}
      <rect x="128" y="96" width="7" height="2.5" rx="1.2" fill="rgba(255,255,255,0.75)" transform="rotate(14 128 96)" />
      <rect x="172" y="132" width="6" height="2" rx="1" fill="rgba(255,255,255,0.7)" transform="rotate(-8 172 132)" />
      <rect x="106" y="140" width="6" height="2" rx="1" fill="rgba(255,255,255,0.65)" transform="rotate(22 106 140)" />
    </svg>
  );
}

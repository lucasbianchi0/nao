"use client";
export default function CookiesAndCreamSVG() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        {/* Warm golden cookie base */}
        <radialGradient id="cac4Base" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F0D898" />
          <stop offset="42%" stopColor="#D4A850" />
          <stop offset="80%" stopColor="#B07828" />
          <stop offset="100%" stopColor="#7C4E10" />
        </radialGradient>
        <radialGradient id="cac4Edge" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="transparent" />
          <stop offset="100%" stopColor="#5A3408" stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id="cac4Highlight" cx="38%" cy="32%" r="52%">
          <stop offset="0%" stopColor="rgba(255,242,195,0.32)" />
          <stop offset="100%" stopColor="rgba(255,240,190,0)" />
        </radialGradient>
        {/* Glaze — creamy white, center bright */}
        <radialGradient id="glazeR" cx="45%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#FBF6EC" />
          <stop offset="100%" stopColor="#EDE3D0" />
        </radialGradient>
        {/* Oreo wafer dark */}
        <linearGradient id="oreoWafer" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E2E2E" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <filter id="cac4Wobble" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="4" seed="13" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="glazeFilter">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(180,140,80,0.22)" />
        </filter>
        <filter id="oreoShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.4)" />
        </filter>
        <clipPath id="glazeClip">
          <ellipse cx="150" cy="145" rx="72" ry="62" />
        </clipPath>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="152" cy="274" rx="108" ry="11" fill="rgba(80,45,5,0.18)" />

      {/* Cookie base */}
      <circle cx="150" cy="146" r="114" fill="url(#cac4Base)" filter="url(#cac4Wobble)" />
      <circle cx="150" cy="146" r="114" fill="url(#cac4Edge)" filter="url(#cac4Wobble)" />
      <circle cx="150" cy="146" r="114" fill="url(#cac4Highlight)" filter="url(#cac4Wobble)" />

      {/* Surface crinkles */}
      <path d="M105 88 Q118 100 108 116" stroke="rgba(170,100,20,0.38)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M192 180 Q178 166 190 153" stroke="rgba(170,100,20,0.32)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── Oreo pieces embedded in dough ── */}

      {/* Oreo piece A — top-left, large, tilted */}
      <g transform="rotate(-24 88 115)">
        <rect x="72" y="103" width="32" height="22" rx="4.5" fill="url(#oreoWafer)" filter="url(#oreoShadow)" />
        {/* Cream filling visible */}
        <rect x="72" y="113" width="32" height="5" rx="0" fill="#F2EAD8" />
        {/* Top wafer emboss lines */}
        <rect x="75" y="106" width="26" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
        <rect x="75" y="109" width="26" height="1.2" rx="0.6" fill="rgba(255,255,255,0.08)" />
        {/* Bottom wafer emboss lines */}
        <rect x="75" y="121" width="26" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
        <rect x="75" y="124" width="26" height="1.2" rx="0.6" fill="rgba(255,255,255,0.08)" />
      </g>

      {/* Oreo piece B — right, medium */}
      <g transform="rotate(16 196 108)">
        <rect x="181" y="98" width="28" height="19" rx="4" fill="url(#oreoWafer)" filter="url(#oreoShadow)" />
        <rect x="181" y="107" width="28" height="4.5" rx="0" fill="#EEE6D5" />
        <rect x="184" y="101" width="22" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
        <rect x="184" y="104" width="22" height="1.2" rx="0.6" fill="rgba(255,255,255,0.08)" />
        <rect x="184" y="115" width="22" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* Oreo piece C — bottom-right */}
      <g transform="rotate(-12 193 175)">
        <rect x="178" y="166" width="30" height="20" rx="4.5" fill="url(#oreoWafer)" filter="url(#oreoShadow)" />
        <rect x="178" y="175" width="30" height="4.5" rx="0" fill="#EFE7D6" />
        <rect x="181" y="169" width="24" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
        <rect x="181" y="172" width="24" height="1.2" rx="0.6" fill="rgba(255,255,255,0.08)" />
        <rect x="181" y="183" width="24" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* Oreo piece D — bottom-left */}
      <g transform="rotate(30 95 180)">
        <rect x="80" y="172" width="29" height="19" rx="4" fill="url(#oreoWafer)" filter="url(#oreoShadow)" />
        <rect x="80" y="181" width="29" height="4.5" rx="0" fill="#EEE6D5" />
        <rect x="83" y="175" width="23" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
        <rect x="83" y="178" width="23" height="1.2" rx="0.6" fill="rgba(255,255,255,0.08)" />
        <rect x="83" y="188" width="23" height="1.2" rx="0.6" fill="rgba(255,255,255,0.1)" />
      </g>

      {/* ── White chocolate glaze pool ── */}
      <ellipse cx="150" cy="145" rx="72" ry="62" fill="url(#glazeR)" filter="url(#glazeFilter)" />

      {/* Glaze organic edge — slightly bumpy */}
      <ellipse cx="150" cy="145" rx="71" ry="61" fill="none" stroke="rgba(210,190,155,0.4)" strokeWidth="2.5" />

      {/* Glaze drips */}
      <path d="M105 175 Q100 188 99 200 Q103 190 108 178 Z" fill="#FDFAF4" opacity="0.95" />
      <path d="M191 170 Q197 182 198 193 Q194 183 188 172 Z" fill="#FDFAF4" opacity="0.92" />
      <path d="M148 204 Q148 216 149 222 Q151 216 150 204 Z" fill="rgba(255,253,245,0.88)" />

      {/* Glaze main highlight — luxury sheen */}
      <ellipse cx="130" cy="126" rx="26" ry="17" fill="rgba(255,255,255,0.52)" transform="rotate(-22 130 126)" />
      <ellipse cx="120" cy="118" rx="12" ry="8" fill="rgba(255,255,255,0.7)" transform="rotate(-22 120 118)" />

      {/* Crushed Oreo on glaze */}
      <rect x="142" y="130" width="10" height="7" rx="2" fill="#1A1A1A" opacity="0.82" transform="rotate(15 142 130)" />
      <rect x="163" y="136" width="9" height="6" rx="2" fill="#222222" opacity="0.78" transform="rotate(-20 163 136)" />
      <rect x="152" y="155" width="8" height="6" rx="2" fill="#1C1C1C" opacity="0.8" transform="rotate(8 152 155)" />
      <circle cx="127" cy="148" r="4.5" fill="#1A1A1A" opacity="0.75" />
      <circle cx="172" cy="155" r="4" fill="#202020" opacity="0.72" />
      {/* Cream bits on crushed Oreo */}
      <circle cx="145" cy="132" r="2" fill="rgba(240,230,210,0.85)" />
      <circle cx="165" cy="139" r="1.8" fill="rgba(240,230,210,0.8)" />
      <circle cx="155" cy="157" r="1.6" fill="rgba(240,230,210,0.82)" />

      {/* ── Whole Oreo decoration on top of glaze ── */}
      <g transform="translate(150,142) rotate(-8)">
        {/* Oreo outer circle */}
        <circle r="19" fill="#1A1A1A" />
        {/* Embossed ring */}
        <circle r="17" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
        <circle r="13" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Cross emboss */}
        <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
        <line x1="0" y1="-12" x2="0" y2="12" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
        {/* 4 corner dots */}
        <circle cx="-8" cy="-8" r="1.8" fill="rgba(255,255,255,0.12)" />
        <circle cx="8" cy="-8" r="1.8" fill="rgba(255,255,255,0.12)" />
        <circle cx="-8" cy="8" r="1.8" fill="rgba(255,255,255,0.12)" />
        <circle cx="8" cy="8" r="1.8" fill="rgba(255,255,255,0.12)" />
        {/* Cream showing at edge — implies it's placed on glaze */}
        <circle r="5" fill="#2A2A2A" />
        {/* Oreo highlight */}
        <ellipse cx="-7" cy="-7" rx="6" ry="4" fill="rgba(255,255,255,0.1)" transform="rotate(-35 -7 -7)" />
      </g>

      {/* Salt flakes on cookie edge */}
      <rect x="200" y="148" width="7" height="2.5" rx="1.2" fill="rgba(255,255,255,0.7)" transform="rotate(20 200 148)" />
      <rect x="96" y="170" width="6" height="2" rx="1" fill="rgba(255,255,255,0.65)" transform="rotate(-15 96 170)" />
    </svg>
  );
}

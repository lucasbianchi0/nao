"use client";
export default function RedVelvetSVG() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="rv3Base" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E83030" />
          <stop offset="45%" stopColor="#B01818" />
          <stop offset="80%" stopColor="#7A0A0A" />
          <stop offset="100%" stopColor="#4E0505" />
        </radialGradient>
        <radialGradient id="rv3Edge" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="transparent" />
          <stop offset="100%" stopColor="#2A0404" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="rv3Highlight" cx="38%" cy="32%" r="55%">
          <stop offset="0%" stopColor="rgba(255,180,180,0.2)" />
          <stop offset="100%" stopColor="rgba(255,150,150,0)" />
        </radialGradient>
        {/* Frosting base gradient */}
        <radialGradient id="frostBase" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFEFA" />
          <stop offset="70%" stopColor="#FFF4E8" />
          <stop offset="100%" stopColor="#F0E4D0" />
        </radialGradient>
        {/* Individual petal gradient */}
        <radialGradient id="petalGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EDE0CC" />
        </radialGradient>
        <filter id="rv3Wobble" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="frostingShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(180,100,80,0.25)" />
        </filter>
      </defs>

      {/* Drop shadow */}
      <ellipse cx="152" cy="274" rx="108" ry="11" fill="rgba(70,5,5,0.2)" />

      {/* Cookie base */}
      <circle cx="150" cy="146" r="114" fill="url(#rv3Base)" filter="url(#rv3Wobble)" />
      <circle cx="150" cy="146" r="114" fill="url(#rv3Edge)" filter="url(#rv3Wobble)" />
      <circle cx="150" cy="146" r="114" fill="url(#rv3Highlight)" filter="url(#rv3Wobble)" />

      {/* Cookie surface cracks */}
      <path d="M118 92 Q130 105 120 122" stroke="rgba(200,40,40,0.45)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M178 185 Q165 170 178 158" stroke="rgba(200,40,40,0.38)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── Cream cheese frosting rosette ── */}
      {/* Outer petal ring — 8 petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const r = (angle * Math.PI) / 180;
        const cx = 150 + Math.cos(r) * 52;
        const cy = 146 + Math.sin(r) * 52;
        return (
          <ellipse
            key={`outer-${i}`}
            cx={cx}
            cy={cy}
            rx="22"
            ry="19"
            fill="url(#petalGrad)"
            filter="url(#frostingShadow)"
          />
        );
      })}

      {/* Mid petal ring — 8 petals, slightly inside and rotated */}
      {[22, 67, 112, 157, 202, 247, 292, 337].map((angle, i) => {
        const r = (angle * Math.PI) / 180;
        const cx = 150 + Math.cos(r) * 32;
        const cy = 146 + Math.sin(r) * 32;
        return (
          <ellipse
            key={`mid-${i}`}
            cx={cx}
            cy={cy}
            rx="19"
            ry="17"
            fill="url(#petalGrad)"
          />
        );
      })}

      {/* Center cap */}
      <circle cx="150" cy="146" r="20" fill="url(#frostBase)" />
      <circle cx="150" cy="146" r="14" fill="white" />
      <circle cx="150" cy="146" r="8" fill="#FFFDF8" />

      {/* Frosting global highlight */}
      <ellipse cx="136" cy="127" rx="24" ry="16" fill="rgba(255,255,255,0.45)" transform="rotate(-28 136 127)" />

      {/* Petal highlights — inner ring */}
      {[22, 112, 202, 292].map((angle, i) => {
        const r = (angle * Math.PI) / 180;
        const cx = 150 + Math.cos(r) * 32;
        const cy = 146 + Math.sin(r) * 32;
        return (
          <ellipse
            key={`hl-${i}`}
            cx={cx - 4}
            cy={cy - 3}
            rx="6"
            ry="4"
            fill="rgba(255,255,255,0.5)"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}

      {/* Red velvet crumbs on frosting */}
      {[
        { cx: 132, cy: 120, r: 3.5 },
        { cx: 168, cy: 118, r: 3 },
        { cx: 178, cy: 148, r: 3.5 },
        { cx: 168, cy: 172, r: 3 },
        { cx: 148, cy: 178, r: 3.5 },
        { cx: 128, cy: 170, r: 3 },
        { cx: 118, cy: 148, r: 3.5 },
        { cx: 130, cy: 126, r: 2.5 },
      ].map((c, i) => (
        <circle key={`crumb-${i}`} cx={c.cx} cy={c.cy} r={c.r} fill="#A01010" opacity={0.85} />
      ))}

      {/* Extra crumbs — smaller, on inner ring */}
      <circle cx="155" cy="134" r="2" fill="#C01818" opacity="0.7" />
      <circle cx="145" cy="158" r="2" fill="#B01414" opacity="0.7" />
      <circle cx="162" cy="158" r="1.8" fill="#A01010" opacity="0.65" />
    </svg>
  );
}

export type ShoppingItem = {
  name: string;
  amount: string;
  usedIn: string[];
  note?: string;
  icon: string;
};

export type ShoppingCategory = {
  id: string;
  label: string;
  icon: string;
  items: ShoppingItem[];
};

export const shoppingCategories: ShoppingCategory[] = [
  {
    id: "lacteos",
    label: "Lácteos y huevos",
    icon: "🧈",
    items: [
      {
        icon: "🧈",
        name: "Mantequilla sin sal",
        amount: "600 g",
        usedIn: ["Chocolate Chip", "Red Velvet", "Cookies & Cream"],
        note: "2 paquetes de 250g o 1 de 500g + extra",
      },
      {
        icon: "🧀",
        name: "Queso crema (Philadelphia)",
        amount: "115 g",
        usedIn: ["Red Velvet — frosting"],
        note: "Entero, no light — el light queda líquido",
      },
      {
        icon: "🥛",
        name: "Crema de leche",
        amount: "100 ml",
        usedIn: ["Red Velvet — frosting", "Cookies & Cream — glaseado"],
        note: "1 tetrapak chico",
      },
      {
        icon: "🥚",
        name: "Huevos",
        amount: "5 unidades",
        usedIn: ["Chocolate Chip (1 entero + 1 yema)", "Red Velvet (1)", "Cookies & Cream (2)"],
        note: "Temperatura ambiente para Red Velvet y Cookies & Cream",
      },
    ],
  },
  {
    id: "harinas",
    label: "Harinas y almidones",
    icon: "🌾",
    items: [
      {
        icon: "🌾",
        name: "Harina 0000 (común)",
        amount: "820 g",
        usedIn: [
          "Chocolate Chip (130g)",
          "Red Velvet (300g)",
          "Cookies & Cream (390g)",
        ],
        note: "Alcanza con 1 kg — te sobra",
      },
      {
        icon: "💪",
        name: "Harina de fuerza (000 / bread flour)",
        amount: "130 g",
        usedIn: ["Chocolate Chip"],
        note: "Buscar en dietéticas o supermercados — marca La Tradicional, 3 Claveles",
      },
      {
        icon: "🌽",
        name: "Maicena (fécula de maíz)",
        amount: "20 g",
        usedIn: ["Chocolate Chip (1 cdita)", "Red Velvet (1 cda)"],
        note: "Probablemente ya tenés en casa",
      },
      {
        icon: "🍫",
        name: "Cacao en polvo natural (sin alkali)",
        amount: "30 g",
        usedIn: ["Red Velvet"],
        note: "Debe ser natural, NO dutchado/alcalinizado — marca Hershey's Natural o similar",
      },
    ],
  },
  {
    id: "azucares",
    label: "Azúcares",
    icon: "🍯",
    items: [
      {
        icon: "🍯",
        name: "Azúcar morena",
        amount: "360 g",
        usedIn: [
          "Chocolate Chip (110g)",
          "Red Velvet (150g)",
          "Cookies & Cream (100g)",
        ],
        note: "1 paquete de 500g alcanza",
      },
      {
        icon: "🍚",
        name: "Azúcar blanca (granulada)",
        amount: "285 g",
        usedIn: [
          "Chocolate Chip (65g)",
          "Red Velvet (70g)",
          "Cookies & Cream (150g)",
        ],
        note: "Probablemente ya tenés en casa",
      },
      {
        icon: "☁️",
        name: "Azúcar impalpable (glas)",
        amount: "200 g",
        usedIn: ["Red Velvet — frosting"],
        note: "Tamizar antes de usar — evita grumos en el frosting",
      },
    ],
  },
  {
    id: "chocolates",
    label: "Chocolates y Oreos",
    icon: "🍫",
    items: [
      {
        icon: "🍫",
        name: "Chocolate 60–70% en barra",
        amount: "300 g",
        usedIn: ["Chocolate Chip"],
        note: "Barras Lindt 70%, Callebaut o similar — NO chips con estabilizantes",
      },
      {
        icon: "⬜",
        name: "Chocolate blanco de calidad",
        amount: "100 g",
        usedIn: ["Cookies & Cream — glaseado"],
        note: "Lindt, Callebaut o similar. Evitar cobertura saborizante",
      },
      {
        icon: "🍪",
        name: "Oreos (tamaño estándar)",
        amount: "2 paquetes",
        usedIn: [
          "Cookies & Cream (14 para masa + extra para decorar)",
        ],
        note: "Con un paquete alcanza; el segundo es para las mini Oreos de decoración",
      },
    ],
  },
  {
    id: "leudantes",
    label: "Leudantes y sal",
    icon: "🧪",
    items: [
      {
        icon: "🧪",
        name: "Bicarbonato de sodio",
        amount: "15 g",
        usedIn: ["Chocolate Chip (1 cdita)", "Red Velvet (½ cdita)", "Cookies & Cream (1 cdita)"],
        note: "Probablemente ya tenés en casa",
      },
      {
        icon: "🫧",
        name: "Polvo de hornear (Royal)",
        amount: "5 g",
        usedIn: ["Red Velvet (¼ cdita)"],
        note: "Probablemente ya tenés en casa",
      },
      {
        icon: "🧂",
        name: "Sal fina",
        amount: "10 g",
        usedIn: ["Todas las recetas"],
        note: "Probablemente ya tenés en casa",
      },
      {
        icon: "✨",
        name: "Sal en escamas (Maldon o similar)",
        amount: "1 cajita",
        usedIn: ["Chocolate Chip", "Cookies & Cream"],
        note: "El detalle más simple que más impacto da — no saltear",
      },
    ],
  },
  {
    id: "aromas",
    label: "Aromas y colorantes",
    icon: "🌿",
    items: [
      {
        icon: "🌿",
        name: "Extracto de vainilla puro",
        amount: "1 frasquito (30 ml)",
        usedIn: [
          "Red Velvet (1 cdita)",
          "Cookies & Cream (2 cditas)",
          "Red Velvet frosting (1 cdita)",
        ],
        note: "Puro, no esencia artificial — marca McCormick, Molinos o similar",
      },
      {
        icon: "🍶",
        name: "Vinagre blanco",
        amount: "5 ml (1 cdita)",
        usedIn: ["Red Velvet"],
        note: "Probablemente ya tenés en casa",
      },
      {
        icon: "🔴",
        name: "Colorante rojo en GEL",
        amount: "1 tubo",
        usedIn: ["Red Velvet (1–2 cdas)"],
        note: "GEL, no líquido — Americolor, Wilton, Ateco o similar. En casas de repostería",
      },
    ],
  },
  {
    id: "especiales",
    label: "Ingredientes especiales",
    icon: "⭐",
    items: [
      {
        icon: "🥥",
        name: "Shortening vegetal (Crisco o similar)",
        amount: "55 g",
        usedIn: ["Cookies & Cream"],
        note: "Opcional pero recomendado. Consigue en casas de repostería o dietéticas",
      },
      {
        icon: "🌰",
        name: "Nueces pecán o comunes",
        amount: "150 g",
        usedIn: ["Chocolate Chip (opcional)"],
        note: "Totalmente opcional — pero muy buenas",
      },
    ],
  },
];

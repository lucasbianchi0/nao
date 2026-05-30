export type Ingredient = {
  icon: string;
  amount: string;
  name: string;
  note?: string;
};

export type Step = {
  title: string;
  description: string;
  callout?: {
    type: "time" | "temp" | "warning" | "tip";
    icon: string;
    text: string;
  };
};

export type Tip = {
  icon: string;
  title: string;
  text: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Recipe = {
  id: string;
  slug: string;
  badge: string;
  title: string;
  titleItalic: string;
  description: string;
  yield: string;
  totalTime: string;
  coldTime: string;
  weight: string;
  theme: {
    badge: string;
    accent: string;
    accentLight: string;
    bg: string;
    stepBg: string;
    number: string;
    border: string;
    cardBorder: string;
  };
  ingredients: {
    main: Ingredient[];
    extra?: { label: string; items: Ingredient[] };
  };
  steps: Step[];
  tips: Tip[];
  faqs: FAQ[];
};

export const recipes: Recipe[] = [
  {
    id: "chocolate-chip",
    slug: "chocolate-chip",
    badge: "New York Style",
    title: "Chocolate",
    titleItalic: "Chip Cookie",
    description:
      "La queen de las cookies. Borde crujiente, centro suave y fondante, pepitas de chocolate de calidad que se derriten en cada mordida. Inspirada en la Levain Bakery de Nueva York.",
    yield: "5 galletas",
    totalTime: "30 min activos",
    coldTime: "24–72 hs frío",
    weight: "~170g c/u",
    theme: {
      badge: "bg-amber-900",
      accent: "text-amber-700",
      accentLight: "text-amber-600",
      bg: "bg-amber-50/60",
      stepBg: "bg-amber-900",
      number: "bg-amber-900",
      border: "border-amber-200",
      cardBorder: "border-l-amber-500",
    },
    ingredients: {
      main: [
        {
          icon: "🧈",
          amount: "85 g",
          name: "Mantequilla FRÍA",
          note: "en cubos, sin atemperar",
        },
        {
          icon: "🧈",
          amount: "85 g",
          name: "Brown butter",
          note: "dorada y enfriada 15 min",
        },
        {
          icon: "🍯",
          amount: "110 g",
          name: "Azúcar morena",
          note: "compactada",
        },
        { icon: "🍚", amount: "65 g", name: "Azúcar blanca" },
        { icon: "🥚", amount: "1 unidad", name: "Huevo entero", note: "frío de heladera" },
        { icon: "🥚", amount: "1 unidad", name: "Yema extra" },
        { icon: "🌾", amount: "130 g", name: "Harina 0000", note: "común" },
        {
          icon: "🌾",
          amount: "130 g",
          name: "Harina de fuerza",
          note: "000 o bread flour",
        },
        { icon: "🌽", amount: "1 cdita", name: "Maicena" },
        { icon: "🧪", amount: "1 cdita", name: "Bicarbonato de sodio" },
        { icon: "🧂", amount: "½ cdita", name: "Sal fina" },
        {
          icon: "✨",
          amount: "al gusto",
          name: "Sal en escamas",
          note: "Maldon — para encima",
        },
        {
          icon: "🍫",
          amount: "250 g",
          name: "Chocolate 60–70%",
          note: "barras Lindt/Callebaut picadas, NO chips",
        },
        {
          icon: "🍫",
          amount: "50 g",
          name: "Chocolate extra",
          note: "para presionar encima antes de hornear",
        },
        {
          icon: "🌰",
          amount: "150 g",
          name: "Nueces",
          note: "opcional, partidas gruesas",
        },
      ],
    },
    steps: [
      {
        title: "Preparar el brown butter",
        description:
          "Derretir 85 g de mantequilla en una cacerola pequeña a fuego medio-alto. Revolver constantemente con una cuchara de madera. Primero hará espuma, luego bajará, y después aparecerán puntitos marrones en el fondo con aroma a caramelo/nuez. Retirar del fuego y verter en un bowl. Dejar enfriar.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "7–9 minutos hasta color ámbar oscuro + 15 minutos de enfriado",
        },
      },
      {
        title: "Precalentar horno y bandeja",
        description:
          "Precalentar el horno a 200 °C con la bandeja de metal adentro. El secreto del borde crujiente: la bandeja caliente genera calor instantáneo en la base de la galleta al posarse sobre ella.",
        callout: {
          type: "temp",
          icon: "🌡️",
          text: "200 °C — horno fuerte, bandeja caliente adentro",
        },
      },
      {
        title: "Batir mantequillas con azúcares",
        description:
          "En un bowl grande, combinar la mantequilla fría en cubos + el brown butter ya frío + azúcar morena + azúcar blanca. Batir con batidora eléctrica a velocidad media-alta hasta obtener una mezcla cremosa, pálida y esponjosa. No saltear este paso.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "3–4 minutos de batido",
        },
      },
      {
        title: "Agregar huevo y yema",
        description:
          "Incorporar el huevo entero y la yema extra. Batir hasta integrar completamente. La yema extra suma riqueza y contribuye al centro suave y fondante característico de esta cookie.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "1 minuto más de batido",
        },
      },
      {
        title: "Incorporar los secos",
        description:
          "En otro bowl, mezclar harina 0000, harina de fuerza, maicena, bicarbonato y sal. Incorporar los secos a los húmedos en dos tandas. Mezclar SOLO hasta que desaparezca la harina. Ni un batido más — el exceso de mezcla desarrolla gluten y endurece la galleta.",
        callout: {
          type: "warning",
          icon: "⚠️",
          text: "No sobrebatir — parar cuando la harina desaparece, aunque haya grumos",
        },
      },
      {
        title: "Agregar chocolate (y nueces)",
        description:
          "Incorporar los 250 g de chocolate picado con espátula. Reservar los 50 g restantes para presionar encima antes de hornear. Agregar nueces si las usás.",
      },
      {
        title: "Reposo en heladera — el paso más importante",
        description:
          "Cubrir el bowl con film y llevar a la heladera. Este paso no es opcional: el frío solidifica la mantequilla (la galleta no se aplana al hornear), los azúcares se cristalizan y el sabor se profundiza notablemente. Una masa descansada 72 hs tiene un sabor completamente diferente a una recién hecha.",
        callout: {
          type: "time",
          icon: "❄️",
          text: "Mínimo 30 minutos · Ideal 24 horas · Premium 72 horas",
        },
      },
      {
        title: "Porcionar y atemperear",
        description:
          "Sacar la masa de la heladera y dejar 15 minutos a temperatura ambiente. Formar bolas de ~170 g (tamaño pelota de tenis grande). No aplanar — queremos que sean bien altas para el efecto thick.",
        callout: {
          type: "tip",
          icon: "💡",
          text: "Pesar cada bola en una balanza para que todas salgan iguales",
        },
      },
      {
        title: "Armar la bandeja y hornear",
        description:
          "Sacar la bandeja caliente del horno con guantes. Colocar 3–4 bolas separadas 8 cm entre sí. Presionar los trozos de chocolate reservados encima de cada bola. Agregar una pizca generosa de sal en escamas sobre cada una. Llevar al horno.",
        callout: {
          type: "temp",
          icon: "🌡️",
          text: "200 °C · 12–14 minutos · Bordes dorados, centro que parece crudo = perfecto",
        },
      },
      {
        title: "Reposo post-horno",
        description:
          "Al sacar del horno, agregar más sal en escamas. NO mover las galletas. Las galletas siguen cocinándose con el calor residual de la bandeja. Si las movés antes, se rompen y pierden la textura.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "15–20 minutos de reposo en la bandeja caliente antes de mover",
        },
      },
    ],
    tips: [
      {
        icon: "🍫",
        title: "Barras, no chips",
        text: "Los chocolate chips tienen estabilizantes que impiden que fundan bien. Usar barras Lindt 70% o Callebaut picadas a mano crea bolsones de chocolate fundido irresistibles.",
      },
      {
        icon: "🌾",
        title: "La doble harina",
        text: "La harina de fuerza (000 o bread flour) tiene más gluten y da una miga más masticable y densa, el sello del estilo NY. Sin ella la cookie es buena; con ella es bakery.",
      },
      {
        icon: "🧈",
        title: "Brown butter = nivel pro",
        text: "Dorar la mitad de la mantequilla añade notas de caramelo, nuez y toffee que elevan el sabor a otro nivel. Es el diferencial entre 'rica' y 'adictiva'.",
      },
      {
        icon: "❄️",
        title: "El frío es obligatorio",
        text: "24–72 horas de frío no es exagerado. La diferencia de sabor y textura es brutal. Podés preparar la masa un día antes y hornear al día siguiente.",
      },
      {
        icon: "✨",
        title: "Sal en escamas",
        text: "La sal Maldon encima antes y después de hornear corta el dulzor y potencia todos los sabores. Es el detalle más simple que más impacto tiene.",
      },
      {
        icon: "🔥",
        title: "Bandeja caliente",
        text: "Precalentar la bandeja en el horno da calor instantáneo a la base de la galleta, generando ese borde crujiente perfecto con centro tierno.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué usar mantequilla fría si la mayoría de recetas piden temperatura ambiente?",
        answer:
          "La mantequilla fría se derrite más lento durante el horneado, lo que permite que la galleta mantenga su altura y no se aplaste. Es la técnica de la Levain Bakery de Nueva York. La temperatura ambiente crearía una galleta más plana y crujiente.",
      },
      {
        question: "¿Qué pasa si no tengo harina de fuerza?",
        answer:
          "Podés usar 260 g de harina 0000 solamente. La textura será un poco menos masticable pero igual muy buena. La harina de fuerza (más proteína) es lo que le da esa miga densa y chewy del estilo NY.",
      },
      {
        question: "¿Cómo sé cuándo están listas si el centro parece crudo?",
        answer:
          "Los bordes deben estar dorados y ligeramente firmes. El centro DEBE verse húmedo y poco cocido — eso es correcto. Al enfriarse los 15-20 minutos en la bandeja, el calor residual termina la cocción y el centro se asienta en esa textura perfecta fondante.",
      },
      {
        question: "¿Puedo congelar la masa?",
        answer:
          "Sí, perfectamente. Formá las bolas, ponelas en una bandeja separadas y congelalas 1 hora. Después juntálas en una bolsa. Se hornean directo del freezer sumando 3-4 minutos de cocción. Masa congelada dura hasta 3 meses.",
      },
      {
        question: "¿Qué chocolate usar si no encuentro Callebaut o Lindt?",
        answer:
          "Cualquier barra de chocolate de calidad con 60-70% de cacao. Evitar los chocolate chips de marca blanca. El chocolate negro de cobertura para repostería (el que viene en tableta) funciona muy bien. El cacao mínimo es 55%.",
      },
      {
        question: "¿Cuánto duran las galletas ya horneadas?",
        answer:
          "A temperatura ambiente en contenedor hermético: 3-4 días. En heladera: hasta 1 semana. Podés calentarlas 15 segundos en microondas para devolverles la textura recién horneada.",
      },
    ],
  },
  {
    id: "red-velvet",
    slug: "red-velvet",
    badge: "Crumbl Style",
    title: "Red",
    titleItalic: "Velvet Cookie",
    description:
      "Una cookie roja aterciopelada, suave en el centro, con frosting de queso crema que se derrite en la boca. El sabor intenso a cacao, el toque sutil de vainilla y el contraste del frosting frío la hacen irresistible.",
    yield: "5 galletas",
    totalTime: "40 min activos",
    coldTime: "30–60 min frío",
    weight: "~120g c/u",
    theme: {
      badge: "bg-red-900",
      accent: "text-red-800",
      accentLight: "text-red-600",
      bg: "bg-red-50/40",
      stepBg: "bg-red-900",
      number: "bg-red-900",
      border: "border-red-200",
      cardBorder: "border-l-red-500",
    },
    ingredients: {
      main: [
        {
          icon: "🧈",
          amount: "60 g",
          name: "Mantequilla",
          note: "temperatura ambiente, sacar 1h antes",
        },
        {
          icon: "🍯",
          amount: "85 g",
          name: "Azúcar morena",
          note: "compactada",
        },
        { icon: "🍚", amount: "40 g", name: "Azúcar blanca" },
        {
          icon: "🥚",
          amount: "1 unidad",
          name: "Huevo",
          note: "temperatura ambiente",
        },
        { icon: "🌿", amount: "1 cdita", name: "Extracto de vainilla puro" },
        {
          icon: "🍶",
          amount: "1 cdita",
          name: "Vinagre blanco",
          note: "NO omitir — activa el color y el bicarbonato",
        },
        {
          icon: "🔴",
          amount: "1 cda",
          name: "Colorante rojo GEL",
          note: "NO líquido — el gel no altera la textura",
        },
        { icon: "🌾", amount: "170 g", name: "Harina 0000" },
        {
          icon: "🍫",
          amount: "15 g",
          name: "Cacao natural",
          note: "SIN alkali / SIN dutch process — marca Hershey's Natural o similar",
        },
        { icon: "🌽", amount: "1 cdita", name: "Maicena" },
        {
          icon: "🧪",
          amount: "¼ cdita",
          name: "Bicarbonato de sodio",
        },
        {
          icon: "🫧",
          amount: "¼ cdita",
          name: "Polvo de hornear",
        },
        { icon: "🧂", amount: "¼ cdita", name: "Sal fina" },
      ],
      extra: {
        label: "Frosting de queso crema",
        items: [
          {
            icon: "🧀",
            amount: "60 g",
            name: "Queso crema",
            note: "temperatura ambiente — MISMO temp que la mantequilla",
          },
          {
            icon: "🧈",
            amount: "35 g",
            name: "Mantequilla",
            note: "temperatura ambiente",
          },
          {
            icon: "🍚",
            amount: "110 g",
            name: "Azúcar impalpable",
            note: "tamizado para evitar grumos",
          },
          { icon: "🌿", amount: "½ cdita", name: "Extracto de vainilla" },
          {
            icon: "🥛",
            amount: "1 cda",
            name: "Crema de leche",
            note: "solo si el frosting queda muy espeso",
          },
          {
            icon: "🔴",
            amount: "al gusto",
            name: "Migas de galleta roja",
            note: "para decorar encima del frosting",
          },
        ],
      },
    },
    steps: [
      {
        title: "Atemperear los lácteos",
        description:
          "Sacar la mantequilla y el queso crema de la heladera. Dejarlos a temperatura ambiente. Este paso es crítico para el frosting — si están a distintas temperaturas, el frosting queda cortado y grumoso.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "60 minutos antes de empezar",
        },
      },
      {
        title: "Precalentar el horno",
        description:
          "Precalentar a 175 °C con la bandeja adentro para que se caliente. Preparar la bandeja con papel de horno.",
        callout: {
          type: "temp",
          icon: "🌡️",
          text: "175 °C — horno moderado, más gentil que el choco chip",
        },
      },
      {
        title: "Cremar mantequilla y azúcares",
        description:
          "Batir la mantequilla con el azúcar morena y el azúcar blanca a velocidad media-alta hasta que la mezcla sea esponjosa, pálida y haya aumentado su volumen. Este cremado incorpora aire que da estructura a la cookie.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "3–4 minutos de batido",
        },
      },
      {
        title: "Agregar húmedos",
        description:
          "Incorporar el huevo y batir 1 minuto. Luego agregar extracto de vainilla, vinagre blanco y colorante rojo en gel. El vinagre reacciona con el bicarbonato y el cacao natural para intensificar el color rojo sin necesitar tanto colorante. Batir hasta integrar.",
      },
      {
        title: "Incorporar los secos",
        description:
          "Tamizar en otro bowl la harina, el cacao natural, maicena, bicarbonato, polvo de hornear y sal. Incorporar a la mezcla húmeda en dos tandas. Mezclar solo hasta integrar — no sobrebatir.",
        callout: {
          type: "warning",
          icon: "⚠️",
          text: "Cacao natural (sin alkali) — el cacao dutched NO reacciona con el vinagre y pierde el color rojo",
        },
      },
      {
        title: "Porcionar y enfriar",
        description:
          "Formar bolas de ~120 g. Acomodarlas en la bandeja preparada y llevar a la heladera. El frío evita que la cookie se expanda demasiado y mantiene el perfil grueso estilo Crumbl.",
        callout: {
          type: "time",
          icon: "❄️",
          text: "30–60 minutos en heladera",
        },
      },
      {
        title: "Hornear",
        description:
          "Sacar las bolas de la heladera 10 minutos antes de hornear. Separar bien en la bandeja. Hornear hasta que los bordes estén firmes pero el centro siga suave y ligeramente húmedo.",
        callout: {
          type: "temp",
          icon: "🌡️",
          text: "175 °C · 9–11 minutos · No sobrecocinar — el centro suave es el objetivo",
        },
      },
      {
        title: "Enfriar completamente",
        description:
          "Reposar 15 minutos en la bandeja, luego pasar a una rejilla. Es fundamental que las galletas estén COMPLETAMENTE frías antes de poner el frosting, o este se derrite y queda líquido.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "1 hora a temperatura ambiente o 20 min en heladera",
        },
      },
      {
        title: "Preparar el frosting",
        description:
          "Batir el queso crema solo 30 segundos hasta suavizar. Agregar la mantequilla (misma temperatura). Batir 2 minutos. Incorporar el azúcar impalpable tamizado de a poco a velocidad baja. Agregar vainilla. Si queda muy espeso, agregar crema de leche de a 1 cucharada.",
        callout: {
          type: "warning",
          icon: "⚠️",
          text: "Queso crema y mantequilla DEBEN estar a la misma temperatura — diferencia = frosting grumoso",
        },
      },
      {
        title: "Enfriar el frosting y decorar",
        description:
          "Llevar el frosting a la heladera 10–15 minutos antes de pipetear. El frío lo firma y permite hacer swirls limpios. Pipetear un swirl sobre cada galleta fría. Espolvorear migas de galleta roja triturada encima antes de que el frosting seque.",
        callout: {
          type: "time",
          icon: "❄️",
          text: "10–15 minutos el frosting en heladera antes de pipetear",
        },
      },
    ],
    tips: [
      {
        icon: "🍫",
        title: "Cacao natural es clave",
        text: "El cacao natural (sin alkali) reacciona con el vinagre y el bicarbonato para dar el color rojo intenso. El cacao dutchado neutraliza esa reacción química y el rojo queda apagado.",
      },
      {
        icon: "🔴",
        title: "Colorante en gel, no líquido",
        text: "El colorante líquido altera la textura de la masa. El gel da color potente con 1-2 cucharadas sin cambiar la consistencia. Marcas: Americolor, Wilton gel, o cualquier colorante de repostería en gel.",
      },
      {
        icon: "🍶",
        title: "No omitir el vinagre",
        text: "El vinagre activa el bicarbonato (mejor levado), reacciona con el cacao natural (color rojo) y aporta un sutil contraste de acidez. Es imperceptible al gusto pero su ausencia se nota.",
      },
      {
        icon: "🌡️",
        title: "Temperatura del frosting",
        text: "Un frosting demasiado blando se derrama. Uno muy frío no pipetea. La solución: prepararlo, llevarlo al frío 10-15 min, pipetear. Si en el proceso se ablanda, volver al frío.",
      },
      {
        icon: "🧀",
        title: "Queso crema de calidad",
        text: "Usar Philadelphia o similar (queso crema entero, no 'reducido en grasa'). Los quesos descremados tienen más agua y el frosting queda líquido.",
      },
      {
        icon: "❄️",
        title: "Almacenamiento con frosting",
        text: "Una vez decoradas, conservar en heladera. Sacar 15-20 min antes de servir para que el frosting atempere y la cookie vuelva a estar suave.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto colorante rojo debo usar?",
        answer:
          "Con colorante en gel, 1–2 cucharadas dependiendo de la intensidad deseada. Empezar con 1 cda, mezclar bien y evaluar. El color se intensifica un poco durante el horneado. Evitar colorante líquido — necesitarías mucha cantidad y alteraría la textura de la masa.",
      },
      {
        question: "¿Por qué mi frosting quedó grumoso?",
        answer:
          "La causa más común es temperatura desigual entre el queso crema y la mantequilla. El más frío forma grumos al contacto con el más blando. Solución: sacar ambos juntos de la heladera 60 minutos antes. Si ya quedó grumoso, calentar el bowl 10 segundos con un paño caliente y batir de nuevo.",
      },
      {
        question: "¿Puedo hacer el frosting sin manga pastelera?",
        answer:
          "Sí. Podés usar una bolsa zip con la esquina cortada para hacer un swirl. O simplemente extender con una espátula pequeña en movimiento circular. El resultado visual es diferente pero el sabor es el mismo.",
      },
      {
        question: "¿La galleta tiene que saber a chocolate o a vainilla?",
        answer:
          "El perfil es intermedio: hay cacao pero en cantidad pequeña (30g), entonces el sabor es más como una galleta de vainilla-chocolate suave con ese característico toque terroso. El protagonismo lo toma el frosting de queso crema.",
      },
      {
        question: "¿Puedo hacerla sin colorante?",
        answer:
          "Sí, quedará marrón oscuro por el cacao. El sabor es idéntico, solo pierde la identidad visual de 'red velvet'. Si te molesta el colorante artificial, podés usar betabel/remolacha en polvo como colorante natural.",
      },
      {
        question: "¿Se puede congelar con el frosting puesto?",
        answer:
          "No se recomienda congelar con frosting — al descongelar, el frosting suda y queda aguado. Mejor congelar las galletas sin frosting y hacer el frosting fresco al momento de servir.",
      },
    ],
  },
  {
    id: "cookies-cream",
    slug: "cookies-cream",
    badge: "Crumbl Style",
    title: "Cookies &",
    titleItalic: "Cream",
    description:
      "Una cookie vainilla gruesa y suave con trozos de Oreo en la masa y un glaseado de chocolate blanco con el relleno cremoso de las propias Oreos. El truco: separar el relleno de la galletita para máximo impacto de sabor.",
    yield: "5 galletas",
    totalTime: "35 min activos",
    coldTime: "30 min frío",
    weight: "~130g c/u",
    theme: {
      badge: "bg-zinc-900",
      accent: "text-zinc-800",
      accentLight: "text-zinc-600",
      bg: "bg-zinc-50/60",
      stepBg: "bg-zinc-900",
      number: "bg-zinc-900",
      border: "border-zinc-200",
      cardBorder: "border-l-zinc-600",
    },
    ingredients: {
      main: [
        {
          icon: "🧈",
          amount: "80 g",
          name: "Mantequilla",
          note: "temperatura ambiente",
        },
        {
          icon: "🥥",
          amount: "25 g",
          name: "Shortening vegetal",
          note: "o reemplazar por 25g más de mantequilla fría",
        },
        { icon: "🍚", amount: "70 g", name: "Azúcar blanca" },
        { icon: "🍯", amount: "45 g", name: "Azúcar morena" },
        {
          icon: "🥚",
          amount: "1 unidad",
          name: "Huevo",
          note: "temperatura ambiente",
        },
        { icon: "🌿", amount: "1 cdita", name: "Extracto de vainilla puro" },
        { icon: "🌾", amount: "175 g", name: "Harina 0000" },
        { icon: "🧪", amount: "½ cdita", name: "Bicarbonato de sodio" },
        { icon: "🧂", amount: "¼ cdita", name: "Sal fina" },
        {
          icon: "🍪",
          amount: "7 unidades",
          name: "Oreos",
          note: "SEPARAR relleno de las galletitas",
        },
        {
          icon: "✨",
          amount: "al gusto",
          name: "Sal en escamas",
          note: "para encima antes de hornear",
        },
      ],
      extra: {
        label: "Glaseado Cookies & Cream",
        items: [
          {
            icon: "🍫",
            amount: "50 g",
            name: "Chocolate blanco",
            note: "calidad, no cobertura sabor",
          },
          {
            icon: "🥛",
            amount: "2 cdas",
            name: "Crema de leche",
            note: "para fundir el chocolate",
          },
          {
            icon: "🍪",
            amount: "el reservado",
            name: "Relleno de las 7 Oreos",
            note: "va dentro del glaseado",
          },
          {
            icon: "🍪",
            amount: "2–3 unidades",
            name: "Oreos molidas",
            note: "para espolvorear encima",
          },
          {
            icon: "🍪",
            amount: "opcional",
            name: "Mini Oreos",
            note: "para decorar al centro",
          },
        ],
      },
    },
    steps: [
      {
        title: "El gran truco: separar las Oreos",
        description:
          "Twist cada Oreo por la mitad. Juntar todo el relleno blanco en un bowl (va al glaseado). Las galletitas negras van en otro bowl para triturar y agregar a la masa. Este detalle es el secreto del sabor intenso: el relleno concentra todo el sabor Oreo en el glaseado.",
      },
      {
        title: "Triturar las galletitas",
        description:
          "Triturar las 14 galletitas negras en trozos medianos-grandes usando las manos o un mortero. Objetivo: trozos con textura, no polvo. Los trozos grandes crean manchas oscuras y sabor en cada mordida.",
      },
      {
        title: "Precalentar horno",
        description:
          "Precalentar a 175 °C con la bandeja adentro. Preparar bandeja con papel de horno.",
        callout: {
          type: "temp",
          icon: "🌡️",
          text: "175 °C",
        },
      },
      {
        title: "Cremar mantequilla + shortening + azúcares",
        description:
          "Batir la mantequilla + shortening + azúcar blanca + azúcar morena a velocidad media-alta. Este es el paso que más diferencia hace en la textura final: el cremar largo incorpora aire y el shortening estabiliza la estructura para que la cookie no se aplaste.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "4–5 MINUTOS — más tiempo de lo habitual, es lo que cambia la textura",
        },
      },
      {
        title: "Agregar huevos y vainilla",
        description:
          "Agregar los 2 huevos de a uno, batiendo 1 minuto entre cada uno. Agregar el extracto de vainilla. La vainilla es prominente en esta receta — es la base de sabor sobre la que contrasta la Oreo.",
      },
      {
        title: "Incorporar secos y trozos de Oreo",
        description:
          "Tamizar harina, bicarbonato y sal. Incorporar sin sobrebatir. Luego agregar los trozos de galletita Oreo con espátula. No agregar el relleno blanco aquí — ese es para el glaseado.",
        callout: {
          type: "warning",
          icon: "⚠️",
          text: "El relleno de Oreo va al GLASEADO, no a la masa",
        },
      },
      {
        title: "Porcionar y enfriar",
        description:
          "Formar bolas de ~130 g. Acomodar en bandeja con papel. Llevar a la heladera.",
        callout: {
          type: "time",
          icon: "❄️",
          text: "30 minutos mínimo en heladera",
        },
      },
      {
        title: "Hornear",
        description:
          "Sacar de la heladera 10 minutos antes. Colocar en bandeja caliente bien separadas. Hornear hasta que los bordes estén firmes y el centro siga suave.",
        callout: {
          type: "temp",
          icon: "🌡️",
          text: "175 °C · 9–11 minutos · Bordes firmes, centro suave = perfecto",
        },
      },
      {
        title: "Enfriar completamente",
        description:
          "Reposar 20 minutos en la bandeja, luego pasar a rejilla. Deben estar completamente frías antes de glasear o el chocolate blanco se corre.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "1 hora a temperatura ambiente o 25 min en heladera",
        },
      },
      {
        title: "Preparar el glaseado",
        description:
          "Derretir el chocolate blanco con la crema de leche a baño maría o en microondas en pulsos de 30 segundos revolviendo entre cada uno. Cuando esté fundido y liso, agregar el relleno de Oreo reservado y mezclar bien. Dejar enfriar 5–10 minutos hasta que fluya pero no sea líquido.",
        callout: {
          type: "tip",
          icon: "💡",
          text: "Consistencia ideal: que caiga de la cuchara en hilo, no que gotee como agua",
        },
      },
      {
        title: "Glasear y decorar",
        description:
          "Glasear cada galleta fría con el glaseado de chocolate blanco + Oreo. Antes de que seque, espolvorear Oreo molida. Colocar una mini Oreo en el centro. Dejar secar completamente antes de apilar o envolver.",
        callout: {
          type: "time",
          icon: "⏱",
          text: "30 minutos para que el glaseado seque completamente",
        },
      },
    ],
    tips: [
      {
        icon: "🍪",
        title: "El gran secreto: separar la Oreo",
        text: "El relleno blanco en el glaseado y las galletitas en la masa. Mezclado todo junto el sabor se diluye. Separado, el relleno concentra ese sabor inconfundible en la cobertura y las galletitas dan textura y mancha en la masa.",
      },
      {
        icon: "🥥",
        title: "El shortening marca la diferencia",
        text: "El shortening vegetal estabiliza la estructura de la cookie — no se aplana al hornear, la miga queda más tierna y la cookie mantiene su altura Crumbl. Sin shortening: usar más mantequilla fría como sustituto.",
      },
      {
        icon: "⏱",
        title: "4-5 minutos de cremado",
        text: "Más tiempo del habitual incorpora más aire en la mezcla. Esto cambia completamente la textura — más ligera, más esponjosa. No te detengas en los 2 minutos de costumbre.",
      },
      {
        icon: "🍫",
        title: "Chocolate blanco de calidad",
        text: "Usar chocolate blanco real (Callebaut, Lindt o similar). Los productos 'sabor a chocolate blanco' no funden bien y el glaseado queda granulado. El chocolate blanco bueno funde liso y brillante.",
      },
      {
        icon: "✨",
        title: "Sal en escamas también acá",
        text: "Una pizca de sal Maldon encima de la galleta antes de hornear corta la dulzura del chocolate blanco y equilibra el conjunto.",
      },
      {
        icon: "❄️",
        title: "Almacenar correctamente",
        text: "Con glaseado ya seco, guardar en contenedor hermético en capa simple (no apilar o el glaseado se pega). Temperatura ambiente: 3 días. Heladera: 5 días.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué separar el relleno de las galletitas Oreo?",
        answer:
          "El relleno blanco va al glaseado para que todo el sabor Oreo se concentre en la cobertura de la galleta. Las galletitas negras van a la masa para dar textura y manchas oscuras. Si mezclás todo junto, el sabor se diluye y perdés la intensidad característica de las Crumbl.",
      },
      {
        question: "¿Puedo omitir el shortening?",
        answer:
          "Sí. Usar 225 g de mantequilla en total (170+55) pero que la extra esté fría. La galleta quedará un poco más extendida. Para compensar, agregar 30 minutos más de frío antes de hornear y no sacar más de 10 minutos de la heladera antes de meter al horno.",
      },
      {
        question: "¿El glaseado se endurece o queda pegajoso?",
        answer:
          "Si usás chocolate blanco de calidad, el glaseado seca a un acabado semi-firme (no crujiente, no pegajoso). El relleno Oreo lo hace ligeramente más blando. Si quedó muy líquido, agregar más chocolate blanco fundido. Si quedó muy espeso, agregar crema de leche de a 1 cdita.",
      },
      {
        question: "¿Cuántas Oreos por galleta si las hago más chicas?",
        answer:
          "La receta rinde 10-12 galletas de 130g. Si las hacés más chicas (80g), rendís 18-20 galletas. Para esa cantidad, con 12-7 Oreos alcanza. La proporción no tiene que ser exacta — más Oreo es siempre bienvenida.",
      },
      {
        question: "¿Puedo usar otros sabores de Oreo?",
        answer:
          "Sí, y es una variación deliciosa. Oreo Golden (vainilla) da una versión toda crema blanca con más sabor vainilla. Oreo de chocolate doble da más intensidad chocolatosa. El proceso es exactamente el mismo.",
      },
      {
        question: "¿Se pueden congelar con el glaseado?",
        answer:
          "No es ideal. El chocolate blanco al descongelarse puede aparecer moteado (fat bloom). Mejor congelar las galletas sin glasear y hacer el glaseado fresco. Las galletas sin glasear se congelan perfectas hasta 3 meses.",
      },
    ],
  },
];

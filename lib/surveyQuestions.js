import surveyImage from "@/public/images/serveyimg.jpg";

const surveyQuestions = [
  {
    question: "Cual es tu estilo de cerveza preferido?",
    options: [
      { option: "Lager", value: "lager" },
      { option: "Pale", value: "pale" },
      { option: "Pilsner", value: "pilsner" },
      { option: "No se / otros", value: "otros" },
    ],
    img: surveyImage,
    name: "style",
  },
  {
    question: "Que tipo de textura prefieres en tus bebidas?",
    options: [
      { option: "Ligero y refrescante", value: "ligero" },
      { option: "Suave y balanceado", value: "medio" },
      { option: "Sabor fuerte y completo", value: "completo" },
      { option: "No se / otros", value: "otros" },
    ],
    img: surveyImage,
    name: "body",
  },
  {
    question: "Que aroma disfrutas mas en una comida/postre o bebida?",
    options: [
      { option: "Citrico (como limon o naranja)", value: "citrico" },
      { option: "Floral (como rosas o jazmin)", value: "floral" },
      { option: "frutal (como manzana o bayas)", value: "frutal" },
      { option: "Especiado (como canela o pimienta)", value: "especiado" },
    ],
    img: surveyImage,
    name: "aroma",
  },
  {
    question: "Que tanto soportas el nivel de amargor?",
    options: [
      { option: "Poco armargor", value: "20" },
      { option: "Medio armargor", value: "40" },
      { option: "Soporto muy bien el amargor", value: "60" },
      { option: "No se / depende", value: "otros" },
    ],
    img: surveyImage,
    name: "ibu",
  },
  {
    question: "Como te sientes al probar sabores nuevos?",
    options: [
      { option: "Emocionado por descubrir nuevos sabores", value: "3" },
      {
        option: "De vez en cuando me gustaria probar sabores nuevos",
        value: "2",
      },
      { option: "Prefiero sabores que ya estoy acostumbrado", value: "1" },
      { option: "Indiferente", value: "otros" },
    ],
    img: surveyImage,
    name: "frq",
  },
];

export { surveyQuestions };

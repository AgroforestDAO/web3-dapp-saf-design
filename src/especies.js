const especies = [
  {
    name: "CEBOLINHA",
    stratum: "EMERGENTE",
    occupied_space: "20%",
    growth_time: "ATÉ 45 DIAS",   
    highBiomassProducer: false
  },
  {
    name: "CROTALÁRIA",
    stratum: "EMERGENTE",
    occupied_space: "20%",
    growth_time: "ATÉ 60 DIAS",
    highBiomassProducer: false
       
  },
  {
    name: "MILHO",
    stratum: "EMERGENTE",
    occupied_space: "20%",
    growth_time: "ATÉ 90 DIAS",
    highBiomassProducer: false
  },
  {
    name: "MILHETO",
    stratum: "EMERGENTE",
    occupied_space: "20%",
    growth_time: "ATÉ 6 MESES",
    highBiomassProducer: false
  },
  {
    name: "AMARANTO",
    stratum: "EMERGENTE",
    occupied_space: "20%",
    growth_time: "ATÉ 9 MESES",
    highBiomassProducer: false
  },
  {
    name: "MAMONA",
    stratum: "EMERGENTE",
    occupied_space: "20%",
    growth_time: "+18 MESES",
    highBiomassProducer: false
  },
  {
    name: "COUVE FLOR",
    stratum: "ALTO",
    occupied_space: "40%",
    growth_time: "ATÉ 45 DIAS",
    highBiomassProducer: false
  },
  {
    name: "TOMATE",
    stratum: "ALTO",
    occupied_space: "40%",
    growth_time: "ATÉ 60 DIAS",
    highBiomassProducer: false,
  },
  {
    name: "MUCUNA",
    stratum: "ALTO",
    occupied_space: "40%",
    growth_time: "ATÉ 90 DIAS",
    highBiomassProducer: false,
  },
  {
    name: "MANDIOCA",
    stratum: "ALTO",
    occupied_space: "40%",
    growth_time: "ATÉ 6 MESES",
    highBiomassProducer: false,
  },
  {
    name: "VITEX",
    stratum: "ALTO",
    occupied_space: "40%",
    growth_time: "ATÉ 9 MESES",
    highBiomassProducer: false
  },
  {
    name: "PITAIA",
    stratum: "ALTO",
    occupied_space: "40%",
    growth_time: "+18 MESES",
    highBiomassProducer: false
  },
  {
    name: "ALFACE ROMANA",
    stratum: "MÉDIO",
    occupied_space: "60%",
    growth_time: "ATÉ 45 DIAS",
    highBiomassProducer: false
  },
  {
    name: "COUVE",
    stratum: "MÉDIO",
    occupied_space: "60%",
    growth_time: "ATÉ 60 DIAS",
    highBiomassProducer: false
  },
  {
    name: "CENOURA",
    stratum: "MÉDIO",
    occupied_space: "60%",
    growth_time: "ATÉ 90 DIAS",
    highBiomassProducer: false
  },
  {
    name: "BATATA DOCE",
    stratum: "BAIXO",
    occupied_space: "80%",
    growth_time: "ATÉ 6 MESES",
    highBiomassProducer: false
  },
  {
    name: "ALHO PORÓ",
    stratum: "MÉDIO",
    occupied_space: "60%",
    growth_time: "ATÉ 6 MESES",
    highBiomassProducer: false
  },
  {
    name: "BANANA MACÃ",
    stratum: "MÉDIO",
    occupied_space: "60%",
    growth_time: "ATÉ 9 MESES",
    highBiomassProducer: false
  },
  {
    name: "AMORA",
    stratum: "MÉDIO",
    occupied_space: "60%",
    growth_time: "+18 MESES",
    highBiomassProducer: false
  },
  {
    name: "AÇAÍ",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "6 E MAIS DE 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "ACEROLA",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "3 E 15 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "ARAÇÁ PIRANGA",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "10 E MAIS DE 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "BABUÇU",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "10 E 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "BANANA DA TERRA",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "1 E 3 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "BANANA NANICA",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "1,5 E 3 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "CAQUI",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "3 E 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "CEREJA DO RIO GRANDE",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "10 E MAIS DE 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "FIGO",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "2 E 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "GOIABA",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "3 E 30 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "GUARANÁ",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "6 E 15 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "INGÁ",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "3 E 15 ANOS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "JACA",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "7 E MAIS",
    highBiomassProducer: "FALSE"
  },
  {
    name: "JAMBO",
    stratum: "ALTO",
    occupied_space: "NÃO ESPECIFICADO",
    growth_time: "6 E MAIS DE 30 ANOS",
    highBiomassProducer: "FALSE"
  }
];

export default especies;

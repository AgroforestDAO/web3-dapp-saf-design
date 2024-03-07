const especies = [
  {
     name: "CEBOLINHA",
     stratum: "EMERGENTE",
     occupied_space: "20%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "CROTALÁRIA",
     stratum: "EMERGENTE",
     occupied_space: "20%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "MILHO",
     stratum: "EMERGENTE",
     occupied_space: "20%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "MILHETO",
     stratum: "EMERGENTE",
     occupied_space: "20%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "AMARANTO",
     stratum: "EMERGENTE",
     occupied_space: "20%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "MAMONA",
     stratum: "EMERGENTE",
     occupied_space: "20%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "COUVE FLOR",
     stratum: "ALTO",
     occupied_space: "40%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "TOMATE",
     stratum: "ALTO",
     occupied_space: "40%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "MUCUNA",
     stratum: "ALTO",
     occupied_space: "40%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "MANDIOCA",
     stratum: "ALTO",
     occupied_space: "40%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "VITEX",
     stratum: "ALTO",
     occupied_space: "40%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "PITAIA",
     stratum: "ALTO",
     occupied_space: "40%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "ALFACE ROMANA",
     stratum: "MÉDIO",
     occupied_space: "60%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "COUVE",
     stratum: "MÉDIO",
     occupied_space: "60%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "CENOURA",
     stratum: "MÉDIO",
     occupied_space: "60%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "BATATA DOCE",
     stratum: "BAIXO",
     occupied_space: "80%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "ALHO PORÓ",
     stratum: "MÉDIO",
     occupied_space: "60%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "BANANA MACÃ",
     stratum: "MÉDIO",
     occupied_space: "60%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "AMORA",
     stratum: "MÉDIO",
     occupied_space: "60%",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "AÇAÍ",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "CLÍMAX",
     highBiomassProducer: false
  },
  {
     name: "ACEROLA",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "PIONEIRAS",
     highBiomassProducer: false
  },
  {
     name: "ARAÇÁ PIRANGA",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "CLÍMAX",
     highBiomassProducer: false
  },
  {
     name: "BABUÇU",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "SECUNDÁRIAS",
     highBiomassProducer: false
  },
  {
     name: "BANANA DA TERRA",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "BANANA NANICA",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "PLACENTA I",
     highBiomassProducer: false
  },
  {
     name: "CAQUI",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "SECUNDÁRIAS",
     highBiomassProducer: false
  },
  {
     name: "CEREJA DO RIO GRANDE",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "CLÍMAX",
     highBiomassProducer: false
  },
  {
     name: "FIGO",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "SECUNDÁRIAS",
     highBiomassProducer: false
  },
  {
     name: "GOIABA",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "SECUNDÁRIAS",
     highBiomassProducer: false
  },
  {
     name: "GUARANÁ",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "PIONEIRAS",
     highBiomassProducer: false
  },
  {
     name: "INGÁ",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "PIONEIRAS",
     highBiomassProducer: false
  },
  {
     name: "JACA",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "CLÍMAX",
     highBiomassProducer: false
  },
  {
     name: "JAMBO",
     stratum: "ALTO",
     occupied_space: "NÃO ESPECIFICADO",
     succession: "CLÍMAX",
     highBiomassProducer: false
  },
  {
    name: "BANANA NANICA",
    stratum: "ALTO",
    occupied_space: "NÃO SE PODA",
    succession: "PIONEIRAS",
    highBiomassProducer: "FALSE"
 },
 {
    name: "BANANAS PRATA, PÃO",
    stratum: "ALTO",
    occupied_space: "NÃO SE PODA",
    succession: "SECUNDÁRIAS",
    highBiomassProducer: "FALSE"
 },
 {
    name: "MAÇÃ TROPICAL",
    stratum: "ALTO",
    occupied_space: "5M",
    succession: "SECUNDÁRIAS",
    highBiomassProducer: "FALSE"
 },
 {
    name: "CAJA MIRIN",
    stratum: "EMERGENTE",
    occupied_space: "7M",
    succession: "PIONEIRAS",
    highBiomassProducer: "FALSE"
 },
 {
    name: "SINAMOMO",
    stratum: "EMERGENTE",
    occupied_space: "7M",
    succession: "PIONEIRAS",
    highBiomassProducer: "FALSE"
 },
 {
    name: "EUCALIPTO",
    stratum: "EMERGENTE",
    occupied_space: "7M",
    succession: "PIONEIRAS",
    highBiomassProducer: "FALSE"
 },
 {
   name: "GLIRICIDIA OU JASMELÃO",
   stratum: "ALTO",
   occupied_space: "NÃO ESPECIFICADO",
   succession: "SECUNDÁRIAS",
   highBiomassProducer: false
 },
 {
   name: "MUTAMBA OU PATA DE VACA",
   stratum: "NÃO ESPECIFICADO",
   occupied_space: "NÃO ESPECIFICADO",
   succession: "NÃO ESPECIFICADO",
   highBiomassProducer: false
 },
 {
   name: "UVA DO JAPÃO (MADEIRA)",
   stratum: "ALTO",
   occupied_space: "NÃO ESPECIFICADO",
   succession: "SECUNDÁRIAS",
   highBiomassProducer: false
 },
 {
   name: "AROEIRA VERDEADEIRA",
   stratum: "ALTO",
   occupied_space: "NÃO ESPECIFICADO",
   succession: "CLÍMAX",
   highBiomassProducer: false
 } 
];

export default especies;

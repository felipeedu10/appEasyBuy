const express = require('express');
const app = express();
const port = 3000;

const products = [
  "Calça Jeans",
  "Camiseta Preta",
  "Vestido Floral",
  "Blusa Branca",
  "Calça Moletom",
  "Jaqueta de Couro",
  "Camisa Social Azul",
  "Saia Jeans",
  "Shorts Esportivos",
  "Bermuda Cargo",
  "Macacão de Linho",
  "Casaco de Lã",
  "Camisa Polo",
  "Camiseta Estampada",
  "Calça Legging",
  "Vestido de Festa",
  "Moletom Cinza",
  "Top de Ginástica",
  "Calça de Alfaiataria",
  "Blazer Preto",
  "Cardigan",
  "Sweater de Lã",
  "Saia Plissada",
  "Regata",
  "Camiseta Branca",
  "Shorts Jeans",
  "Calça Cargo",
  "Vestido Longo",
  "Casaco de Tricô",
  "Blusa de Frio",
  "Jaqueta Jeans",
  "Calça de Couro",
  "Colete Acolchoado",
  "Sobretudo",
  "Parka",
  "Kimono",
  "Poncho",
  "Bata",
  "Camisola",
  "Pijama",
  "Sunga",
  "Biquíni",
  "Maiô",
  "Calção de Praia",
  "Camisa de Futebol",
  "Regata de Corrida",
  "Blusa Cropped",
  "Vestido de Noiva",
  "Calça Pantacourt",
  "Macaquinho",
  "Blusa Ciganinha",
  "Camiseta Longline",
  "Suéter Oversized",
  "Blusa Gola Alta",
  "Calça Capri",
  "Saia Midi",
  "Vestido Tubinho",
  "Blusa de Seda",
  "Calça Jogger",
  "Camisa Xadrez",
  "Calça Social",
  "Camisa Listrada",
  "Blusa de Renda",
  "Vestido de Verão",
  "Jaqueta Corta-Vento",
  "Camisa Vintage",
  "Calça de Veludo",
  "Blusa com Estampa",
  "Camisa Slim Fit",
  "Calça Saruel",
  "Vestido Envelope",
  "Jaqueta Varsity",
  "Saia Evasê",
  "Calça de Treino",
  "Camiseta Raglan",
  "Camisa de Seda",
  "Blusa Decote V",
  "Shorts Cintura Alta",
  "Calça Cropped",
  "Jaqueta de Inverno",
  "Blusa Ombro a Ombro",
  "Camisa Tropical",
  "Shorts Cargo",
  "Macacão Jeans",
  "Blusa de Malha",
  "Camiseta Gola Redonda",
  "Calça Skinny",
  "Vestido Midi",
  "Jaqueta Militar",
  "Camiseta Básica",
  "Blusa Listrada",
  "Calça Flare",
  "Jaqueta de Camurça",
  "Calça Tática",
  "Camiseta Gola V",
  "Blusa com Capuz",
  "Calça Baggy",
  "Vestido de Praia",
  "Saia Longa",
  "Blusa Turtleneck",
  "Camisa com Bolso",
  "Calça Estampada",
  "Jaqueta Puffer",
  "Blusa Manga Bufante",
  "Camiseta Tie Dye",
  "Calça Sarja",
  "Vestido de Malha",
  "Blusa com Bordado",
  "Camisa Manga Curta",
  "Shorts com Cordão",
  "Calça Jogging",
  "Vestido com Babado",
  "Blusa Ombreira",
  "Camisa Estonada",
  "Shorts de Praia",
  "Calça Slouchy",
  "Jaqueta Bomber",
  "Blusa com Franjas",
  "Camiseta Oversized"
];

// Endpoint para buscar produtos por nome
app.get('/api/products', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.json(products);
  }

  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filteredProducts);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});

/**
 * DADOS DO CARDÁPIO E DA LOJA - CHAPA QUENTE
 *
 * Antes de publicar, confirme que você possui autorização para utilizar
 * os textos e as imagens cadastrados abaixo. Prefira imagens próprias
 * hospedadas em assets/img para evitar dependência de serviços de terceiros.
 */

const STORE_CONFIG = {
  name: "Chapa Quente",
  slogan: "Procure qualidade, não preço.",
  whatsapp: "5592994904803",
  whatsappDisplay: "(92) 99490-4803",
  pixKey: "(92) 99490-4803",
  pixName: "Ana Silva",
  pixNotice: "Pagamentos via PIX são confirmados após o envio do comprovante pelo WhatsApp.",
  cardDebitTax: 1.00,
  cardCreditTax: 2.00,
  minOrder: 10.00,
  defaultDeliveryFee: 5.00,
  deliveryTimeMin: 45,
  deliveryTimeMax: 70,
  isOpen: true,
  statusLabel: "Aberto Agora",
  rating: "4.9",
  city: "Manaus - AM",
  operatingHours: "Terça a Domingo das 18h às 02h"
};

const CATEGORIES = [
    {
        "id":  "cat-1",
        "name":  "Promoções",
        "emoji":  "🔥",
        "count":  15
    },
    {
        "id":  "cat-2",
        "name":  "Pastel Frito",
        "emoji":  "🥟",
        "count":  10
    },
    {
        "id":  "cat-3",
        "name":  "Petiscos",
        "emoji":  "🍢",
        "count":  1
    },
    {
        "id":  "cat-4",
        "name":  "Sanduíches Tradicionais",
        "emoji":  "🍔",
        "count":  24
    },
    {
        "id":  "cat-5",
        "name":  "Kikão \u0026 Dogs",
        "emoji":  "🌭",
        "count":  9
    },
    {
        "id":  "cat-6",
        "name":  "Batata Frita",
        "emoji":  "🍟",
        "count":  8
    },
    {
        "id":  "cat-7",
        "name":  "Pizzas Tradicionais",
        "emoji":  "🍕",
        "count":  15
    },
    {
        "id":  "cat-8",
        "name":  "Pizzas Especiais",
        "emoji":  "⭐",
        "count":  23
    },
    {
        "id":  "cat-9",
        "name":  "Pizzas Doces",
        "emoji":  "🍫",
        "count":  8
    },
    {
        "id":  "cat-10",
        "name":  "Top Mais Pedidos",
        "emoji":  "🏆",
        "count":  32
    },
    {
        "id":  "cat-11",
        "name":  "Combos Caixa",
        "emoji":  "📦",
        "count":  19
    },
    {
        "id":  "cat-12",
        "name":  "Refrigerantes",
        "emoji":  "🥤",
        "count":  4
    },
    {
        "id":  "cat-13",
        "name":  "Sucos Naturais",
        "emoji":  "🍹",
        "count":  11
    }
];

const PRODUCTS = [
    {
        "id":  1284478,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "PIZZA (G) CALABRESA PROMOÇÃO",
        "description":  "SOMENTE NO DINHEIRO OU PIX",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/155ee2837bfac20d69abab48877cdfcd.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  1709393,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "3 kikão E 3 X SALADA",
        "description":  "somente dinheiro ou pix !!!!!",
        "price":  42,
        "image":  "https://cdn-production.yooga.com.br/f22f0d6d98a24f735299fa64699aa082.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  2630419,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "3 x salada PROMOÇÃO",
        "description":  "",
        "price":  22,
        "image":  "https://cdn-production.yooga.com.br/8c8d9d70bed06ec8ce78dcaf135d676a.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  2668004,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "4 kikao PROMOÇÃO",
        "description":  "SOMENTE DINHEIRO OU PIX",
        "price":  20,
        "image":  "https://cdn-production.yooga.com.br/f22f0d6d98a24f735299fa64699aa082.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  3940849,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "2 X TUDO (PROMOÇÃO)",
        "description":  "+ 1 PET",
        "price":  36,
        "image":  "https://cdn-production.yooga.com.br/2ca3142bb1f0fc0c533e4ce57e4952c2.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  4489480,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "Super combo",
        "description":  "3 X salada ARTERSANAL +\n BATATA P + \nPET\n(Foto ilustrativa )",
        "price":  60,
        "image":  "https://cdn-production.yooga.com.br/54c60093aa463f96131f62b21640fc63.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  4489481,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "COMBO SOLITÁRIO",
        "description":  "1 X SALADA ARTESANAL\nBATATA P \n1 lata\n(Fotoilustrativa )",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/25bdb378981492f6939527ba0d8fa96f.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  5123341,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "1 pizza G",
        "description":  "1  pizza G sabores da promoção!!!!\nDinheiro ou pix !!!!\n\nCalabresa \nMilho \nPresunto",
        "price":  35,
        "image":  "https://cdn-production.yooga.com.br/b9e92ad3140e849bf2f04a217d05d6a4.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  7229751,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "10 kikao + pet ( PROMOÇÃO )",
        "description":  "",
        "price":  55,
        "image":  "https://cdn-production.yooga.com.br/907657a59f93cc38b046439c6f13728b.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  7229752,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "3 kikao+ pizza g calabresa ( PROMOÇÃO ) + pet",
        "description":  "",
        "price":  60,
        "image":  "https://cdn-production.yooga.com.br/b74eaafb5b6ae8d578e42242ee3d499a.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  7229753,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "3 pizza G calabresa ( PROMOÇÃO )+ 1 pet",
        "description":  "",
        "price":  105,
        "image":  "https://cdn-production.yooga.com.br/9fcb033d14d94f634dfe56b8037366c3.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  7235946,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "1 pizza G Calabresa + COMBO MALUCO (PROMOÇÃO)",
        "description":  "",
        "price":  100,
        "image":  "https://cdn-production.yooga.com.br/260db98fac1f2ef3ad7689be5f95f684.jpeg",
        "badge":  "PROMO"
    },
    {
        "id":  7317618,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "3 kikao",
        "description":  "",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/1ead079600a6a85d3196d1042f87cd8f.webp",
        "badge":  "PROMO"
    },
    {
        "id":  7424413,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "3 X Salada + 1 batata P + COCA 1LT",
        "description":  "",
        "price":  40,
        "image":  "",
        "badge":  "PROMO"
    },
    {
        "id":  8684664,
        "categoryId":  "cat-1",
        "categoryName":  "Promoções",
        "name":  "4 KIKÃO+ BATATA+ PET",
        "description":  "",
        "price":  32,
        "image":  "",
        "badge":  "PROMO"
    },
    {
        "id":  1753099,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "PASTEL Queijo",
        "description":  "",
        "price":  12,
        "image":  "https://cdn-production.yooga.com.br/41ebce3b4a126dbffd8bbb0677ea0e41.jpeg",
        "badge":  ""
    },
    {
        "id":  1753100,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "PASTEL Frango c/ Catupiry",
        "description":  "",
        "price":  14,
        "image":  "https://cdn-production.yooga.com.br/0b0705c0b11d2f288536b29c38943c7f.jpeg",
        "badge":  ""
    },
    {
        "id":  3051788,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel de Carne",
        "description":  "Carne moída, queijo coalho e ovo",
        "price":  13,
        "image":  "https://cdn-production.yooga.com.br/76143b69ce9b2172be26470d6eb41306.jpeg",
        "badge":  ""
    },
    {
        "id":  3051789,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel de banana C/queijo",
        "description":  "",
        "price":  13,
        "image":  "https://cdn-production.yooga.com.br/7c74fe200c16bc5dfe3fd7a750cede07.jpeg",
        "badge":  ""
    },
    {
        "id":  3359551,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel de Misto",
        "description":  "Queijo \nPresunto \nOvo\nCalabresa \nMolho especial",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/073447a88bfb36dd3ae1c99d076073fe.jpeg",
        "badge":  ""
    },
    {
        "id":  7077499,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel Romeu Julieta",
        "description":  "Queijo coalho e goiabada",
        "price":  14,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  7077500,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel Frango c/ salsicha",
        "description":  "Frango com salsicha",
        "price":  15,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  7077501,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel frango c/ queijo",
        "description":  "Frango com queijo coalho",
        "price":  14,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  7077502,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel frango c/ bacon",
        "description":  "Frango com bacon",
        "price":  16,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  7077503,
        "categoryId":  "cat-2",
        "categoryName":  "Pastel Frito",
        "name":  "Pastel frango c/ calabresa",
        "description":  "Frango com calabresa",
        "price":  15,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  4493374,
        "categoryId":  "cat-3",
        "categoryName":  "Petiscos",
        "name":  "TIRA GOSTO",
        "description":  "ISCA DE CARNE \nBATATA FRITA \nAZEITONA \nLIMAO \nSAL\nCALABRESA ACEBOLADA \nQUEIJO",
        "price":  50,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279689,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X-Salada",
        "description":  "Pão, queijo, presunto, ovo, came, alface e tomate",
        "price":  8,
        "image":  "https://cdn-production.yooga.com.br/4128320230114015249pEZJ7EMhN.jpeg",
        "badge":  ""
    },
    {
        "id":  4256334,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Salada Artesanal",
        "description":  "Carne Caseira , queijo , presunto, ovo , tomate , alface",
        "price":  17,
        "image":  "https://cdn-production.yooga.com.br/b5fabbd0362e6ded37f461b943e3244c.jpeg",
        "badge":  ""
    },
    {
        "id":  1279690,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Salada Especial",
        "description":  "Pão, queijo, presunto, ovo, 2 carnes, alface e tomate",
        "price":  10,
        "image":  "https://cdn-production.yooga.com.br/4128320230114015641BRHuVQDGk.png",
        "badge":  ""
    },
    {
        "id":  1279691,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Egg",
        "description":  "Pão, queijo, presunto, ovo, alface e tomate",
        "price":  6,
        "image":  "https://cdn-production.yooga.com.br/51ff046829f9dc8653737571c5799a54.jpeg",
        "badge":  ""
    },
    {
        "id":  1279694,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Bacon",
        "description":  "Pão, carne, queijo, presunto, bacon, alface e tomate",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/34d8d44bcdf02b953d2a203c322b4ca9.jpeg",
        "badge":  ""
    },
    {
        "id":  1279692,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Salsicha",
        "description":  "Pão, cane,ovo, queijo, presunto,  salsicha, alface e \ntomate",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/eb98b6897069a3afc4956e7dd53c222f.jpeg",
        "badge":  ""
    },
    {
        "id":  1279693,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Calabresa",
        "description":  "Pão, carne, queijo,ovo presunto,, calabresa, alface e \ntomate",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/09d09635b6450b223878bb1d762f4e5d.jpeg",
        "badge":  ""
    },
    {
        "id":  1279695,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Cheddar",
        "description":  "Pão, carne, queijo, presunto, bacon, cheddar, ovo, \nalface e tomate",
        "price":  16,
        "image":  "https://cdn-production.yooga.com.br/6c32fa3b4ffe2edc4420bab89da34625.jpeg",
        "badge":  ""
    },
    {
        "id":  1279696,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Banana",
        "description":  "Pão, carne , banana , queijo , presunto alface e \ntomate",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/844ee8c28575096544e903996564cbea.jpeg",
        "badge":  ""
    },
    {
        "id":  1279697,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Maionese",
        "description":  "Pão, queijo, presunto, carne, alface e tomate",
        "price":  6,
        "image":  "https://cdn-production.yooga.com.br/99648521010fde3b71c651bf2dd4a170.jpeg",
        "badge":  ""
    },
    {
        "id":  1279698,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Tudo",
        "description":  "Pão, queijo, presunto, carne, bacon, ovo, calabresa, \nsalsicha, alface e tomate",
        "price":  20,
        "image":  "https://cdn-production.yooga.com.br/2ca3142bb1f0fc0c533e4ce57e4952c2.jpeg",
        "badge":  ""
    },
    {
        "id":  2652870,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X tudo duplo",
        "description":  "2 carne \n2 queijo \n2 presunto \n2 ovo \n2 salsicha \n4 calabresa \nBacon duplo \nTomate \nAlface",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/2ca3142bb1f0fc0c533e4ce57e4952c2.jpeg",
        "badge":  ""
    },
    {
        "id":  1279699,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Carne",
        "description":  "Pão, queijo, presunto, carne(filé),ovo alface e \ntomate",
        "price":  20,
        "image":  "https://cdn-production.yooga.com.br/444eebe49a0922627e287a6270950ff3.jpeg",
        "badge":  ""
    },
    {
        "id":  1279700,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Frango",
        "description":  "Pão, queijo, presunto, frango,ovo alface e tomate",
        "price":  22,
        "image":  "https://cdn-production.yooga.com.br/d0304dc97c4194abc7b3405b1ef08d53.jpeg",
        "badge":  ""
    },
    {
        "id":  1279701,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "Americano",
        "description":  "3 pães de forma, queijo, presunto, ovo, alface e \ntomate",
        "price":  7,
        "image":  "https://cdn-production.yooga.com.br/70bd9759f7b2c8df79657435f1f43e8d.jpeg",
        "badge":  ""
    },
    {
        "id":  1279702,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X Supremo",
        "description":  "3 Pão de forma, queijo, presunto, carne, bacon, ovo, calabresa, \nsalsicha, alface e tomate",
        "price":  18,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279703,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "Misto Simples",
        "description":  "Pão de forma, queijo e presunto",
        "price":  5,
        "image":  "https://cdn-production.yooga.com.br/7ff31819ec4e1d5d19e39187eda130c3.jpeg",
        "badge":  ""
    },
    {
        "id":  1279704,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "Misto Duplo",
        "description":  "Pão de forma, 2 queijos e 2 presuntos",
        "price":  8,
        "image":  "https://cdn-production.yooga.com.br/912e457282e60330b75a6560f2fc183b.jpeg",
        "badge":  ""
    },
    {
        "id":  1279705,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "Misto com Banana",
        "description":  "Pão de forma, queijo, presunto e banana",
        "price":  9,
        "image":  "https://cdn-production.yooga.com.br/0268b4757e28cd39795f1ab4f89f558e.jpeg",
        "badge":  ""
    },
    {
        "id":  1408823,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "ACRESCIMO BACON",
        "description":  "INFORME O SEU SANDUICHE",
        "price":  5,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1408824,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "ACRESCIMO BANANA",
        "description":  "",
        "price":  5,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1426446,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "X batata",
        "description":  "Carne , ovo , queijo , presunto , batata palha , verdura",
        "price":  11,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1537269,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "Queijo Quente",
        "description":  "3 pao de forma e queijo",
        "price":  9,
        "image":  "https://cdn-production.yooga.com.br/8397cc008f829ac09614e609f8302756.jpeg",
        "badge":  ""
    },
    {
        "id":  1738654,
        "categoryId":  "cat-4",
        "categoryName":  "Sanduíches Tradicionais",
        "name":  "ACRESCIMO CHEDDER",
        "description":  "",
        "price":  4,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279723,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão Simples",
        "description":  "Pão, molho, maionese, ketchup, salsicha, queijo \nralado e batata palha.",
        "price":  6,
        "image":  "https://cdn-production.yooga.com.br/1de67f8a49468819922fc417ce0958c2.jpeg",
        "badge":  ""
    },
    {
        "id":  1279724,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão com Queijo",
        "description":  "Pão, molho, maionese, ketchup, salsicha, queijo \nralado, queijo mussarela e batata palha.",
        "price":  10,
        "image":  "https://cdn-production.yooga.com.br/68818a9f3fef2b9107b5dd9ed31d58e1.jpeg",
        "badge":  ""
    },
    {
        "id":  1279725,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão com Bacon",
        "description":  "Pão, molho, maionese, ketchup, salsicha, queijo \nralado, bacon e batata palha.",
        "price":  10,
        "image":  "https://cdn-production.yooga.com.br/6d1870fb55d1f05fd2ebabb3c415365c.jpeg",
        "badge":  ""
    },
    {
        "id":  1279726,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão com Calabresa",
        "description":  "Pão, molho, maionese, ketchup, salsicha, queijo \nralado, calabresa e batata palha.",
        "price":  10,
        "image":  "https://cdn-production.yooga.com.br/cc6319b1f88a841845e5dc2a886a6692.jpeg",
        "badge":  ""
    },
    {
        "id":  1279727,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão com Cheddar",
        "description":  "Pão, molho, maionese, ketchup, salsicha, queijo \nralado, queijo cheddar e batata palha.",
        "price":  9,
        "image":  "https://cdn-production.yooga.com.br/20b5d3c169ffa1b855c626b346c544fc.jpeg",
        "badge":  ""
    },
    {
        "id":  1279728,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão com 2 Salsichas",
        "description":  "Pão, molho, maionese, ketchup, 2 salsichas, queijo \nralado e batata palha.",
        "price":  8,
        "image":  "https://cdn-production.yooga.com.br/1de67f8a49468819922fc417ce0958c2.jpeg",
        "badge":  ""
    },
    {
        "id":  1279729,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão de Carne",
        "description":  "Pão, molho, maionese, ketchup,  queijo \nralado, carne e batata palha.",
        "price":  12,
        "image":  "https://cdn-production.yooga.com.br/1957229125f8667e87a416420c6deef8.jpeg",
        "badge":  ""
    },
    {
        "id":  1279730,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão com Queijo Coalho",
        "description":  "Pão, molho, maionese, ketchup, salsicha, queijo \nralado, queijo coalho e batata palha.",
        "price":  12,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1465873,
        "categoryId":  "cat-5",
        "categoryName":  "Kikão \u0026 Dogs",
        "name":  "Kikão c/ Queijo e bacon",
        "description":  "",
        "price":  12,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279732,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "Porção Batata Frita Média",
        "description":  "",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/6636907fa916ad83d4b0af480cd85791.jpeg",
        "badge":  ""
    },
    {
        "id":  1279733,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "Porção Batata Frita Grande",
        "description":  "",
        "price":  20,
        "image":  "https://cdn-production.yooga.com.br/6636907fa916ad83d4b0af480cd85791.jpeg",
        "badge":  ""
    },
    {
        "id":  1279734,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "Porção Batata Frita com Cheddar",
        "description":  "",
        "price":  25,
        "image":  "https://cdn-production.yooga.com.br/7b6ef6e75c28818584c414b091408602.jpeg",
        "badge":  ""
    },
    {
        "id":  1279735,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "Porção Batata Frita com Calabresa",
        "description":  "",
        "price":  25,
        "image":  "https://cdn-production.yooga.com.br/c94bb752a8fa5cce875ee297aa25b2c6.jpeg",
        "badge":  ""
    },
    {
        "id":  1279736,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "Porção Batata Frita com Queijo",
        "description":  "",
        "price":  26,
        "image":  "https://cdn-production.yooga.com.br/0451058225c024cf0490ee93361255f7.jpeg",
        "badge":  ""
    },
    {
        "id":  1279737,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "Porção Batata Frita com Calabresa e Cheddar",
        "description":  "",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/e5eae8045267331dc4991f13e7f6ae9c.jpeg",
        "badge":  ""
    },
    {
        "id":  1529741,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "BATATA BACON , CHEDDER, CALABRESA",
        "description":  "",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/e5eae8045267331dc4991f13e7f6ae9c.jpeg",
        "badge":  ""
    },
    {
        "id":  1529742,
        "categoryId":  "cat-6",
        "categoryName":  "Batata Frita",
        "name":  "BATATA C/ BACON , CHEDDER",
        "description":  "",
        "price":  27,
        "image":  "https://cdn-production.yooga.com.br/53b879ef6392c77a2cf7d0c25a15996d.jpeg",
        "badge":  ""
    },
    {
        "id":  2000982,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Mussarela (M)",
        "description":  "",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/77766b3cf6ed567c05fe174f3c543774.jpeg",
        "badge":  ""
    },
    {
        "id":  2000983,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Portuguesa (M)",
        "description":  "",
        "price":  35,
        "image":  "https://cdn-production.yooga.com.br/12133c8e8cc444561b80ff95bc986c1d.jpeg",
        "badge":  ""
    },
    {
        "id":  2000985,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Milho (M)",
        "description":  "",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/8463a07a170b166da35a440c683631a9.jpeg",
        "badge":  ""
    },
    {
        "id":  2000991,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Presunto (M)",
        "description":  "",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/3ebe2040debed082b280e657cfb4e16e.jpeg",
        "badge":  ""
    },
    {
        "id":  2000984,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Calabresa (M)",
        "description":  "",
        "price":  30,
        "image":  "https://cdn-production.yooga.com.br/155ee2837bfac20d69abab48877cdfcd.jpeg",
        "badge":  ""
    },
    {
        "id":  1279783,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza mussarela (G)",
        "description":  "",
        "price":  38,
        "image":  "https://cdn-production.yooga.com.br/77766b3cf6ed567c05fe174f3c543774.jpeg",
        "badge":  ""
    },
    {
        "id":  1279784,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza calabresa (G)",
        "description":  "",
        "price":  36,
        "image":  "https://cdn-production.yooga.com.br/155ee2837bfac20d69abab48877cdfcd.jpeg",
        "badge":  ""
    },
    {
        "id":  1279785,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Presunto (G)",
        "description":  "",
        "price":  36,
        "image":  "https://cdn-production.yooga.com.br/3ebe2040debed082b280e657cfb4e16e.jpeg",
        "badge":  ""
    },
    {
        "id":  1280710,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Portuguesa (G)",
        "description":  "",
        "price":  38,
        "image":  "https://cdn-production.yooga.com.br/12133c8e8cc444561b80ff95bc986c1d.jpeg",
        "badge":  ""
    },
    {
        "id":  1426447,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Calabresa (F)",
        "description":  "",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/155ee2837bfac20d69abab48877cdfcd.jpeg",
        "badge":  ""
    },
    {
        "id":  1426448,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Mussarela (F)",
        "description":  "",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/77766b3cf6ed567c05fe174f3c543774.jpeg",
        "badge":  ""
    },
    {
        "id":  1426449,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Portuguesa (F)",
        "description":  "",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/12133c8e8cc444561b80ff95bc986c1d.jpeg",
        "badge":  ""
    },
    {
        "id":  1426450,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Milho (F)",
        "description":  "",
        "price":  40,
        "image":  "https://cdn-production.yooga.com.br/8463a07a170b166da35a440c683631a9.jpeg",
        "badge":  ""
    },
    {
        "id":  2000990,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Presunto (F)",
        "description":  "",
        "price":  40,
        "image":  "https://cdn-production.yooga.com.br/3ebe2040debed082b280e657cfb4e16e.jpeg",
        "badge":  ""
    },
    {
        "id":  3903500,
        "categoryId":  "cat-7",
        "categoryName":  "Pizzas Tradicionais",
        "name":  "Pizza Napolitano (G)",
        "description":  "Mussarela, molho  , presunto, ovo, orégano , cebola , azeitona",
        "price":  38,
        "image":  "https://cdn-production.yooga.com.br/a9dcb4d4644f125af43b1593d047cc70.jpeg",
        "badge":  ""
    },
    {
        "id":  1426451,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Bacon (G)",
        "description":  "molho, mussarela , bacon , cebola , azeitona , oregano",
        "price":  50,
        "image":  "https://cdn-production.yooga.com.br/88ff9d2aa3755ae884d954947ecb43fa.jpeg",
        "badge":  ""
    },
    {
        "id":  1426452,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Chedder (G)",
        "description":  "molho, mussarela , chedder , cebola , azeitona , oregano",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/6712683ed9e493f205a70004879fa779.png",
        "badge":  ""
    },
    {
        "id":  1426453,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza 4 Queijo (G)",
        "description":  "molho, mussarela , catupiry, cheddar, pamesão , oregano",
        "price":  50,
        "image":  "https://cdn-production.yooga.com.br/0e3575069b8ab08214a5f2ebec982aa6.jpeg",
        "badge":  ""
    },
    {
        "id":  1426454,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Toscana (G)",
        "description":  "molho, mussarela , calabresa picada , bacon cebola , azeitona , oregano , pimentão",
        "price":  60,
        "image":  "https://cdn-production.yooga.com.br/88ff9d2aa3755ae884d954947ecb43fa.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1426456,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Frango Catupiry (G)",
        "description":  "molho , mussarela , frango , catupiry, azitona , cebola , oregano",
        "price":  50,
        "image":  "https://cdn-production.yooga.com.br/c1c8b061bd5c2c1733a3551ef2abea59.jpeg",
        "badge":  ""
    },
    {
        "id":  1426457,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Vegetariana (G)",
        "description":  "molho caseiro , mussarela , tomate , cebola , pimentão , milho , azeitona , oregano",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/24095ec68eb5a193653590fbe0ecbc24.jpeg",
        "badge":  ""
    },
    {
        "id":  1426458,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Bacon (F)",
        "description":  "molho, mussarela , bacon , cebola , azeitona , oregano",
        "price":  60,
        "image":  "https://cdn-production.yooga.com.br/88ff9d2aa3755ae884d954947ecb43fa.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1426459,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Chedder (F)",
        "description":  "molho, mussarela , chedder , cebola , azeitona , oregano",
        "price":  55,
        "image":  "https://cdn-production.yooga.com.br/6712683ed9e493f205a70004879fa779.png",
        "badge":  "POPULAR"
    },
    {
        "id":  1604695,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "pizza de file (G)",
        "description":  "molho , mussarela , carne , cebola , azeitona , oregano",
        "price":  55,
        "image":  "https://cdn-production.yooga.com.br/6242a65198754759147015b69b129b59.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1604702,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "PIZZA CARNE C/ FRITAS (G)",
        "description":  "molho , mussarela , carne , batata , cebola , oregano",
        "price":  65,
        "image":  "https://cdn-production.yooga.com.br/306d9b02fe400d3f20bac0beef1d8b8e.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1755249,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "pizza mix (F)",
        "description":  "4 SABORES\nDe sua escolha !!\n2 tradicionais \n2 especiais",
        "price":  70,
        "image":  "https://cdn-production.yooga.com.br/1efd1202f941bf450f3cc2b87d3c0ea0.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1771149,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "pizza frango c/ catupiry (F)",
        "description":  "massa . molho , mussarela .frango , catupiry , cebola. azeitona , pimentão , oregano",
        "price":  65,
        "image":  "https://cdn-production.yooga.com.br/c1c8b061bd5c2c1733a3551ef2abea59.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  2029646,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza File (F)",
        "description":  "molho, mussarela ,  isca de file , cebola , azeitona, pimentão",
        "price":  65,
        "image":  "https://cdn-production.yooga.com.br/6242a65198754759147015b69b129b59.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  2281023,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "pizza de Atum (G)",
        "description":  "molho , mussarela , molho de atum , Atum ,cebola , azeitona . oregano",
        "price":  50,
        "image":  "https://cdn-production.yooga.com.br/6cfddfb660ae2f717b0782ade996eb2c.jpeg",
        "badge":  ""
    },
    {
        "id":  2837187,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza de file c/ Catupiry (G)",
        "description":  "molho , mussarela , isca de file , catupiry, cebola. azeitona , oregano",
        "price":  65,
        "image":  "https://cdn-production.yooga.com.br/ce9463e154075c8fe6902675867dac59.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  2837188,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza file c/ catupiry (F)",
        "description":  "molho , mussarela , isca de file , catupiry, cebola , azeitona , oregano",
        "price":  70,
        "image":  "https://cdn-production.yooga.com.br/ce9463e154075c8fe6902675867dac59.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  3169935,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "pizza calabresa especial (G)",
        "description":  "Mussarela , calabresa, catupiry, orégano , cebola , azeitona",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/f2b88fc0ef17e99ca0cd3efd856d8b49.jpeg",
        "badge":  ""
    },
    {
        "id":  3975475,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "pizza de FRANGO CATUP (m)",
        "description":  "",
        "price":  40,
        "image":  "https://cdn-production.yooga.com.br/6242a65198754759147015b69b129b59.jpeg",
        "badge":  ""
    },
    {
        "id":  4256440,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Moda da casa (G)",
        "description":  "Mussarela,frango , calabresa , bacon , ovo , catupiry. Orégano , azeitona",
        "price":  60,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  4256441,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Brasileira (G)",
        "description":  "Mussarela , frango , carne , batata frita",
        "price":  60,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  4256448,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Camponesa (G)",
        "description":  "Mussarela , bacon , calabresa , ovo , catupiry, orégano, azeitona",
        "price":  60,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  5429141,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "PIZZA (F) 4 QUEIJO",
        "description":  "",
        "price":  60,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  7341926,
        "categoryId":  "cat-8",
        "categoryName":  "Pizzas Especiais",
        "name":  "Pizza Toscana (F)",
        "description":  "molho, mussarela , calabresa picada , bacon cebola , azeitona , oregano , pimentão",
        "price":  65,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  3242166,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Pizza chocolate c/Mm (G)",
        "description":  "",
        "price":  42,
        "image":  "https://cdn-production.yooga.com.br/edf92122378cd394427a77fec60aa7cf.jpeg",
        "badge":  ""
    },
    {
        "id":  3242167,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Pizza de banana (G)",
        "description":  "",
        "price":  47,
        "image":  "https://cdn-production.yooga.com.br/0b193b9d1e0bc00286adc2e013ad1700.jpeg",
        "badge":  ""
    },
    {
        "id":  3242168,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Brotinho de chocolate",
        "description":  "",
        "price":  12,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  3242169,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Brotinho de banana",
        "description":  "",
        "price":  14,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  4256426,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Romeu e Julieta (G)",
        "description":  "Mussarela e goiabada",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/146c4f1ed3893ac9ce0cd72a525c26bc.jpeg",
        "badge":  ""
    },
    {
        "id":  4256427,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Pizza de brigadeiro (G)",
        "description":  "",
        "price":  45,
        "image":  "https://cdn-production.yooga.com.br/42d85daa8036987d197da0d98dd620f1.jpeg",
        "badge":  ""
    },
    {
        "id":  4256428,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Pizza de banana c/chocolate (G)",
        "description":  "",
        "price":  47,
        "image":  "https://cdn-production.yooga.com.br/56d5efd38abd0cff8d42e2c5612d9caa.jpeg",
        "badge":  ""
    },
    {
        "id":  8500994,
        "categoryId":  "cat-9",
        "categoryName":  "Pizzas Doces",
        "name":  "Pizza G 2 amores",
        "description":  "Chocolate branco e chocolate ao leite",
        "price":  50,
        "image":  "https://cdn-production.yooga.com.br/44a5c93a083cde9a3522e942c0270460.jpeg",
        "badge":  ""
    },
    {
        "id":  1279799,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 1",
        "description":  "1 pizza grande + 3 x salada\n+ batata + pet",
        "price":  70,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279801,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 2",
        "description":  "1 pizza grande + pet",
        "price":  45,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279802,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 3",
        "description":  "1 Pizza familia + pet",
        "price":  55,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279803,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 4",
        "description":  "2 pizzas grandes + pet",
        "price":  70,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279804,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 5",
        "description":  "2 pizzas familia + pet",
        "price":  85,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279805,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 6",
        "description":  "3 x salada +1LT",
        "price":  27,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279806,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 7",
        "description":  "1 x banana + 1 x bacon + batata + pet 1l",
        "price":  35,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279807,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 8",
        "description":  "2 x salada + 2 kikão + batata + pet 1l",
        "price":  40,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279808,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 9",
        "description":  "3 x saladas + batata + jarra de suco 1l",
        "price":  45,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279809,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 10",
        "description":  "3 x tudo  + pet",
        "price":  60,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279830,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 11",
        "description":  "3 x salada + batata + pet",
        "price":  35,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279831,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 12",
        "description":  "3 kikão + pet",
        "price":  23,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279832,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 13",
        "description":  "5 x salada + pet",
        "price":  46,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279833,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 14",
        "description":  "6 kikão + pet",
        "price":  36,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279834,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 15",
        "description":  "2 x salada + 1 misto + 1 kikão + batata + pet",
        "price":  40,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279835,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 16",
        "description":  "3 kikão + 2 x salada + 1LT",
        "price":  38,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279836,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 17",
        "description":  "6 x salada + batata + pet",
        "price":  60,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279837,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 18",
        "description":  "2 x bacon + 1 kikão com queijo + batata + pet",
        "price":  45,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279838,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 19",
        "description":  "3 kikão com queijo + batata + pet",
        "price":  40,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279839,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 20",
        "description":  "2 x tudo + pet",
        "price":  35,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279840,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 21",
        "description":  "4 x salada + pet",
        "price":  38,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279841,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 22",
        "description":  "3 kikão c/ queijo + 3 x especial + batata + pet",
        "price":  63,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279842,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 23",
        "description":  "4 kikão + batata + pet",
        "price":  32,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279843,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 24",
        "description":  "2 pizza grandes + 3 x saladas + pet",
        "price":  78,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279844,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 25",
        "description":  "2 x banana + batata + pet",
        "price":  40,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279845,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 26",
        "description":  "2 pizzas grandes especiais + pet",
        "price":  105,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1279846,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 27",
        "description":  "3 x salada",
        "price":  22,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279847,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 28",
        "description":  "3 kikão",
        "price":  16,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1303105,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Combo Solteiro",
        "description":  "1x banana\nbatata p \ncoca lta",
        "price":  23,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1609695,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "COMBO DO BRASILLLLL",
        "description":  "1 X SALADA + BATATA+COCA LATA",
        "price":  25,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1893195,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "top 29",
        "description":  "5 x salada + batata",
        "price":  45,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  4256425,
        "categoryId":  "cat-10",
        "categoryName":  "Top Mais Pedidos",
        "name":  "Top 30",
        "description":  "3 misto + batata + pet",
        "price":  30,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279767,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Maluco",
        "description":  "4x salada + batata + calabresa + carne + 1,5 PET",
        "price":  68,
        "image":  "https://cdn-production.yooga.com.br/494279daf35c9144dcf9c488ddd55dc7.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279768,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Familia",
        "description":  "6 x salada\n+ 3 kikão\n+ batata + calabresa \n+ pet",
        "price":  76,
        "image":  "https://cdn-production.yooga.com.br/8f52cfaa18ddb6cb4a09132557ba5ff6.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279769,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Brocado",
        "description":  "5 x salada \n+ 2 kikão \n+ batata \n+ pet",
        "price":  70,
        "image":  "https://cdn-production.yooga.com.br/be73e3d00be6deddc61c224e01bbebfa.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279770,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Galera",
        "description":  "4 x salada \n+ 2 kikão \n+ batata \n+ pet",
        "price":  58,
        "image":  "https://cdn-production.yooga.com.br/21bc72722af280744cb2ea97f48d148e.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279771,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Ravena",
        "description":  "2 x salada \n+ 2 kikão \n+ batata \n+ pet",
        "price":  42,
        "image":  "https://cdn-production.yooga.com.br/981f52e2c301a773e98c1735adbab0e9.jpeg",
        "badge":  ""
    },
    {
        "id":  1279772,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Americano",
        "description":  "3 x especial\n+ 3 americano \n+ 2 kikão c/ queijo \n+ pet",
        "price":  70,
        "image":  "https://cdn-production.yooga.com.br/c5601b57fd716c53006045ed6cc68c07.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279773,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Completão",
        "description":  "5 x salada \n+ 4 kikão \n+ batata \n+ pet",
        "price":  78,
        "image":  "https://cdn-production.yooga.com.br/3c856732a5c00347fe50cfd81d0fdd82.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279774,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Faminto",
        "description":  "3 x salada\n+  3 kikão\n+ batata frita \n + calabresa \n+ pet",
        "price":  55,
        "image":  "https://cdn-production.yooga.com.br/3b06de7dab6b1f7e31c7f97d7513d456.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1279775,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Especial",
        "description":  "1 x bacon\n1 kikão especial \n+ batata\n+ pet 1,5",
        "price":  35,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279776,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Megacheddar",
        "description":  "5 x salada\n+ 1 kikão\n+ batata + calabresa \n+ cheddar\n+ pet",
        "price":  70,
        "image":  "https://cdn-production.yooga.com.br/84a15adc9413bb04e1ffe93edfeda672.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1388644,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo do BILLL",
        "description":  "5 X SALADA \n3 KIKÃO \n1 MISTO \nBATATA \n1 PET 1,5",
        "price":  70,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  1472181,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Larica",
        "description":  "3 x salada + 2 kikães + 2 mini pizza + batata + pet",
        "price":  65,
        "image":  "https://cdn-production.yooga.com.br/a92ced384ade0a71fa1f306d2e21e68a.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  1553974,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "BIG DELÍCIA",
        "description":  "2 X SALADA+3 MINI PASTEL + BATATA+ CALABRESA +PET",
        "price":  48,
        "image":  "https://cdn-production.yooga.com.br/ea6dabf3abb6eb6a6519d83a99d45f19.jpeg",
        "badge":  ""
    },
    {
        "id":  1993511,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Mata -Fome",
        "description":  "4 x salada+batata + pet",
        "price":  50,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1993512,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Mostro",
        "description":  "3 x salada+\n3 kikão +\ncalabresa+\nbatata+\ncarne + \n1 pet",
        "price":  65,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  2029683,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo CHAPA",
        "description":  "4 KIKÃO \n3 X SALADA \nBATATA + \n1 pet",
        "price":  60,
        "image":  "https://cdn-production.yooga.com.br/87d3202bd2397d47aed534bc4265a7ea.jpeg",
        "badge":  "POPULAR"
    },
    {
        "id":  2058687,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo Misto",
        "description":  "2 x salada \n2 kikao \n3 mini pastel +\n1 pet+\nbatata",
        "price":  50,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  2371086,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo da Leticya",
        "description":  "2 x salada +2 misto  +3 mini pastel + \nCalabresa + batata + pet",
        "price":  55,
        "image":  "",
        "badge":  "POPULAR"
    },
    {
        "id":  2490872,
        "categoryId":  "cat-11",
        "categoryName":  "Combos Caixa",
        "name":  "Combo são joão",
        "description":  "1 x especial+\n\n2 kikão c/ queijo\n+batata+pet",
        "price":  40,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279738,
        "categoryId":  "cat-12",
        "categoryName":  "Refrigerantes",
        "name":  "coca lata",
        "description":  "",
        "price":  6,
        "image":  "https://cdn-production.yooga.com.br/4128320220827161325uZNoYYVzz.jpeg",
        "badge":  ""
    },
    {
        "id":  1279739,
        "categoryId":  "cat-12",
        "categoryName":  "Refrigerantes",
        "name":  "Coca Cola 1L",
        "description":  "",
        "price":  10,
        "image":  "https://cdn-production.yooga.com.br/4128320220827161348xusSRagjL.png",
        "badge":  ""
    },
    {
        "id":  1279744,
        "categoryId":  "cat-12",
        "categoryName":  "Refrigerantes",
        "name":  "Guaraná 1,5L",
        "description":  "",
        "price":  7,
        "image":  "https://cdn-production.yooga.com.br/f27838c3eccff9504c8108ae8ccef226.jpeg",
        "badge":  ""
    },
    {
        "id":  1279742,
        "categoryId":  "cat-12",
        "categoryName":  "Refrigerantes",
        "name":  "Coca Cola 2L",
        "description":  "",
        "price":  15,
        "image":  "https://cdn-production.yooga.com.br/4128320220827161503LW5dguMnz.png",
        "badge":  ""
    },
    {
        "id":  1279749,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Cupuaçu 500 ml",
        "description":  "",
        "price":  10,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279750,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Cupuaçu 1L",
        "description":  "",
        "price":  20,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279751,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Acerola 500 ml",
        "description":  "",
        "price":  10,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279752,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Acerola 1L",
        "description":  "",
        "price":  20,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279755,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Goiaba 500 ml",
        "description":  "",
        "price":  10,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279756,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Goiaba 1L",
        "description":  "",
        "price":  20,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279757,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Maracujá 500 ml",
        "description":  "",
        "price":  12,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1279758,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Suco de Maracujá 1L",
        "description":  "",
        "price":  20,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  1339039,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "ADICIONAR LEITTE",
        "description":  "ADC LEITE NO SEU SUCO",
        "price":  4,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  3170013,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "Manga 500ml",
        "description":  "",
        "price":  10,
        "image":  "",
        "badge":  ""
    },
    {
        "id":  3685093,
        "categoryId":  "cat-13",
        "categoryName":  "Sucos Naturais",
        "name":  "manga 1lt",
        "description":  "",
        "price":  20,
        "image":  "",
        "badge":  ""
    }
];

const NEIGHBORHOODS = [
    {
        "id":  26883,
        "name":  "ALAMEDA 1",
        "fee":  6,
        "time":  65
    },
    {
        "id":  26266,
        "name":  "Armando mendes",
        "fee":  8,
        "time":  80
    },
    {
        "id":  32564,
        "name":  "av cosme ferreira",
        "fee":  7,
        "time":  76
    },
    {
        "id":  26276,
        "name":  "Castanheiro",
        "fee":  7,
        "time":  80
    },
    {
        "id":  34062,
        "name":  "Cidade de DEUS",
        "fee":  12,
        "time":  60
    },
    {
        "id":  26265,
        "name":  "Cidade leste",
        "fee":  6,
        "time":  80
    },
    {
        "id":  26259,
        "name":  "Colina do aleixo",
        "fee":  10,
        "time":  65
    },
    {
        "id":  27650,
        "name":  "conjunto castanheiro",
        "fee":  6,
        "time":  78
    },
    {
        "id":  26257,
        "name":  "Conjunto Lula",
        "fee":  10,
        "time":  70
    },
    {
        "id":  46706,
        "name":  "COROADO",
        "fee":  12,
        "time":  70
    },
    {
        "id":  26285,
        "name":  "Distrito 2",
        "fee":  10,
        "time":  65
    },
    {
        "id":  26269,
        "name":  "Gilberto mestrinho",
        "fee":  6,
        "time":  80
    },
    {
        "id":  26306,
        "name":  "Grande Circula",
        "fee":  7,
        "time":  65
    },
    {
        "id":  26258,
        "name":  "Grande vitoria",
        "fee":  6,
        "time":  80
    },
    {
        "id":  32158,
        "name":  "Grande Vitoria",
        "fee":  6,
        "time":  70
    },
    {
        "id":  37832,
        "name":  "Hospital joão lucio",
        "fee":  10,
        "time":  70
    },
    {
        "id":  27725,
        "name":  "JOAO PAULO",
        "fee":  12,
        "time":  67
    },
    {
        "id":  26267,
        "name":  "jorge teixeira 1",
        "fee":  10,
        "time":  65
    },
    {
        "id":  30403,
        "name":  "JORGE TEIXEIRA 4 EPTAPA",
        "fee":  12,
        "time":  70
    },
    {
        "id":  26268,
        "name":  "jorge teixeira et2",
        "fee":  10,
        "time":  65
    },
    {
        "id":  26356,
        "name":  "loteamento castanheiro",
        "fee":  6,
        "time":  65
    },
    {
        "id":  26260,
        "name":  "Mutirão",
        "fee":  12,
        "time":  70
    },
    {
        "id":  26262,
        "name":  "Nova vitoria",
        "fee":  7,
        "time":  69
    },
    {
        "id":  26355,
        "name":  "nova conquista",
        "fee":  6,
        "time":  65
    },
    {
        "id":  26354,
        "name":  "nova floresta",
        "fee":  7,
        "time":  75
    },
    {
        "id":  27059,
        "name":  "NOVA VITORIA",
        "fee":  6,
        "time":  70
    },
    {
        "id":  27060,
        "name":  "NOVA VITORIA 2",
        "fee":  7,
        "time":  70
    },
    {
        "id":  29847,
        "name":  "novo aleixo",
        "fee":  12,
        "time":  70
    },
    {
        "id":  26256,
        "name":  "Novo reino",
        "fee":  6,
        "time":  75
    },
    {
        "id":  26263,
        "name":  "Santa ines",
        "fee":  10,
        "time":  65
    },
    {
        "id":  57463,
        "name":  "são josé",
        "fee":  7,
        "time":  80
    },
    {
        "id":  26280,
        "name":  "São jose",
        "fee":  7,
        "time":  75
    },
    {
        "id":  32563,
        "name":  "SAO JOSE 1",
        "fee":  7,
        "time":  76
    },
    {
        "id":  57464,
        "name":  "são jose 1",
        "fee":  7,
        "time":  80
    },
    {
        "id":  32561,
        "name":  "SAO JOSE 2",
        "fee":  7,
        "time":  75
    },
    {
        "id":  37834,
        "name":  "sao jose 3",
        "fee":  7,
        "time":  70
    },
    {
        "id":  26305,
        "name":  "São jose dos campos",
        "fee":  8,
        "time":  65
    },
    {
        "id":  32450,
        "name":  "são jose dos operario",
        "fee":  7,
        "time":  65
    },
    {
        "id":  33627,
        "name":  "sao jose operario",
        "fee":  7,
        "time":  70
    },
    {
        "id":  26275,
        "name":  "São jose Operario (COROADO",
        "fee":  10,
        "time":  80
    },
    {
        "id":  32449,
        "name":  "SÃO JOSE OPERARIO( coroado )",
        "fee":  10,
        "time":  75
    },
    {
        "id":  26255,
        "name":  "Tancredo",
        "fee":  8,
        "time":  75
    },
    {
        "id":  28467,
        "name":  "TANCREDOO",
        "fee":  7,
        "time":  65
    },
    {
        "id":  26304,
        "name":  "zumbi",
        "fee":  7,
        "time":  65
    },
    {
        "id":  26264,
        "name":  "Zumbi 1",
        "fee":  7,
        "time":  80
    },
    {
        "id":  30448,
        "name":  "ZUMBI 2",
        "fee":  7,
        "time":  70
    },
    {
        "id":  30447,
        "name":  "ZUMBI 3",
        "fee":  7,
        "time":  70
    }
];

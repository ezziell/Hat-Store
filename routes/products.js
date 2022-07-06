const express = require('express');
const router = express.Router();
const ProductsService = require('../services/product.service');

const service = new ProductsService();

router.get('/', (req,res) => {
  res.json([
    {
      id: 1,
      name: 'Boina Francesa',
      description: 'Boina de estilo francés color negro con encaje',
      price: 230,
      image: 'https://i.pinimg.com/564x/23/af/54/23af5417f572b5806a47d1fa0a858e40.jpg'
    },
    {
      id: 2,
      name: 'Boina de Campo',
      description: 'Boina tradicional estio campestre color bordo',
      price: 145,
      image: 'https://www.capszoom.com/4360-large_default/ladies-wool-beret-burgundy-cj12ljz9cdh.jpg'
    },
    {
      id: 3,
      name: 'Sombrero vaquero',
      description: 'Sobrero vaquero color lila con corona y brillos',
      price: 432,
      image: 'https://i.pinimg.com/originals/9a/33/0c/9a330ceed3056f69e06205409e155a28.png'
    },
    {
      id: 4,
      name: 'Gorra Dirt',
      description: 'Gorra básica marrón con look despreocupado',
      price: 120,
      image: 'https://cdn.shopify.com/s/files/1/2445/6033/products/01_71451614-0bb3-4671-aef2-428fe49208bc_1000x.jpg?v=1559935347'
    },
    {
      id: 5,
      name: 'Gorro Osín',
      description: 'Gorro con orejas de oso y crecimiento de planta color amarilo',
      price: 348,
      image: 'https://prod-cdn-06.storenvy.com/product_photos/80212495/file_dc9305f6c0_original.jpg'
    },
    {
      id: 6,
      name: 'Gorro Olive Fisher',
      description: 'Gorro pescador color verde militar',
      price: 212,
      image: 'https://d2dk0b2obiw7ur.cloudfront.net/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/_/1/_1241698722_12.jpg'
    },
    {
      id: 7,
      name: 'Gorro Dark Bucket',
      description: 'Gorro pescador color negro con alfileres decorativos',
      price: 250,
      image: 'https://cdn.shopify.com/s/files/1/0630/6604/6712/products/product-image-1433495308_1024x1024@2x.jpg?v=1646389523'
    },
    {
      id: 8,
      name: 'Gorro Heart Fisher',
      description: 'Gorro pescador rosa con corazón rojo hecho a crochet',
      price: 262,
      image: 'https://i.pinimg.com/564x/76/04/5d/76045dba5081b924c58b28798bfa0165.jpg'
    },
    {
      id: 9,
      name: 'Gorro Classical Beauty',
      description: 'Gorro clásico azul marino con detalle marrón',
      price: 400,
      image: 'https://purepng.com/public/uploads/large/purepng.com-blue-hathatsstandard-sizenicefebricblue-14215263604595hajq.png'
    },
  ]);
});

router.get('/filter', (req, res) => {
  res.send('hello how are iu');
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'Boina de Campo',
      description: 'Boina tradicional estio campestre color negro',
      price: 145
    }
  );
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body)
  res.json(newProduct);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'partial update',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  });
});

module.exports = router;

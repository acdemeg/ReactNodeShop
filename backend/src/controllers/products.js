const debug = require('debug')('app:products');
const DB = require('../database');

const products = {
  getAll: async () => {
    return await DB.Product.findAll({ raw: true });
  },
  addProduct: async () => {
    await DB.Product.bulkCreate([
      {
        id: 1,
        nameProduct: 'Ryzen Threadripper 3970X',
        count: 1,
        description: 'BOX (no cooler)',
        price: 3000,
        pathImage: 'AMD Ryzen Threadripper 3970X sTRX4 BOX.jpg',
      },
      {
        id: 2,
        nameProduct: 'Sennheiser GSX 1200 Pro',
        count: 1,
        description: '1,5Hz – 48,0kHz ',
        price: 700,
        pathImage: 'audio_usilitel_dlya_pk_i_mas_sennheiser_gsx_1200_pro_507080__786433_1.jpg',
      },
      {
        id: 3,
        nameProduct: 'Thermaltake ToughpowerGrand',
        count: 1,
        description: '1250W Titanium ATX 12V V2.31',
        price: 250,
        pathImage:
          'blok_pitaniya_thermaltake_toughpowergrand_1250w_titanium_1250w_titanium_ps_tpg_1250dpcteu_t_rtl_743468_1.jpg',
      },
    ]);
  },
  getProductInfo: async id => {
    return 'getProductInfo';
  },
  updateProduct: async id => {
    return 'updateProduct';
  },
  deleteProduct: async id => {
    return 'deleteProduct';
  },
};

module.exports = products;

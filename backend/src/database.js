const Sequelize = require('sequelize');
const debug = require('debug')('app:db');

const sequelize = new Sequelize('lntsunday', 'postgres', 'lineate4@Sun', {
  dialect: 'postgres',
  host: '172.17.0.1',
  port: '5432',
  define: { timestamps: false },
});

sequelize
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch(err => {
    debug(`Unable to connect to the database:,  ${err}`);
  });

// /*  FOR CREATE TABLES    */
// sequelize
//   .sync()
//   .then(result => {
//     debug(result);
//   })
//   .catch(err => debug(err));

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nameProduct: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  pathImage: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  balance: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
});

const Order = sequelize.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

User.hasOne(Order, {
  foreignKey: {
    allowNull: false,
  },
});

const ProductsInOrder = sequelize.define('products_into_order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
Order.belongsToMany(Product, { through: ProductsInOrder });

const ProductsList = [
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
  {
    id: 4,
    nameProduct: 'Deepcool matrexx 55',
    count: 1,
    description: 'Midi-Tower',
    price: 555,
    pathImage: 'korpus_deepcool_matrexx_55_rgb_928202_1.jpeg',
  },
  {
    id: 5,
    nameProduct: 'ASUS PRIME X299',
    count: 1,
    description: 'EDITION 30 (LGA2066, ATX)',
    price: 350,
    pathImage: 'materinskaya_plata_asus_prime_x299_edition_30_lga2066_atx__1224770_1.jpg',
  },
  {
    id: 6,
    nameProduct: 'NVIDIA Quadro',
    count: 1,
    description: 'GP100 16Gb',
    price: 22250,
    pathImage: 'nvidia_quadro_gp100_16gb_1015275_1.jpg',
  },
  {
    id: 7,
    nameProduct: 'DDR4 G.SKILL',
    count: 1,
    description: 'TRIDENT Z RGB 32GB (4x8GB kit) 4266MHz CL17',
    price: 500,
    pathImage:
      'operativnaya_pamyat_ddr4_g.skill_trident_z_rgb_32gb_4x8gb_kit_4266mhz_cl17_1.45v_f4_4266c17q_32gtzr_1143926_1.jpg',
  },
  {
    id: 8,
    nameProduct: 'SD disk ADATA 2.5"',
    count: 1,
    description: 'SU650 120 Гб SATA III TLC 3D NAND (ASU650SS-120GT-R)',
    price: 84,
    pathImage:
      'ssd_disk_adata_2.5_su650_120_gb_sata_iii_tlc_3d_nand_asu650ss_120gt_r__925339_1.jpg',
  },
  {
    id: 9,
    nameProduct: 'PCCooler GI-H58U CORONA B',
    count: 1,
    description: 'TDP 240W Blue 1000-1800RPM',
    price: 85,
    pathImage:
      'kuler_dlya_protsessora_pccooler_gi_h58u_corona_b_tdp_240w_blue_1000_1800rpm_961130_1.jpg',
  },
  {
    id: 10,
    nameProduct: 'WESTERN DIGITAL 3.5',
    count: 1,
    description: '12Tb SATA III, 256Mb, 7200rpm',
    price: 333.33,
    pathImage:
      'western_digital_zhestkiy_disk_3.5_12.0tb_sata_iii_256_mb_7200_rpm_wd_red_pro_wd121kfbx_1206754_1.jpg',
  },
  {
    id: 11,
    nameProduct: 'Arctic MX-2',
    count: 1,
    description: 'Thermal Compound 65-gramm 2019 Edition ACTCP00006B',
    price: 7.5,
    pathImage:
      'termopasta_arctic_mx_2_thermal_compound_65_gramm_2019_edition_actcp00006b_1101104_1.jpg',
  },
  /**{
    id: 12,
    nameProduct: 'Phone',
    count: 1,
    description: 'onePlace 5g',
    price: 400,
    pathImage: 'phone.png',
  },

  {
    id: 13,
    nameProduct: 'Video card',
    count: 1,
    description: 'asus strix',
    price: 300,
    pathImage: 'Video card.png',
  },

  {
    id: 14,
    nameProduct: 'Clock',
    count: 1,
    description: 'digital alarm',
    price: 200,
    pathImage: 'clock.png',
  },

  {
    id: 15,
    nameProduct: 'Headphones',
    count: 1,
    description: 'sennheiser cx 300-ii',
    price: 50,
    pathImage: 'Headphones.png',
  },

  {
    id: 16,
    nameProduct: 'Laptop',
    count: 1,
    description: 'MSI MODERN 15',
    price: 1000,
    pathImage: 'Laptop.png',
  },

  {
    id: 17,
    nameProduct: 'Speakers',
    count: 1,
    description: 'Logitech MX Sound Premium',
    price: 280,
    pathImage: 'speaker.png',
  },

  {
    id: 18,
    nameProduct: 'Cpu',
    count: 1,
    description: 'intel i5 8600',
    price: 1500,
    pathImage: 'Cpu.png',
  },

  {
    id: 19,
    nameProduct: 'Ram',
    count: 1,
    description: 'g-skill',
    price: 400,
    pathImage: 'ram.png',
  },
  {
    id: 20,
    nameProduct: 'Hard-drive',
    count: 1,
    description: 'western digital',
    price: 250,
    pathImage: 'hard-drive.png',
  },
  {
    id: 21,
    nameProduct: 'Monitor',
    count: 1,
    description: 'Philiphs 246e 23.6 inch',
    price: 950,
    pathImage: 'monitor.png',
  },
  {
    id: 22,
    nameProduct: 'Keyboard',
    count: 1,
    description: 'Genius game series',
    price: 12,
    pathImage: 'keyboard.png',
  },
  {
    id: 23,
    nameProduct: 'Mouse',
    count: 1,
    description: 'azzor wireless',
    price: 80,
    pathImage: 'mouse.png',
  },
  {
    id: 24,
    nameProduct: 'Power-supply',
    count: 1,
    description: 'cougar 850w',
    price: 300,
    pathImage: 'power-supply.png',
  },
  {
    id: 25,
    nameProduct: 'Sd card',
    count: 1,
    description: 'samsung 128gb',
    price: 100,
    pathImage: 'Sd card.png',
  },**/
];

module.exports = {
  Product,
  Order,
  User,
  ProductsInOrder,
};

const debug = require('debug')('app:products');
const DB = require('../database');

const products = {
  getAll: async () => {
    return await DB.Product.findAll({ raw: true });
  },
  addProduct: async () => {
    await DB.Product.bulkCreate([
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

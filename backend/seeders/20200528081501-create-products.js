'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Products', [
      {
        nameProduct: 'Ryzen Threadripper 3970X',
        count: 10,
        description: 'BOX (no cooler)',
        price: 3000,
        pathImage: 'AMD Ryzen Threadripper 3970X sTRX4 BOX.jpg',
      },
      {
        nameProduct: 'Sennheiser GSX 1200 Pro',
        count: 5,
        description: '1,5Hz – 48,0kHz ',
        price: 700,
        pathImage: 'audio_usilitel_dlya_pk_i_mas_sennheiser_gsx_1200_pro_507080__786433_1.jpg',
      },
      {
        nameProduct: 'Thermaltake ToughpowerGrand',
        count: 25,
        description: '1250W Titanium ATX 12V V2.31',
        price: 250,
        pathImage:
          'blok_pitaniya_thermaltake_toughpowergrand_1250w_titanium_1250w_titanium_ps_tpg_1250dpcteu_t_rtl_743468_1.jpg',
      },
      {
        nameProduct: 'Deepcool matrexx 55',
        count: 55,
        description: 'Midi-Tower',
        price: 555,
        pathImage: 'korpus_deepcool_matrexx_55_rgb_928202_1.jpeg',
      },
      {
        nameProduct: 'ASUS PRIME X299',
        count: 15,
        description: 'EDITION 30 (LGA2066, ATX)',
        price: 350,
        pathImage: 'materinskaya_plata_asus_prime_x299_edition_30_lga2066_atx__1224770_1.jpg',
      },
      {
        nameProduct: 'NVIDIA Quadro',
        count: 5,
        description: 'GP100 16Gb',
        price: 12500,
        pathImage: 'nvidia_quadro_gp100_16gb_1015275_1.jpg',
      },
      {
        nameProduct: 'DDR4 G.SKILL',
        count: 11,
        description: 'TRIDENT Z RGB 32GB (4x8GB kit) 4266MHz CL17',
        price: 500,
        pathImage:
          'operativnaya_pamyat_ddr4_g.skill_trident_z_rgb_32gb_4x8gb_kit_4266mhz_cl17_1.45v_f4_4266c17q_32gtzr_1143926_1.jpg',
      },
      {
        nameProduct: 'SD disk ADATA 2.5"',
        count: 35,
        description: 'SU650 120 Гб SATA III TLC 3D NAND (ASU650SS-120GT-R)',
        price: 84,
        pathImage:
          'ssd_disk_adata_2.5_su650_120_gb_sata_iii_tlc_3d_nand_asu650ss_120gt_r__925339_1.jpg',
      },
      {
        nameProduct: 'PCCooler GI-H58U CORONA B',
        count: 45,
        description: 'TDP 240W Blue 1000-1800RPM',
        price: 85,
        pathImage:
          'kuler_dlya_protsessora_pccooler_gi_h58u_corona_b_tdp_240w_blue_1000_1800rpm_961130_1.jpg',
      },
      {

        nameProduct: 'WESTERN DIGITAL 3.5',
        count: 20,
        description: '12Tb SATA III, 256Mb, 7200rpm',
        price: 335,
        pathImage:
          'western_digital_zhestkiy_disk_3.5_12.0tb_sata_iii_256_mb_7200_rpm_wd_red_pro_wd121kfbx_1206754_1.jpg',
      },
      {

        nameProduct: 'Arctic MX-2',
        count: 100,
        description: 'Thermal Compound 65-gramm 2019 Edition ACTCP00006B',
        price: 8,
        pathImage:
          'termopasta_arctic_mx_2_thermal_compound_65_gramm_2019_edition_actcp00006b_1101104_1.jpg',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};

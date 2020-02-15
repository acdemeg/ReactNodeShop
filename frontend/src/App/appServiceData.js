import axios from 'axios';

let _apiBase = `http://localhost/api/`;

class AppServiceData {
  async getResourse(url) {
    const res = await axios.get(url);
    return res.data;
  }

  async getProducts() {
    let res = await this.getResourse(`${_apiBase}products`);
    return res;
  }

  async getOrdersOfUser(id = 1) {
    let res = await this.getResourse(`${_apiBase}users/${id}/orders`);
    return [
      {
          "id": 2,
          "userId": 1,
          "count": 1,
          "total": 100,
          "products": [
              {
                  "id": 1,
                  "nameProduct": "Ryzen Threadripper 3970X",
                  "count": 1,
                  "description": "BOX (no cooler)",
                  "price": 3000,
                  "pathImage": "AMD Ryzen Threadripper 3970X sTRX4 BOX.jpg",
                  "products_into_order": {
                      "id": 2,
                      "orderId": 2,
                      "productId": 1
                  }
              }
          ]
      },
      {
          "id": 3,
          "userId": 1,
          "count": 2,
          "total": 414,
          "products": [
              {
                  "id": 2,
                  "nameProduct": "Sennheiser GSX 1200 Pro",
                  "count": 1,
                  "description": "1,5Hz – 48,0kHz ",
                  "price": 700,
                  "pathImage": "audio_usilitel_dlya_pk_i_mas_sennheiser_gsx_1200_pro_507080__786433_1.jpg",
                  "products_into_order": {
                      "id": 3,
                      "orderId": 3,
                      "productId": 2
                  }
              },
              {
                  "id": 3,
                  "nameProduct": "Thermaltake ToughpowerGrand",
                  "count": 1,
                  "description": "1250W Titanium ATX 12V V2.31",
                  "price": 250,
                  "pathImage": "blok_pitaniya_thermaltake_toughpowergrand_1250w_titanium_1250w_titanium_ps_tpg_1250dpcteu_t_rtl_743468_1.jpg",
                  "products_into_order": {
                      "id": 4,
                      "orderId": 3,
                      "productId": 3
                  }
              }
          ]
      }
  ]
  }
}

const appServiceData = new AppServiceData();

export default appServiceData;

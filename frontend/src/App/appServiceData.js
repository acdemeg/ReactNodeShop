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
    return res;
  }
}

const appServiceData = new AppServiceData();

export default appServiceData;

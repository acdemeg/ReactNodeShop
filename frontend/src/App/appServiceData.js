import axios from 'axios';
import qs from 'qs';

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

  async getOrdersOfUser(id) {
    let res = await this.getResourse(`${_apiBase}users/${3}/orders`);
    return res;
  }

  async createOrder(order) {
    let res = await axios.post(`${_apiBase}orders`, qs.stringify(order));

    console.log('createOrder');
    console.log(res);
    //console.log(order.products)
  }
}

const appServiceData = new AppServiceData();

export default appServiceData;

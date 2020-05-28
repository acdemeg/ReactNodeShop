import axios from 'axios';
import qs from 'qs';

const _apiBase = 'http://localhost:4000/api/';

class AppServiceData {
  async getResourse(url) {
    const res = await axios.get(url);
    return res.data;
  }

  async getProducts() {
    const res = await this.getResourse(`${_apiBase}products`);
    return res;
  }

  async getOrdersOfUser(id) {
    if(!id)
      return [];

    const res = await this.getResourse(`${_apiBase}users/${id}/orders`);
    return res;
  }

  async getProfileOfUser(id) {
    if(!id)
      return {};

    const res = await this.getResourse(`${_apiBase}users/${id}`);
    return res;
  }

  async createOrder(order) {
    const res = await axios.post(`${_apiBase}orders`, qs.stringify(order));
  }

  async updateOrder(id, newStatus) {
    const res = await axios.patch(`${_apiBase}orders/${id}`, qs.stringify({ status: newStatus}));
  }

  async regUser(user) {
    const res = await axios.post(`${_apiBase}users/register`, qs.stringify(user));
    return (res.data === "succses registration") ? true : false;
  }

  async logInUser(user) {
    const res = await axios.post(`${_apiBase}users/login`, qs.stringify(user));
    return (res.status === 200) ? res.data.userId : false;
  }

}

const appServiceData = new AppServiceData();

export default appServiceData;

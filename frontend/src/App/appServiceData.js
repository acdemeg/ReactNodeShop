import axios from 'axios';
import qs from 'qs';

const _apiBase = 'http://localhost/api/';

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
    const res = await this.getResourse(`${_apiBase}users/${1}/orders`);
    return res;
  }

  async createOrder(order) {
    const res = await axios.post(`${_apiBase}orders`, qs.stringify(order));

    console.log('createOrder');
    console.log(res);
  }

  async updateOrder(id, newStatus) {
    const res = await axios.patch(`${_apiBase}orders/${id}`, qs.stringify({ status: newStatus}));

    console.log('updateOrder ' + id);
    console.log(newStatus);
    console.log(res);
  }

  async regUser(user) {
    const res = await axios.post(`${_apiBase}users/register`, qs.stringify(user));
    console.log('regUser');
    console.log(res);
    return (res.data === "succses registration") ? true : false;
  }

  async logInUser(user) {
    const res = await axios.post(`${_apiBase}users/login`, qs.stringify(user));
    console.log('logInUser');
    console.log(res);
    return (res.status === 200) ? res.data.userId : false;
  }

}

const appServiceData = new AppServiceData();

export default appServiceData;

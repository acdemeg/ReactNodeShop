import axios from 'axios';

class AppServiceData {

  async getResourse(url) {
    const res = await axios.get(url);
    return res.data;
  };

  async getProducts() {
    return await this.getResourse('http://localhost/api/products');
  };
};

const appServiceData = new AppServiceData();

export default appServiceData;


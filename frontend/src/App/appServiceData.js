import axios from 'axios';

class AppServiceData {

  async getResourse(url) {
    const res = await axios.get(url);
    return res.data;
  };

  async getProducts() {
    let res =  await this.getResourse('http://localhost/api/products');
    return res;
  };
};

const appServiceData = new AppServiceData();

export default appServiceData;



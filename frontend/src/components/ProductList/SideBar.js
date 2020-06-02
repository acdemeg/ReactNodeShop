import React from 'react';
import styles from './ProductList.scss';
import SearchInput from '../../components/inputs/SearchInput';

const SideBar = ({ goods, setGoodsList }) => {
  
  const sortGoodsList = e => {
    const title = e.target.value.toLowerCase();
    const filterGoods = goods.filter(v => v.nameProduct.toLowerCase().includes(title));
    return setGoodsList(filterGoods);
  };

  return (
  <div className={styles.sideBar}>
    <div className={styles.searchGoods}>
      <SearchInput sortList={sortGoodsList} placeholder="Enter product title"/>
    </div>
  </div>
  );
}

export default SideBar;
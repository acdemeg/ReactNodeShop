import React from 'react';
import styles from './ProductList.scss';
import SearchInput from '../../components/inputs/SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Category = ({ title, iconName }) => {
  return (
    <div>
      <FontAwesomeIcon
        className={`fas fa-${iconName} fa-2x`}
        css={{
          color: 'red',
          minWidth: '40px',
        }}
        icon={iconName}
      />
    &emsp;
      <b className={styles.titleCategory}>{title}</b>
    </div>
  );
}

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
    <div className={styles.categories}>
      <Category title="Мониторы" iconName="desktop" />
      <Category title="Ноутбуки" iconName="laptop" />
      <Category title="Платы" iconName="server" />
      <Category title="Охлаждение" iconName="fan" />
      <Category title="Блоки питания" iconName="plug" />
      <Category title="Процессоры" iconName="microchip" />
      <Category title="Корпуса" iconName="box" />
      <Category title="Оперативная память" iconName="memory" />
      <Category title="Программное обеспечение" iconName="shield-alt" />
      <Category title="Накопители" iconName="save" />
      <Category title="Аксессурары" iconName="satellite-dish" />
    </div>
  </div>
  );
}

export default SideBar;
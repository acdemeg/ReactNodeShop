import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCrow,
  faStar,
  faSpider,
  faDragon,
  faShoppingBasket,
  faUserShield,
  faTrashAlt,
  faPlusSquare,
  faMinusSquare,
  faUser,
  faPhoneSquareAlt,
  faEnvelope,
  faWallet,
  faDoorOpen,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

import compose from './compose';

// To make icons project-wide accessed
function initFontAwesomeLibrary() {
  library.add(
    faCrow,
    faStar,
    faSpider,
    faDragon,
    faShoppingBasket,
    faUserShield,
    faTrashAlt,
    faPlusSquare,
    faMinusSquare,
    faUser,
    faPhoneSquareAlt,
    faEnvelope,
    faWallet,
    faDoorOpen,
    faSearch,
  );
}

const getNewIdGenerator = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

export { compose, initFontAwesomeLibrary, getNewIdGenerator };

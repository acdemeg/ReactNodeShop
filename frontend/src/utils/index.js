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
  );
}

export { compose, initFontAwesomeLibrary };

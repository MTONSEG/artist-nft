import { isWebp, removeClass, addClass } from "./modules/functions.js";
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import * as select from './modules/select.js';
import * as burger from './modules/menu.js';
// import * as forms from './components/forms.js';
// import * as cartPopup from './modules/cartPopup.js';
// import * as quantity from './modules/quantity.js';

isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const nftSlider = new Swiper('.nft-slider', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	loop: true,
	breakpoints: {
		768: {
			spaceBetween: 30,
			centeredSlides: true,
		}
	}
})

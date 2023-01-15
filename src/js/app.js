import { isWebp, removeClass, addClass, toggleClass } from "./modules/functions.js";
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


//Show info in Item Gallery
const gallery = document.querySelector('.gallery');

if (gallery) {
	const galleryItems = gallery.querySelectorAll('.gallery__item'); 

	for (let item of galleryItems) {
		item.addEventListener('mouseenter', e => {
			addClass(item, '_active');
		});
		
		item.addEventListener('mouseleave', e => {
			removeClass(item, '_active');
		})

	}
}


//Enter color item
const listColors = document.querySelectorAll('.form__item-color');

if (listColors) {
	for (let color of listColors) {
		color.addEventListener('click', e => {
			let currentColor = e.target.closest('.form__item-color');

			for (let item of listColors) {
				removeClass(item, '_active');
			}
			
			addClass(currentColor, '_active');
		})
	}
}
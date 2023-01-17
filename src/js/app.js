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
});

const forumSlider = new Swiper('.forum-body__slider', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	breakpoints: {
		374: {
			spaceBetween: 14,
		},
		991: {
			spaceBetween: 30,
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

//payment form
const tabBtns = Array.from(document.querySelectorAll('.tab'));

if (tabBtns) {
	const tabContents = Array.from(document.querySelectorAll('.tab-content'));
	const tabIndicator = document.querySelector('.tab-indicator')

	
	let amountTabs = tabBtns.length;

	for (let btn of tabBtns) {
		btn.addEventListener('click', e => {
			let currentBtn = e.target.closest('.tab');
			let tabId = currentBtn.getAttribute('data-tab');
			let currentContent = document.querySelector(tabId);

			for (let btn of tabBtns) {
				removeClass(btn, '_active');
			}

			for (let content of tabContents) {
				removeClass(content, '_active');
			}

			addClass(currentBtn, '_active');
			addClass(currentContent, '_active');
			changeIndicator(currentBtn);

			e.preventDefault()
		})
	}


	function changeIndicator(btn) {
		let indexBtn = tabBtns.indexOf(btn);
		tabIndicator.style.left = `calc(${indexBtn} * 100% / ${amountTabs})`
	}
}

// wallet copy
const copyWallet = document.querySelector('.form__copy-icon');

if (copyWallet) {
	let wallet = document.querySelector('.cripto-wallet');

	copyWallet.addEventListener('click', e => {
		navigator.clipboard.writeText(wallet.innerHTML);

		if (navigator.clipboard.writeText(wallet.innerHTML)) {
			addClass(copyWallet.parentElement, '_active');

			setTimeout(() => {
				removeClass(copyWallet.parentElement, '_active');
			}, 1000)
		} else {
			console.log('Not copied');
		}
	})
}


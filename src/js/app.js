import { isWebp, removeClass, addClass, toggleClass} from "./modules/functions.js";
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import * as select from './modules/select.js';
import * as burger from './modules/menu.js';
// import * as forms from './components/forms.js';
// import * as cartPopup from './modules/cartPopup.js';
// import * as quantity from './modules/quantity.js';

isWebp();

//Swiper Sliders
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
});

const chatSlider = new Swiper('.chat-list__slider', {
	slidesPerView: 'auto',
	spaceBetween: 10,
});


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

const allTabs = document.querySelectorAll('.tabs');

if (allTabs) {
	for (let tabs of allTabs) {
		const tabBtns = Array.from(tabs.querySelectorAll('.tab'));
		const tabContents = Array.from(tabs.querySelectorAll('.tab-content'));
		const tabIndicator = tabs.querySelector('.tab-indicator');

		let amountTabs = tabBtns.length;

		for (let btn of tabBtns) {
			btn.addEventListener('click', e => {
				let currentBtn = e.target.closest('.tab');
				let tabId = currentBtn.getAttribute('data-tab');
				let currentContent = document.querySelector(tabId);

				for (let btn of tabBtns) {
					removeClass(btn, '_active');
				}

				addClass(currentBtn, '_active');

				if (currentContent) {
					for (let content of tabContents) {
						removeClass(content, '_active');
					}

					addClass(currentContent, '_active');
					changeIndicator(currentBtn);
				}
				e.preventDefault()
			})
		}

		function changeIndicator(btn) {
			let indexBtn = tabBtns.indexOf(btn);
			tabIndicator.style.left = `calc(${indexBtn} * 100% / ${amountTabs})`
		}
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

//active premium content
const unlockBtn = document.querySelector('.unlock-btn');

if (unlockBtn) {
	unlockBtn.addEventListener('click', e => {
		let premiumContent = document.querySelector('.product-content__unlocked');

		addClass(premiumContent, '_active');

		e.preventDefault();
	})
}

//Admin Header Menu

const headerMenuBtn = document.querySelector('.header-btn');
const headerMenu = document.querySelector('.user-menu__list');

if (headerMenuBtn) {
	headerMenuBtn.addEventListener('click', e => {
		toggleClass(headerMenu, '_active');
		toggleClass(document.body, '_lock');
	})
}

//Messanger

const aPanel = document.querySelector('.apanel');

if (aPanel) {
	const allLinks = Array.from(aPanel.querySelectorAll('.user-menu__link'));
	const allContent = Array.from(aPanel.querySelectorAll('.content-user__body'));

	for (let link of allLinks) {
		link.addEventListener('click', e => {
			let currentLink = e.target.closest('.user-menu__link');
			let linkId = currentLink.getAttribute('data-link');
			let currentContent = aPanel.querySelector(linkId);

			for (let item of allLinks) {
				removeClass(item, '_active');
			}

			for (let item of allContent) {
				removeClass(item, '_active');
			}

			addClass(currentLink, '_active');
			addClass(currentContent, '_active');
			removeClass(headerMenu, '_active');
			removeClass(document.body, '_active')

			e.preventDefault();
		})
	}
}

//Show Dialog
const itemDialog = document.querySelector('.item-dialog');
const dialog = document.querySelector('.dialog');

if (itemDialog) {
	let outLink = dialog.querySelector('.dialog__out-link');

	console.log(outLink);

	itemDialog.addEventListener('click', e => {
		addClass(dialog, '_active');
	})

	outLink.addEventListener('click', e => {
		removeClass(dialog, '_active');
	})
}


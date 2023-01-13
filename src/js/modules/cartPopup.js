import { toggleClass, removeClass } from "./functions.js";

//Попап корзины
const popupCartWrapper = document.querySelector('.middle-header__cart-wrap');

if (popupCartWrapper) {
	const cartPopup = popupCartWrapper.querySelector('.popup-cart');

	document.addEventListener('click', e => {
		let onClickPopup = e.target.closest('.popup-cart');
		let onClickCartBtn = e.target.closest('.middle-header__cart-link');
		let onClickClose = e.target.closest('.popup-cart__close');

		if (onClickCartBtn) {
			toggleClass(cartPopup, '_active');
			e.preventDefault();

		} else if (!onClickPopup || onClickClose) {
			removeClass(cartPopup, '_active');
		}
	})
}
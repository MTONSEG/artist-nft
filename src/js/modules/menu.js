import {addClass, removeClass} from "./functions.js";

const menuBody = document.querySelector('.menu');
const body = document.querySelector('body'); 

if (menuBody) {
	document.addEventListener('click', e => {
		let menuOpen = e.target.closest('.menu-btn');
		let menuClose = e.target.closest('.menu__close');
		let targetMenu = e.target.closest('.menu');

		if (menuOpen) {
			addClass(menuBody, '_active');
			addClass(body, '_lock');
		} else if (!targetMenu || menuClose) {
			removeClass(menuBody, '_active');
			removeClass(body, '_lock');
		}
	})
}


//
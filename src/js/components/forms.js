//Импортирую ф-ии добавления класса
import { addClass, removeClass, toggleClass } from "../modules/functions.js";

//Меню учетной записи
const profile = document.querySelector('.profile');

if (profile) {
	const itemLink = profile.querySelectorAll('.profile__link');
	const itemBody = profile.querySelectorAll('.profile__content');
	const body = document.querySelector('body');

	itemLink.forEach(elem => {
		elem.addEventListener('click', e => {
			let currentLink = e.target.closest('.profile__link');
			let linkId = currentLink.getAttribute('data-link');
			let currentBody = document.querySelector(linkId);
			let activeItem = currentLink.querySelector('_active');

			if (!activeItem) {
				for (let item of itemLink) {
					removeClass(item, '_active');
				}

				for (let item of itemBody) {
					removeClass(item, '_active');
				}
			}

			addClass(currentLink, '_active');
			addClass(currentBody, '_active');
			removeClass(body, '_lock');

			e.preventDefault();
		})
	})
}

// Аккордеон
const accordion = document.querySelector('.accordion');

if (accordion) {
	const headersAccordion = accordion.querySelectorAll('.accordion-header');
	const bodiesAccordion = accordion.querySelectorAll('.accordion-body')

	for (let elem of headersAccordion) {
		elem.addEventListener('click', () => {

			let content = elem.nextElementSibling;
			let icon = elem.querySelector('.item-order__icon');

			if (content.style.maxHeight) {
				for (let elem of bodiesAccordion) {
					elem.style.maxHeight = null;
					removeClass(icon, '_active');
				}
			} else {
				for (let elem of bodiesAccordion) {
					elem.style.maxHeight = null;
					removeClass(icon, '_active');

					content.style.maxHeight = content.scrollHeight + 'px';
					addClass(icon, '_active');
				}
			}
		})
	}
}

// Оформление заказа, аккордеон
const totalHeader = document.querySelector('.acc-header');
const totalBody = document.querySelector('.acc-body');

if (totalHeader) {
	totalHeader.addEventListener('click', e => {
		let scrollHeightBody = totalBody.scrollHeight;
		let iconArrow = totalHeader.querySelector('.acc-icon');

		if (totalBody.style.maxHeight) {
			totalBody.style.maxHeight = null;
			removeClass(iconArrow, '_active');
		} else {
			totalBody.style.maxHeight = scrollHeightBody + 'px';
			addClass(iconArrow, '_active');
		}
	})
}

//Открытие категорий на мобильном
const showCategories = document.querySelector('.show');

if (showCategories) {
	let showBtn = showCategories.querySelector('.show-btn');
	let showBody = showCategories.querySelector('.show-body');

	showBtn.addEventListener('click', e => {
		toggleClass(showBtn, '_active');
		toggleClass(showBody, '_active');
	})
	
	document.addEventListener('click', e => {
		let withinTarget = e.target.closest('.show');
		let linkTarget = e.target.closest('.show-link');

		if (!withinTarget || linkTarget) {
			removeClass(showBtn, '_active');
			removeClass(showBody, '_active');
		} 
	})

	let showLinks = showBody.querySelectorAll('.show-link');

	for (let link of showLinks) {
		link.addEventListener('click', e => {
			let currentItem = showBtn.querySelector('.show-current');
			currentItem.textContent = link.textContent;

			e.preventDefault();
		})
	}
}

//Открытие всех карточек в каталоге
const catalogAllList = document.querySelector('.all-item-list');

if (catalogAllList) {
	let catalogItems = Array.from(document.querySelectorAll('.all-item'));
	let displayWidth = window.innerWidth;

	if (displayWidth < 992) {
		for (let i = 6; i < catalogItems.length; i++) {
			catalogItems[i].style.display = 'none';
		}
	}

	document.addEventListener('click', e => {
		let viewBtn = e.target.closest('.view-btn');

		if (viewBtn) {
			for (let elem of catalogItems) {
				elem.style.display = 'block';
				viewBtn.style.display = 'none';
			}
		}
	})
}
import { isWebp, removeClass, addClass } from "./modules/functions.js";
import * as dynamicAdaptive from './modules/dynamicAdapt.js';
import * as select from './modules/select.js';
import * as burger from './modules/menu.js';
// import * as quiz from './components/quiz.js';
// import * as forms from './components/forms.js';
// import * as cartPopup from './modules/cartPopup.js';
// import * as quantity from './modules/quantity.js';

isWebp();

// //Input File
// const inputFile = document.querySelector('.form__input-file');

// if (inputFile) {
// 	const inputText = document.querySelector('.form__input-text');

// 	inputFile.addEventListener('change', e => {
// 		let files = inputFile.files;

// 		if (files.length > 1) {
// 			inputText.innerHTML = `${files.length} files`;
// 		} else {
// 			inputText.innerHTML = files[0].name;
// 		}
// 	})
// }

// //Изменение текста Autoship в карточке товара
// const autoshipText = document.querySelector('.body-product__autoship p');

// if (autoshipText) {
// 	let displayWidth = window.innerWidth;

// 	if (displayWidth < 992) {
// 		autoshipText.innerHTML = 'Deliver every';
// 	}
// }

// //Смена формы регистрации
// const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));

// if (tabBtns) {
// 	const tabContents = Array.from(document.querySelectorAll('.tab-content'));
// 	let amountBtns = tabBtns.length;

// 	for (let btn of tabBtns) {
// 		btn.addEventListener('click', e => {
// 			let currentBtn = e.target.closest('.tab-btn');
// 			let tabId = currentBtn.getAttribute('data-tab');
// 			let currentTab = document.querySelector(tabId);
// 			let activeTab = currentBtn.classList.contains('_active');

// 			if (!activeTab) {
// 				for (let btn of tabBtns) {
// 					removeClass(btn, '_active');
// 				}

// 				for (let content of tabContents) {
// 					removeClass(content, '_active');
// 				}
// 			}

// 			addClass(currentBtn, '_active');
// 			addClass(currentTab, '_active');
// 			changeIndicator(currentBtn);
// 			e.preventDefault();
// 		})
// 	}
// 	function changeIndicator(btn) {
// 		let indexBtn = tabBtns.indexOf(btn);
// 		document.querySelector('.tab-indicator').style.left = `calc(${indexBtn} * 100% / ${amountBtns})`;
// 	}
// }

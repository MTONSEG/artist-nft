import { removeClass, addClass } from '../modules/functions.js';

const listQuestions = {
	'quiz1': 'What’s your first name?',
	'quiz2': 'Do you smoke?',
	'quiz3': 'What is your eating habits?',
	'quiz4': 'How frequently do you consume alcoholic beverages?',
	'quiz5': 'How frequently do you have cold/flu symptoms?',
	'quiz6': 'Describe your stress level',
	'quiz7': 'Have you ever been diagnosted with high blood glucose level?',
	'quiz8': 'Tell us what you want to focus on',
	'quiz9': 'What’s your email address?'
}


const quiz = document.querySelector('.quiz');

if (quiz) {
	const quizBodies = Array.from(quiz.querySelectorAll('.quiz__body'));
	const quizQuestion = quiz.querySelector('.quiz__title');
	const numPage = document.querySelector('.num-pages__current');
	
	let firstBody = quizBodies[0];
	let firstQuestion = listQuestions.quiz1;
	let result = [];

	document.addEventListener('click', e => {
		let targetButton = e.target.closest('.btn-quiz');

		if (targetButton) {
			let currentBody = targetButton.closest('.quiz__body');
			let nextBodyIndex = quizBodies.indexOf(currentBody) + 1;
			let nextBody = quizBodies[nextBodyIndex];
			let answer = targetButton.textContent;
			let inputBody = currentBody.querySelector('.quiz__input');

			if (nextBodyIndex >= quizBodies.length) {
				alert('Успех! Результат уже на вашей почте');

				for (let quizBody of quizBodies) {
					removeClass(quizBody, '_active');
				}

				quizQuestion.textContent = listQuestions[quizBodies[0].getAttribute('id')];
				numPage.textContent = 1;
				addClass(firstBody, '_active');
				
				console.log(result);
			} else {
				for (let elem of quizBodies) {
					removeClass(elem, '_active');
				}

				quizQuestion.textContent = listQuestions[nextBody.getAttribute('id')];
				numPage.textContent = nextBodyIndex + 1;
				addClass(nextBody, '_active');
			}

			inputBody ? result.push(inputBody.value) : result.push(answer);

			e.preventDefault();
		}
	})

	addClass(firstBody, '_active');
	quizQuestion.textContent = firstQuestion;
}
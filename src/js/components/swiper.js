import Swiper, {Navigation, Pagination} from 'swiper';

const chooseSlider = new Swiper('.slider-choose', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1220: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		1440: {
			slidesPerView: 2,
			spaceBetween: 33
		} 
	}
})

const commentsSlider = new Swiper('.slider-comments', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	breakpoints: {
		1221: {
			slidesPerView: 3,
			spaceBetween: 32
		}
	}
})

const catalogSlider = new Swiper('.catalog-slider', {
	modules: [Navigation, Pagination],
	navigation: {
		prevEl: '.catalog-slider__btn_prew',
		nextEl: '.catalog-slider__btn_next'
	},
	pagination: {
		el: '.catalog-slider__pagination'
	},
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	breakpoints: {
		992: {
			spaceBetween: 25
		},
		1220: {
			spaceBetween: 50
		}
	}
})


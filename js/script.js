'use strict';

const viewBurger = () => {
	const headerBurger = document.querySelector('.header__burger');
	const popupMenu = document.querySelector('.popup-menu');
	const containerMenu = popupMenu.querySelector('.container-menu');
	const headerOpen = headerBurger.querySelector('.header__open');
	const headerClose = headerBurger.querySelector('.header__close');

	document.body.addEventListener('click', event => {
		if (event.target.closest('.header__open')) {
			headerOpen.style.display = 'none';
			headerClose.style.display = 'block';
			popupMenu.classList.remove('tablet');
			containerMenu.classList.remove('tablet');
		}
		if (event.target.closest('.header__close') ||
			event.target.closest('.wrapper') &&
			!event.target.closest('.popup-menu') &&
			!event.target.closest('.header__burger')) {
			popupMenu.classList.add('tablet');
			containerMenu.classList.add('tablet');
			headerOpen.style.display = 'block';
			headerClose.style.display = 'none';
		}
	});
};
viewBurger();

const changeBackground = () => {
	let array = [];
	const bannerLeft = document.querySelector('.banner__left'),
		chooseRight = document.querySelector('.choose__right'),
		mapLeft = document.querySelector('.map__left');

	array = [bannerLeft, chooseRight, mapLeft];
	array.forEach(item => {
		let img =  item.querySelector('img');
		item.style.background=`url(${img.src}) 0 0/cover no-repeat`;
		img.style.display = 'none';
	});
};
changeBackground();

const bannerSlider = () => {
	const sliderLeft = document.querySelector('.slider__left'),
		bannerLeft = document.querySelector('.banner__left'),
		bannerRight = document.querySelector('.banner__container');
		let count = 0;
	
	sliderLeft.addEventListener('click', () => {
		count ++;
		if (count === 1) {
			bannerLeft.classList.remove('active-slide');
			bannerRight.classList.add('active-slide');
			sliderLeft.innerHTML = '<span>></span>';
		} else if (count === 2) {
			count = 0;
			bannerLeft.classList.add('active-slide');
			bannerRight.classList.remove('active-slide');
			sliderLeft.innerHTML = '<span><</span>';
		}
	});
};
bannerSlider();

const productSlider = () => {
	const slides = document.querySelectorAll('.products__item'),
			next = document.querySelector('.products__slider > .slider__right'),
			left = document.querySelector('.products__slider > .slider__left');
		let show,
			count = 0;

	const render = () => {
		slides.forEach((item, i)=>{
			item.style.margin = 'auto';
			item.style.marginTop = 0;
			if (i >= count && i <= show - 1 + count ) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	};

	const checkResponse = () => { 
		const widthWindow = document.documentElement.clientWidth;
		if (widthWindow > 720) {
			show = 4;
		}
		if (widthWindow <= 720 && widthWindow > 550) {
			show = 3;
		}
		if (widthWindow <= 550 && widthWindow > 370) {
			show = 2;
		}
		if (widthWindow <= 370) {
			show = 1;
		}
		render();
	}; 
	checkResponse();
	
	next.addEventListener('click', () => {
		count ++;
		if (slides.length -1 < show - 1 + count) {
			count --;
		}
		render();
	});

	left.addEventListener('click', () => {
		count --;
		if (count < 0) {
			count = 0;
		}
		render();
	});
	window.addEventListener('resize', checkResponse);
};
productSlider();

const viewForm = () => {
	const popupForm = document.querySelector('.popup-form');
	document.body.addEventListener('click', event => {
		if (event.target.matches('.view_form')) {
			event.preventDefault();
			popupForm.style.display = 'block';
		}
		if (event.target.matches('.popup-form__close') ||
			event.target.closest('.wrapper') &&
			!event.target.closest('.popup-form') &&
			!event.target.matches('.view_form')) {
			popupForm.style.display = 'none';
		}
	});
};
viewForm();
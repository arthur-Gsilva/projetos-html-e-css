const menu = document.querySelector('.nav')

const openMenu = () => {
    menu.style.top = '0'
}

const closeMenu = () => {
    menu.style.top = '-250px'
}

document.querySelector('.menu-opener').addEventListener('click', openMenu)
document.querySelector('.menu-close').addEventListener('click', closeMenu)


// SLIDE EVENTS

const slidewidth = document.querySelector(".slideShow-feedback").offsetWidth;
let slideItem = 0

const nextSlide = () => {
	
	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.querySelector(".feedbacks-area").style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

const backSlide = () => {
	
	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem = slideItem - 1;
	}

	document.querySelector(".feedbacks-area").style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

document.querySelector('.right-arrow').addEventListener('click', nextSlide)
document.querySelector('.left-arrow').addEventListener('click', backSlide)
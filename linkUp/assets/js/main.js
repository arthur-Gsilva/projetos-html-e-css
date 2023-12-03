const menu = document.querySelector('.nav')

const openMenu = () => {
    menu.style.top = '0'
}

const closeMenu = () => {
    menu.style.top = '-250px'
}

document.querySelector('.menu-opener').addEventListener('click', openMenu)
document.querySelector('.menu-close').addEventListener('click', closeMenu)

const links = document.querySelectorAll('.nav-item a')
links.forEach(link => link.addEventListener('click', closeMenu))


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


// BACKGROUND HEADER


window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')

    if(window.scrollY >= 30){
        header.classList.add('background-header')
    } else{
        header.classList.remove('background-header')
    }
})


// SCROLL ACTIVE

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 58
        const sectionId = section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// MENU TOGGLE
const openMenu = () => {
    let menu = document.querySelector('.nav-menu')

    menu.classList.add('menu-opened')
}

const closeMenu = () => {
    let menu = document.querySelector('.nav-menu')

    menu.classList.remove('menu-opened')
}

const links = document.querySelectorAll('.nav-link')
links.forEach(link => link.addEventListener('click', closeMenu))

document.querySelector('.menu-opener').addEventListener('click', openMenu)
document.querySelector('.nav-close').addEventListener('click', closeMenu)


// HOME SWIPER

let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
})

// BACKGROUND HEADER

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')

    if(window.scrollY >= 30){
        header.classList.add('background-header')
    } else{
        header.classList.remove('background-header')
    }
})

// NEW SWIPER

let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

// SCROLL UP

const showScrollUp = () => {
    let scrollUp = document.querySelector('.scroll-up')

    if(window.scrollY >= 30){
        scrollUp.classList.add('scrollUp-reveal')
    } else{
        scrollUp.classList.remove('scrollUp-reveal')
    }
}

window.addEventListener('scroll', showScrollUp)

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
// TOGGLE MENU

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

document.querySelector('.nav-open').addEventListener('click', openMenu)
document.querySelector('.nav-close').addEventListener('click', closeMenu)

// SHOW PROJECTS

document.getElementById('more-projects').addEventListener('click', () => {
    const hiddenProjects = document.querySelectorAll('.hidden')

    hiddenProjects.forEach(item => item.classList.remove('hidden'))

})

// SCROLL

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(section => {
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
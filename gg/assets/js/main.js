/*=============== SHOW MENU ===============*/

const openMenu = () => {
    let menu = document.querySelector(".nav-menu")

    menu.classList.add('show-menu')
}
document.querySelector('.nav-toggle').addEventListener('click', openMenu)

/*=============== REMOVE MENU MOBILE ===============*/

const closeMenu = () => {
    let menu = document.querySelector(".nav-menu")

    menu.classList.remove('show-menu')
}
document.querySelector('.nav-close').addEventListener('click', closeMenu)

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => 
    link.addEventListener('click', closeMenu)
    )

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    let header = document.querySelector('.header')

    if(window.scrollY >= 50){
        header.classList.add('bg-header')
    } else{
        header.classList.remove('bg-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/ 

const showScrollUp = () => {
    let scroll = document.querySelector('.scroll-up')

    if(window.scrollY >= 50){
        scroll.classList.add('show-scroll')
    } else{
        scroll.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', showScrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home-data, .footer-container, .footer-group')
sr.reveal('.home-img', {delay: 700, origin: 'bottom'})
sr.reveal('.logos-img, .program-card, .pricing-card', {interval: 100})
sr.reveal('.choose-img, .calculate-content', {origin: 'left'})
sr.reveal('.choose-content, .calculate-img', {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const form = document.querySelector('.calculate-form')


const calculate = (weight, height) => {
    let result = 0
    result = (weight / (height * height)).toFixed(1)
    return result
}

const formBMI = (event) => {
    event.preventDefault()

    let message = document.querySelector('.calculate-message')

    let height = document.getElementById('calculate-cm').value / 100
    let weight = document.getElementById('calculate-kg').value

    if(height == "" || weight == ""){
        message.innerHTML = "Please fill in all fields"
    } 

    else
    {
        let bmi = calculate(weight, height)

        if(bmi < 18.5){
            classification = 'underweight'
        } else if (bmi < 25){
            classification = 'with the ideal weight. congratulations!!!'
        } else if (bmi < 30){
            classification =  'slightly overweight'
        } else if (bmi < 35){
            classification = 'with grade I obesity'
        } else if (bmi < 40){
            classification = 'with grade II obesity'
        } else {
            classification = 'with morbid obesity'
        }

        message.innerHTML = `Your BMI is ${bmi} and you are ${classification}` 
        document.getElementById('calculate-kg').value = ""
        document.getElementById('calculate-cm').value = ""
    }

    setTimeout(() => {
        message = document.querySelector('.calculate-message'). innerHTML = ""
    }, 4000)
}

form.addEventListener('submit', formBMI)

/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact-form')
const contactMessage = document.querySelector('.footer-message')
const contactUser = document.querySelector('#contact-user')

const sendEmail = async (event) => {
    event.preventDefault()

    if(contactUser.value === ""){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.innerHTML = "You must enter your email"

    } else{
        await emailjs.sendForm('service_qgnwnpc', 'template_e0bv119', '#contact-form', 'cphS4ZE6lr7FoLgzP').then(() => {
            contactMessage.classList.add('color-green')
            contactMessage.innerHTML = 'You registered successfully'
        }), (error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error)
        }
    }

    
}

contactForm.addEventListener('submit', sendEmail)
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

document.querySelector(".menu-opener").addEventListener('click', openMenu)
document.querySelector(".nav-close").addEventListener('click', closeMenu)

// BACKGROUND HEADER

const backgroundHeader = () => {
    let header = document.querySelector('.header')

    if(window.scrollY > 30){
        header.classList.add('background-header')
    } else{
        header.classList.remove('background-header')
    }
}

window.addEventListener('scroll', backgroundHeader)

// SCROLL UP REVEAL

const scrollUpReveal = () => {

    let scrollUp = document.querySelector('.scroll-up')

    if(window.scrollY > 30){
        scrollUp.classList.add('scrollUp-reveal')
    } else{
        scrollUp.classList.remove('scrollUp-reveal')
    }
}

window.addEventListener('scroll', scrollUpReveal)


// SCROLL SECTIONS

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// CALCULATE BMI

const form = document.querySelector('.calculate-form')


const calculate = (weight, height) => {
    let result = 0
    result = (weight / (height * height)).toFixed(1)
    return result
}

const formBMI = (event) => {
    event.preventDefault()

    let message = document.querySelector('.calculate-message')

    let height = document.getElementById('height').value / 100
    let weight = document.getElementById('weight').value

    if(height == "" || weight == ""){
        message.innerHTML = "Please fill in all fields"
    } 

    else
    {
        let bmi = calculate(weight, height)

        if(bmi < 18.5){
            classification = 'underweight'
            message.style.color = 'yellow'
        } else if (bmi < 25){
            classification = 'with the ideal weight. congratulations!!!'
            message.style.color = 'green'
        } else if (bmi < 30){
            classification =  'slightly overweight'
            message.style.color = '#C0392B '
        } else if (bmi < 35){
            classification = 'with grade I obesity'
            message.style.color = '#C0392B '
        } else if (bmi < 40){
            classification = 'with grade II obesity'
            message.style.color = '#C0392B'
        } else {
            classification = 'with morbid obesity'
            message.style.color = 'red'
        }

        message.innerHTML = `Your BMI is ${bmi} and you are ${classification}` 
        document.getElementById('weight').value = ""
        document.getElementById('height').value = ""
    }

    setTimeout(() => {
        message = document.querySelector('.calculate-message'). innerHTML = ""
    }, 4000)
}

form.addEventListener('submit', formBMI)
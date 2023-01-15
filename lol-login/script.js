const inputName = document.querySelector('#nome')
const inputPassword = document.querySelector('#senha')

const inputs = document.querySelectorAll('input')

const button = document.querySelector('.button')

const validateInput = ({ target }) => {
    if(target.value.length >= 1 && inputPassword.value !== ''){
        button.removeAttribute('disabled')
    } else{
        button.setAttribute('disabled', '')
    }
}


inputs.forEach(input => input.addEventListener('input', validateInput))

const inputName = document.querySelector('#usuario')
const inputPassword = document.querySelector('#senha')

const validateInput = ({target}) => {

    let button = document.querySelector('#button')

    if(target.value.length >= 1 && inputPassword.value !== ''){
        button.removeAttribute('disabled')
    } else{
        button.setAttribute('disabled', '')
    }
}

inputName.addEventListener('input', validateInput)
inputPassword.addEventListener('input', validateInput)
// Variables generales
const emailBtn = document.getElementById('email-btn');
const pError = document.getElementById('message-error');

// Creando la funcion que validara
function validacion() {
    // Validando que el email este bien escrito
    let emailInput = document.getElementById('email-input').value;
    let esCorrecto = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput);
    if (emailInput.length === 0) {
        pError.textContent = 'Valid email required';
        inputRequest.style.backgroundColor = 'rgba(255, 98, 87, .3)';
        inputRequest.style.border = '1px solid rgb(255, 98, 87)';
        inputRequest.style.color = 'rgb(255, 98, 87';
    } else if (esCorrecto === false) {
        pError.textContent = 'Valid email required';
        inputRequest.style.backgroundColor = 'rgba(255, 98, 87, .3)';
        inputRequest.style.border = '1px solid rgb(255, 98, 87)';
        inputRequest.style.color = 'rgb(255, 98, 87';
    } else {
        pError.textContent = '';
        inputRequest.style.backgroundColor = '#fff';
        inputRequest.style.border = '1px solid var(--Grey)';
        inputRequest.style.color = '#000';
        // Llamando a la funcion que llama al modal
        callingFun()
        // LLamando a la funcion que modificara el span
        textSpan()
    }
}

// Añadiendo la escucha para llamar a la funcion que validara el input
emailBtn.addEventListener('click', validacion);


// Vamos a llamar al modal
// Variables del modal
let modal = document.getElementById('modal-div');
let mainContainer = document.querySelector('.main-container')
let mainRequest = document.querySelector('main');
let closeBtnModal = document.getElementById('close-modal-btn');
let fotter = document.querySelector('.attribution');

let anchoPantalla = window.innerWidth;

// Funcion que llamara
function callingFun() {
    modal.classList.add('modal-active');
    // Desapareciendo el main que contiene la request del email
    mainRequest.style.display = 'none';
    mainContainer.style.display = 'none';
    fotter.style.display = 'none';
}

closeBtnModal.addEventListener('click', () => {
    modal.classList.remove('modal-active')
    if (anchoPantalla => 900) {
        mainRequest.style.display = 'flex'
        mainContainer.style.display = 'flex';
    } else {
        mainRequest.style.display = 'block'
        mainContainer.style.display = 'block';
    }
    fotter.style.display = 'block'
    // Despues de que se cierre el modal voy a hacer que el email del usuario se quite del value del input :D
    inputRequest.value = '';
});

// Modificando el span para que ponga el email del usuario

// Acceder al valor del input sin que sea fijo
// Luego acceder y modificar el span metiendole el valor del input solo si la validacion fue correcta

let inputRequest = document.getElementById('email-input');
let spanMailUser = document.getElementById('user-email');

function textSpan() {
    let inputValue = inputRequest.value;
    spanMailUser.textContent = inputValue;
}

// Voy a hacer que el form no actue por defecto:

let form = document.querySelector('.div-form');

form.addEventListener('submit', prevent);

function prevent(e) {
    e.preventDefault();
}
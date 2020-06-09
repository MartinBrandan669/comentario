// VARIABLES //

const btnComentar = document.querySelector('.btn__coment');
const btnCerrar = document.querySelector('.cerrar');
const comentario = document.querySelector('#comentario');
const texto = document.querySelector('#comentario');


// EVENT LISTENERS //

eventListeners();

function eventListeners() {

    btnComentar.addEventListener('click', comentar);
    btnCerrar.addEventListener('click', cerrar);

}

// FUNCIONES //

function comentar(e) {
    e.preventDefault();

    comentario.style.display = 'block';
    btnCerrar.style.display = 'block';

}

function cerrar(e) {
    e.preventDefault();

    comentario.style.display = 'none';
    btnCerrar.style.display = 'none';
    texto.value = '';
    console.log(texto.value);

}
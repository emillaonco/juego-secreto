//let parrafo = document.querySelector ('p');
//parrafo.innerHTML ='Escoge un numero del 1 al 10'

//Declarar una variable que utiliza una funcion:
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo =10;


console.log (numeroSecreto);
//FUNCION PARA REUTILIZAR UNA FUNCION CON MAS DE UN ELEMENTO:
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (intentos);
    console.log (numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log (numeroDelUsuario);
    console.log(typeof(numeroDelUsuario));
    console.log (numeroDelUsuario===numeroSecreto);

    if(numeroDelUsuario===numeroSecreto){ //una funcion que llama a otra funcion, la funcion relacionada con el parrafo
        asignarTextoElemento('p', `Acertaste el numero!, lo intentaste ${intentos} ${intentos===1 ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDelUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero es menor');
        } else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++; //si no se adivina el numero, aumenta el contador
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
   document.querySelector('#valorUsuario').value= ''; // Con el simbolo # referencia al objeto del HTML
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
        //Si el numero generado incluido en la lista
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        // Si ya sorteamos todoslos numeros:   

    if(listaNumerosSorteados.length ==numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    }
    else{
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto!');
    asignarTextoElemento('p', `Escoge de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego() { //funcion para reniciar juego cuando el usuario gane o pierda
    //limpiar caja.
    limpiarcaja(); 
    //indicar mensajes iniciales.
    //generar el numero aleatorio.
    //inicializar el numero de intentos.
    condicionesIniciales();

    //deshabilitar el boton de Nuevo Juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}
condicionesIniciales();
asignarTextoElemento('h1', 'Juego del Numero Secreto!');
asignarTextoElemento('p', 'Escoge de 1 a 10');


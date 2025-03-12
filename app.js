//let titulo = document.querySelector('h1');
//esta linea de codigo hace que en la pantalla de la web se imprima un texto en especifico
//al ser una un titulo, el tamaño de la fuente es grande.Muy importante es entender que
//esta variable es un objeto(document.querySelector).
//titulo.innerHTML = 'Juego del número secreto.';




//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';
let intentos = 0;

let numeroSecreto = 0;

let listaNumerosSorteados = []; //declaramos la lista, arreglo o array.

let numeroMaximo = 10;

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));//TipeOf evalua que tipo de variable es la variable(en este caso 'numeroDeUsuario') a analizar.
    //console.log(numeroDeUsuario);
    // console.log(numeroSecreto);


    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos' )}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', "El numero es menor");
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
    }
    intentos++;
    //el doble ('==') igual compara si ambos valores son iguales, sin que le interese si son diferentes tipos de variable
    //en cambio el triple igual (===) aparte de comparar si valen lo mismo las variables, tambien revisa si son del mismo tipo.
    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';//aqui lo que estamos haciendo es invocar un elemento con el querySelector
                                                       //entre parentesis se encuentra el ID del elemento que llamamos
                                                       //Cuando se utiliza query y queremos mencionar el ID, se debe colocar # y ID.
                                                       //En este caso, es el ID de nuestro input (index).
    
}

function asignarTextoElemento(elemento, texto){            
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//la funcion anterior es una funcion que se intenta volver generica, es decir, que se trata de hacer que la funcion
//sea util en mas de un solo contexto.
//El objetivo de esta accion es reducir codigo para que no sea repetitivo.
//La funcion "asignarTextoElemento" contiene dos parametros(elemento y texto).

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
        
        return;

    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) //El metodo "includes" sirve para chequear si el valor de el parametro ya esta en la lista o no.
        {
            return generarNumeroSecreto(); //Recursividad, se llama a la funcion en el return en caso de que se cumpla el if para que re-ejecute dicha funcion.
                                           //En este caso se implementa con el fin de que dentro de la lista no hayan numeros repetidos.
        } else {
            listaNumerosSorteados.push(numeroGenerado); //El metodo "push" se encarga de agregar el valor a la lista.
            return numeroGenerado;                      //Tambien existe el metodo "pop" pero este se encarga de quitar elementos de la lista.
        }

    }
    
}


function condicionesIniciales(){

    //INVOCANDO FUNCION
asignarTextoElemento('h1', 'Juego de el numero secreto!');
//esta funcion lo que hace es, tomar el parametro elemento que en este caso es 'h1' y le asigna el texto que se imprimira en pantalla
// en este caso, 'juego de el numero secreto'.
asignarTextoElemento('p', `Coloque un numero del 1 al ${numeroMaximo}!`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
     
}

function reiniciarJuego(){

    //limpiar caja
    limpiarCaja();
    //mensaje de instruccion del juego
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();
 //DATOS IMPORTANTES, SI PRESIONAS "CRTL + F" (find) SE UTILIZA PARA BUSCAR ALGO.


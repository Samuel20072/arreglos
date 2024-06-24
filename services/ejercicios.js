import { inicio } from "./main.js";
let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
import { espar } from "./validaciones.js"
export function ejercicio1(){
    contenido.innerHTML = `1. Dado el siguiente arreglo let j = [200, -100, 45, 78, 32],imprimir los elementos de indice 2 y 4 <br> <br> ingresa 0 para volver al inicio`
    let arreglo = [200, -100, 45, 78, 32]
    respuesta.innerHTML = `Los elementos en los indices 2 y 4 son: ${arreglo[2]},${arreglo[4]}`
    btn.removeEventListener('click', ejercicio1);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio2 (){
    contenido.innerHTML = `2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh <br> <br> ingresa 0 para volver al inicio`
    let arreglo = ["ab", "cd", "ef", "gh"]
    respuesta.innerHTML = `Los elementos cd y gh son: ${arreglo[1]} en la posición 1 y ${arreglo[3]} en la posición 3`
    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio3 (){
    contenido.innerHTML = `3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la
operacion de recorrido con foreach
<br> <br> ingresa 0 para volver al inicio`
    let arreglo = [10, true, "k200", 20.7]
    let newArreglo = []
    arreglo.forEach(i => {
        newArreglo.push(i);
        console.log(newArreglo);

        
    });
    respuesta.innerHTML = `El arreglo recorrido con el ciclo foreach es este [${newArreglo}]`
    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio4 (){
    contenido.innerHTML = `4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e
imprimir los elementos que sean números impares
<br> <br> ingresa 0 para volver al inicio`
let arreglo = [17, 4, 64, 79, 109, 112];
let newArreglo = [];
arreglo.forEach(i => {
    if (!espar(i)) { 
        newArreglo.push(i);
    }
});
    respuesta.innerHTML = `El arreglo recorrido con el ciclo foreach imprimiendo solo los impares [${newArreglo}]`
    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio5 (){
    contenido.innerHTML = `5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por
true, cambiar el elemento de índice 3 por false.

<br> <br> ingresa 0 para volver al inicio`
let arreglo = [true, true, false,true, false]
arreglo[2] = true
arreglo[3] = false


    respuesta.innerHTML = `El arreglo recorrido con el ciclo foreach imprimiendo solo los impares [${arreglo}]`
    btn.removeEventListener('click', ejercicio5);
    btn.addEventListener('click', handleFinalOption);

}
export function ejercicio6 (){
    contenido.innerHTML = `6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por true, cambiar
el elemento "qr" por 30


<br> <br> ingresa 0 para volver al inicio`
let arreglo = ["wc", "jp", "zx", "qr"]
arreglo[1] = true
arreglo[3] = 30


    respuesta.innerHTML = `El arreglo recorrido con el ciclo foreach imprimiendo solo los impares [${arreglo}]`
    btn.removeEventListener('click', ejercicio6);
    btn.addEventListener('click', handleFinalOption);

}
export function ejercicio7() {
    contenido.innerHTML = `7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
    imprimiendo cada uno de sus elementos.
    <br><br> Ingresa 0 para volver al inicio`;

    function recorrerArray(array) {
        array.forEach(i => {
           
            respuesta.textContent += ` ${i} `;
        });
    }

   
   respuesta.textContent = "";
    recorrerArray([2, 5, 7, 9]);

    btn.removeEventListener('click', ejercicio7);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio8() {
    contenido.innerHTML = `8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
arreglo
    <br><br> Ingresa 0 para volver al inicio <br> <br> Ingrese su arreglo (separado por comas): <input id="inputArreglo" type="text"><br><br>
    <button id="btnEjecutar">Ejecutar</button>`;

    document.getElementById('btnEjecut     ar').addEventListener('click', () => {
        let arrayInput = document.getElementById('inputArreglo').value;
        let array = arrayInput.split(',').map(item => item.trim());

        function LogitudArray(array) {
            return array.length;
        }

        if (arrayInput != '0') {
            respuesta.innerHTML = `La longitud de [${array}] es: ${LogitudArray(array)}`;
        }

        btn.removeEventListener('click', ejercicio8);
        btn.addEventListener('click', handleFinalOption);
    });
}

export function ejercicio9() {
    contenido.innerHTML = `9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]
    <br><br> Ingresa 0 para volver al inicio`;

    let array = [30, 44, 54, 89, 100];
    let elementos = [44, 89, 70];

    function mostrarIndices(arreglo, elementos) {
        elementos.forEach(elemento => {
            let indice = arreglo.indexOf(elemento);
            if (indice !== -1) {
                respuesta.innerHTML += `El índice de ${elemento} es: ${indice} <br>`;
            } else {
                respuesta.innerHTML += `${elemento} no se encuentra en el arreglo <br>`;
            }
        });
    }

    respuesta.innerHTML = "";


    mostrarIndices(array, elementos);

    btn.removeEventListener('click', ejercicio9);
    btn.addEventListener('click', handleFinalOption);
}







function handleFinalOption() {
    let option = input.value.trim();
    error.textContent = "";

    switch (option) {
        case "0":
            inicio()
            error.textContent = "";
            respuesta.textContent = "";
            btn.removeEventListener('click', handleFinalOption);
            break;
        default:
            error.textContent = "Esta opción no es válida";
            break;
    }
}

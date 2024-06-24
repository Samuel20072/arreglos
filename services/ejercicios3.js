let container = document.getElementById("container")
let contenido = document.getElementById("contenido")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
let error = document.getElementById("error")
import { validNum } from "./validaciones.js"
import { inicio } from "./main.js"


 export function ejercicios3 (){
    container.style.backgroundColor="yellow"
    error.textContent = ""
    btn.addEventListener('click', () => {

        let result1 = input.value;
        
        if ( validNum(result1) === "Número"){
            switch (result1) {
                case "1":
                    ejercicio1()
                    error.textContent = ""
                    break;
                case "2":
                    ejercicio2()
                    error.textContent = ""
                    break;
                case "3":
                    ejercicio3()
                    error.textContent = ""
                    break; 
                case "4":
                    ejercicio4()
                  
                    error.textContent = ""
                    break; 
                case "5":
                    ejercicio5()
                    error.textContent = ""
                    break; 
                case "6":
                    ejercicio6()
                    error.textContent = ""
                    break;
                case "7":
                    ejercicio7()
                    error.textContent = ""
                    break;  
                case "8":
                    ejercicio8()
                    error.textContent = ""
                    break; 
                case "9":
                    ejercicio9()
                    error.textContent = ""
                    break; 
                case "10":
                    ejercicio10()
                    error.textContent = ""
                    break; 
                case "11":
                    ejercicio11()
                    error.textContent = ""
                    break; 
                case "12":
                    ejercicio12()
                    error.textContent = ""
                    break;         
                case "0":
                    inicio()
                    error.textContent = ""
                    break;              
                default:
                    break;
            }
        }else{
            error.textContent = "Este no es una opcion que este disponible en el sistema"  
        }
     
    });

}
function ejercicio1() {
    contenido.innerHTML = `1. Imprima los elementos del siguiente arreglo usando ciclo forEach:
    <br>[3, 50, 70, 600, 40]
    <br><br> Ingresa 0 para volver al inicio`;

   
    let arreglo = [3, 50, 70, 600, 40];

    function imprimirElementos(arr) {
        arr.forEach((elemento, index) => {
            respuesta.innerHTML += `El elemento en la posición ${index + 1} es: ${elemento} <br>`;
        });
    }

    respuesta.innerHTML = "";
  
    imprimirElementos(arreglo);

    btn.removeEventListener('click', ejercicio1);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio2() {
   
    contenido.innerHTML = `2. Imprima los elementos del siguiente arreglo multiplicados por 3 usando ciclo forEach:
    <br>[3, 50, 70, 600, 40]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglo = [3, 50, 70, 600, 40];

    function imprimirElementosMultiplicados(arr) {
        arr.forEach((elemento, index) => {
            respuesta.innerHTML += `El elemento en la posición ${index + 1} multiplicado por 3 es: ${elemento * 3} <br>`;
        });
    }

    respuesta.innerHTML = "";

    imprimirElementosMultiplicados(arreglo);

    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio3() {
   
    contenido.innerHTML = `Use ciclo while para recorrer el arreglo e imprimir todos sus elementos:

    <br>[3, 50, 70, 600, 40]
    <br><br> Ingresa 0 para volver al inicio`;
    respuesta.innerHTML = ""

    let arreglo = [3, 50, 70, 600, 40];
    let i = 0 

    function imprimirElementos(arr) {
        while (i < arr.length) {
            respuesta.innerHTML += `El elemento en la posición ${i + 1} es: ${arr[i]} <br>`;
            i++;
        }
           
        
    }

    respuesta.innerHTML = "";

    imprimirElementos(arreglo);

    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio4() {
    contenido.innerHTML = `4. Imprima los elementos pares del siguiente arreglo usando ciclo for, condicional y operación módulo:
    <br>[3, 50, 70, 600, 40]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglo = [3, 50, 70, 600, 40];

    function imprimirElementosPares(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                respuesta.innerHTML += `El elemento en la posición ${i + 1} es par: ${arr[i]} <br>`;
            }
        }
    }

    respuesta.innerHTML = "";


    imprimirElementosPares(arreglo);

    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio5() {
  
    contenido.innerHTML = `5. Verifique si el nombre "Juan" se encuentra en el arreglo:
    <br>["Maria", "Pedro", "Juan", "Pablo", "Diana"]
    <br><br> Ingresa 0 para volver al inicio`;

 
    let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];

    function verificarNombre(arr) {
        let encontrado = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "Juan") {
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            respuesta.innerHTML = `"Juan" se encuentra en el arreglo.`;
        } else {
            respuesta.innerHTML = `"Juan" no se encuentra en el arreglo.`;
        }
    }


    respuesta.innerHTML = "";

    verificarNombre(arreglo);


    btn.removeEventListener('click', ejercicio5);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio6() {
    contenido.innerHTML = `6. Mostrar cuántas veces aparece "Maria" en el arreglo:
    <br>["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];

    function contarNombreMaria(arr) {
        let contador = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "Maria") {
                contador++;
            }
        }
        respuesta.innerHTML = `"Maria" aparece ${contador} veces en el arreglo.`;
    }

    respuesta.innerHTML = "";

   
    contarNombreMaria(arreglo);

    btn.removeEventListener('click', ejercicio6);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio7() {

    contenido.innerHTML = `7. Mostrar la suma de los elementos del arreglo usando ciclo forEach:
    <br>[15, 7, 9, 12, 1]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglo = [15, 7, 9, 12, 1];

    function sumarElementos(arr) {
        let suma = 0;
        arr.forEach((elemento) => {
            suma += elemento;
        });
        respuesta.innerHTML = `La suma de los elementos del arreglo es: ${suma}`;
    }


    respuesta.innerHTML = "";

    sumarElementos(arreglo);

    btn.removeEventListener('click', ejercicio7);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio8() {
 
    contenido.innerHTML = `8. Mostrar la suma de los cuadrados de los elementos del arreglo usando ciclo forEach:
    <br>[-2, 8, 99, 1, 7]
    <br><br> Ingresa 0 para volver al inicio`;

 
    let arreglo = [-2, 8, 99, 1, 7];

    function sumarCuadrados(arr) {
        let suma = 0;
        arr.forEach((elemento) => {
            suma += elemento * elemento;
        });
        respuesta.innerHTML = `La suma de los cuadrados de los elementos del arreglo es: ${suma}`;
    }

    respuesta.innerHTML = "";

   
    sumarCuadrados(arreglo);

    
    btn.removeEventListener('click', ejercicio8);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio9() {
    
    contenido.innerHTML = `9. Mostrar cuántas veces aparece "false" en el arreglo usando ciclo while:
    <br>[true, true, false, true, false, false]
    <br><br> Ingresa 0 para volver al inicio`;


    let arreglo = [true, true, false, true, false, false];

    function contarFalsos(arr) {
        let contador = 0;
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === false) {
                contador++;
            }
            i++;
        }
        respuesta.innerHTML = `"False" aparece ${contador} veces en el arreglo.`;
    }

    
    respuesta.innerHTML = "";


    contarFalsos(arreglo);

    btn.removeEventListener('click', ejercicio9);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio10() {
    contenido.innerHTML = `10. Mostrar si se puede formar la palabra "adso" con los elementos del arreglo:
    <br>["z", "p", "s", "z", "o", "b", "a", "w", "d"]
    <br><br> Ingresa 0 para volver al inicio`;    
    let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
    let palabra = "adso";

    function verificarPalabra(arr, palabra) {
        let mapa = {};
        for (let i = 0; i < arr.length; i++) {
            if (mapa[arr[i]]) {
                mapa[arr[i]]++;
            } else {
                mapa[arr[i]] = 1;
            }
        }

        for (let j = 0; j < palabra.length; j++) {
            if (!mapa[palabra[j]] || mapa[palabra[j]] === 0) {
                respuesta.innerHTML = `No se puede formar la palabra "adso" con los elementos del arreglo.`;
                return;
            } else {
                mapa[palabra[j]]--;
            }
        }
        respuesta.innerHTML = `Se puede formar la palabra "adso" con los elementos del arreglo.`;
    }

    respuesta.innerHTML = "";

    verificarPalabra(arreglo, palabra);

    btn.removeEventListener('click', ejercicio10);
    btn.addEventListener('click', handleFinalOption);
}
function ejercicio11() {
    contenido.innerHTML = `11. Mostrar la tabla del 5 del 10 al 20 usando ciclo for:
    <br>[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglo = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    function mostrarTablaDel5(arr) {
        for (let i = 0; i < arr.length; i++) {
            respuesta.innerHTML += `5 x ${arr[i]} = ${5 * arr[i]}<br>`;
        }
    }
    respuesta.innerHTML = "";

   
    mostrarTablaDel5(arreglo);


    btn.removeEventListener('click', ejercicio11);
    btn.addEventListener('click', handleFinalOption);
}

function ejercicio12() {
    contenido.innerHTML = `12. Determinar cuáles números son consecutivos en el arreglo usando dos ciclos forEach:
    <br>[5, 7, 90, 2, 5, 3, 8, 99]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglo = [5, 7, 90, 2, 5, 3, 8, 99];

    function encontrarConsecutivos(arr) {
        arr.forEach((a, i) => {
            arr.forEach((b, j) => {
                if (i !== j && a + 1 === b) {
                    respuesta.innerHTML += `${a} y ${b} son consecutivos<br>`;
                }
            });
        });
    }

    respuesta.innerHTML = "";

    encontrarConsecutivos(arreglo);

    btn.removeEventListener('click', ejercicio12);
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

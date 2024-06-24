let container = document.getElementById("container")
let contenido = document.getElementById("contenido")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
let error = document.getElementById("error")
import { ejercicios3 } from "./ejercicios3.js"
import { validNum } from "./validaciones.js"


 export function ejercicios2 (){
    container.style.backgroundColor="orange"
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
                case "0":
                    ejercicios3()
                    contenido.innerHTML = `ejercicio3
                    <br> <br>Ingrese 1 para el ejercicio 1 
                    <br> <br> Ingrese 2 para el ejercicio 2
                    <br> <br> Ingrese 3 para el ejercicio 3
                    <br> <br> Ingrese 4 para el ejercicio 4 
                    <br> <br> Ingrese 5 para el ejercicio 5 
                    <br> <br> Ingrese 7 para el ejercicio 7 
                    <br> <br> Ingrese 8 para el ejercicio 8 
                    <br> <br> Ingrese 9 para el ejercicio 9   
                    <br> <br> Ingrese 10 para el ejercicio 10  
                    <br> <br> Ingrese 11 para el ejercicio 11  
                    <br> <br> Ingrese 12 para el ejercicio 12  
                    <br> <br> Ingrese 0 para volver al inicio
                `
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
    contenido.innerHTML = `1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length
    <br>a) [1,2,3,4,5,6,7,8,9,10] <br>b) [] <br>c) ["a", true, -1] <br>d) [2, 4, 5, 7, 1, 34, 89, 0]
    <br><br> Ingresa 0 para volver al inicio`;

    let arreglos = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [],
        ["a", true, -1],
        [2, 4, 5, 7, 1, 34, 89, 0]
    ];

    function imprimirLongitudes(arrays) {
        arrays.forEach((array, index) => {
            respuesta.innerHTML += `El número de elementos en el arreglo ${String.fromCharCode(97 + index)}) es: ${array.length} <br>`;
        });
    }

    respuesta.innerHTML = "";

    
    imprimirLongitudes(arreglos);

    btn.removeEventListener('click', ejercicio1);
    btn.addEventListener('click', handleFinalOption);
}


export function ejercicio2() {
    contenido.innerHTML = `2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
    <br>a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo
    <br>b) Agregue el elemento true usando push y verifique el cambio en el arreglo
    <br>c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo
    <br>d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
    <br>e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo
    <br><br> Ingresa 0 para volver al inicio`;
     respuesta.innerHTML = ""
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    
    function mostrarArreglo(arr, descripcion) {
        respuesta.innerHTML += `${descripcion}:  [${arr.join(', ')}] <br> <br>`;
    }

    
    array.push(345);
    mostrarArreglo(array, 'a) Después de agregar 345');

    array.push(true);
    mostrarArreglo(array, 'b) Después de agregar true');

    array.push("ADSO");
    mostrarArreglo(array, 'c) Después de agregar "ADSO"');

    array.push(455, 78, false);
    mostrarArreglo(array, 'd) Después de agregar 455, 78, false');

    array.push("ABcd", true, 21);
    mostrarArreglo(array, 'e) Después de agregar "ABcd", true, 21');

    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio3() {
    
    contenido.innerHTML = `3. Use splice para hacer las eliminaciones correspondientes:
    <br>a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
    <br>b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
    <br>c) Dado el arreglo [-1, -55, -89, -30, 1000] Elimine el elemento de índice 1
    <br>d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el índice 4 en un solo llamado
    <br>e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un solo llamado
    <br><br> Ingresa 0 para volver al inicio`;
     respuesta.innerHTML = ""

  
    function mostrarArreglo(arr, descripcion) {
        respuesta.innerHTML += `${descripcion}: [${arr.join(', ')}] <br><br>`;
    }

    
    let arrayA = [1, 2, false];
    arrayA.splice(2, 1);
    mostrarArreglo(arrayA, 'a) Después de eliminar el elemento de índice 2');

    
    let arrayB = [99, false, 17, 45, 7, "abc", 78];
    arrayB.splice(6, 1);
    mostrarArreglo(arrayB, 'b) Después de eliminar el elemento de índice 6');

  
    let arrayC = [-1, -55, -89, -30, 1000];
    arrayC.splice(1, 1);
    mostrarArreglo(arrayC, 'c) Después de eliminar el elemento de índice 1');

  
    let arrayD = ["zxc", 767, 1298, true, false, [3], 1];
    arrayD.splice(1, 4);
    mostrarArreglo(arrayD, 'd) Después de eliminar los elementos desde el índice 1 hasta el índice 4');


    let arrayE = [34, ["q"], 67, 1, 99, 1/2];
    arrayE.splice(3, 2);
    mostrarArreglo(arrayE, 'e) Después de eliminar los elementos desde el índice 3 hasta el índice 4');
    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio4() {
   
    contenido.innerHTML = `4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5], realice una copia dependiente de a.
    <br><br> Ingresa 0 para volver al inicio`;
     respuesta.innerHTML = ""

    let a = [2, 6, 9, 0, 5];

    let copiaDependiente = a;

    function mostrarArreglo(arr, descripcion) {
        respuesta.innerHTML += `${descripcion}: [${arr.join(', ')}] <br><br>`;
    }

    mostrarArreglo(a, 'Arreglo original a');
    mostrarArreglo(copiaDependiente, 'Copia dependiente de a');

    copiaDependiente[0] = 99;
    mostrarArreglo(a, 'Arreglo original a después de modificar la copia dependiente');
    mostrarArreglo(copiaDependiente, 'Copia dependiente después de la modificación');

    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}


export function ejercicio5() {
    contenido.innerHTML = `5. Dado el siguiente arreglo b = ["abc", 4, 88, 99], realice una copia independiente de b.
    <br><br> Ingresa 0 para volver al inicio`;
     respuesta.innerHTML = ""

    let b = ["abc", 4, 88, 99];

  
    let copiaIndependiente = [...b];

    function mostrarArreglo(arr, descripcion) {
        respuesta.innerHTML += `${descripcion}: [${arr.join(', ')}] <br><br>`;
    }

 
    mostrarArreglo(b, 'Arreglo original b');
    mostrarArreglo(copiaIndependiente, 'Copia independiente de b');

    copiaIndependiente[0] = "xyz";
    mostrarArreglo(b, 'Arreglo original b después de modificar la copia independiente');
    mostrarArreglo(copiaIndependiente, 'Copia independiente después de la modificación');


    btn.removeEventListener('click', ejercicio5);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio6() {
   
    contenido.innerHTML = `6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use un ciclo for (con .length) para recorrer el arreglo.
    <br><br> Ingresa 0 para volver al inicio`;
    respuesta.innerHTML = ""


    let array = ["x", "y", "z", 0, 1, 2, 3];


    function mostrarElemento(indice, valor) {
        respuesta.innerHTML += `Índice ${indice}: ${valor} <br>`;
    }
    for (let i = 0; i < array.length; i++) {
        mostrarElemento(i, array[i]);
    }

    btn.removeEventListener('click', ejercicio6);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio7() {
    contenido.innerHTML = `7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use un ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1.
    <br><br> Ingresa 0 para volver al inicio`;
    respuesta.innerHTML = ""

    let array = [1, 17, 8, 9, 3];

    for (let i = 0; i < array.length; i++) {
        respuesta.innerHTML += `${array[i] + 1}<br>`;
    }

    // Manejo del evento del botón para volver al inicio
    btn.removeEventListener('click', ejercicio7);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio8() {
    contenido.innerHTML = `8. Cree una función que reciba un arreglo y retorne su longitud (número de elementos).
    <br><br> Ingresa 0 para volver al inicio`;
      respuesta.innerHTML = ""
    function obtenerLongitudDelArreglo(arr) {
        return arr.length;
    }

    let ejemploArreglo = [1, 2, 3, 4, 5,6];
    let longitud = obtenerLongitudDelArreglo(ejemploArreglo);
    respuesta.innerHTML = `La longitud del arreglo [${ejemploArreglo.join(', ')}] es: ${longitud}`;

  
    btn.removeEventListener('click', ejercicio8);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio9() {
   
    contenido.innerHTML = `9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"].
    <br><br> Ingresa una letra:
    <input type="text" id="letraInput" maxlength="1">
    <button id="verificarBtn">Verificar</button>
    <br><br> Ingresa 0 para volver al inicio`;
     respuesta.innerHTML = ""
    
    const letras = ["a", "b", "c", "d", "e", "f", "g"];

   
    function verificarLetra(letra) {
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] === letra) {
                return true;
            }
        }
        return false;
    }

    const verificarBtn = document.getElementById('verificarBtn');
    verificarBtn.addEventListener('click', () => {
        const letraInput = document.getElementById('letraInput').value.toLowerCase();
        if (letraInput.length === 1 && /^[a-z]$/.test(letraInput)) {
            const resultado = verificarLetra(letraInput);
            respuesta.innerHTML = resultado ? `La letra "${letraInput}" está en el arreglo.` : `La letra "${letraInput}" no está en el arreglo.`;
        } else {
            respuesta.innerHTML = 'Por favor, ingresa una sola letra válida.';
        }
    });

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

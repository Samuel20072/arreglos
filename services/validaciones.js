export function validNum(value) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return "Número";
    } else if (/^[a-zA-Z]+$/.test(value)) {
        return "Letra";
    } else {
        return "No se pudo identificar";
    }
}export function espar (num){
    
        return num % 2 === 0; // Devuelve true si el número es par
}
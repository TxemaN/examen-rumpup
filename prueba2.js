
let numeroDado=[];
let numeroSumado;
let impares;

function obtenerImpares ()  
{   numeroDado=Number(prompt("escribe numero"));
    numeroSumado = numeroDado+50;
    return numeroSumado.filter(impares => impares % 2 === 1)}

    console.log(obtenerImpares())
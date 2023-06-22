let numero;

const pedirNumero=()=>{
    numero=parseInt(prompt("escribe un numero íntegro entre 0 y mil, no incluidos"));
    numero = Math.abs(numero);
    if(-1000>numero && numero>999) {

    return "El número no está entre 0 y mil"
}
}
console.log("Tu número tiene " + pedirNumero() + " cifras")
let letra = "s";
let nuevaPalabra;
let cantidadVeces;
let frase = "perros y peras";
let totalS;

function contarS()  {
    frase=prompt("escribe algo");
  nuevaPalabra= frase.split(letra);
return nuevaPalabra.length - 1;
    }
console.log(contarS());
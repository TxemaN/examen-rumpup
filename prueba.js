let letra = "n";
let nuevaPalabra;
let cantidadVeces;
let frase = "assassins";
let totalS;

function contarS()  {
  nuevaPalabra= frase.split(letra);
return nuevaPalabra.length - 1;
    }
console.log(contarS());
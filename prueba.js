let letra = "s";
let nuevaPalabra;
let cantidadVeces;
let frase = "perros y peras";
let totalS;

function contarS()  {
    letra=prompt("escribe la letra a contar"); if(letra.length>1) {
        letra=prompt("solo una letra porfa")
    }
    frase=prompt("escribe algo");
  nuevaPalabra= frase.split(letra);
return nuevaPalabra.length - 1;
    }
console.log(contarS());
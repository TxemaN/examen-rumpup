let nota =0;
let array=[];
let notaMedia;
let notaFinal;

const pedirNota=()=> {

  for(let i =1; i<4; i++)
  {
    let nota=Number(prompt("escribe la"+i+"ª nota"));
    array.push(nota);
    
}
notaMedia = array.reduce((primeranota, restonotas)=>(primeranota+restonotas))/3;


  if (notaMedia <5 ) {
    notaFinal="suspenso";
    }
    else if (notaMedia>=5 && notaMedia<7) {
      notaFinal="notable";
    }
    else if (notaMedia>=7 && notaMedia<=10) {
      notaFinal="sobresaliente";
    }
    return notaFinal;
 }

console.log(pedirNota())

var nome = "Calonne"
var notaDoprimeiroBimestre = 9
var notaDosegundoBimestre = 7
var notaDoterceiroBimestre = 5
var notaDoquartoBimestre = 6

var notaFinal = (notaDoprimeiroBimestre + notaDosegundoBimestre + notaDoterceiroBimestre + notaDoquartoBimestre) / 4

var notaFixada = notaFinal.toFixed(2)

console.log("Bem vinda " + nome)


if(notaFinal >= 7){
  
  console.log("você foi aprovada!")
  
  document.body.style.backgroundImage =
  "url('https://png.pngtree.com/png-clipart/20190921/original/pngtree-true-and-false-symbols-accept-rejected-for-evaluation-vector-simple-png-image_4723251.jpg')";
}else{
 console.log("você não foi aprovada!")
 
 document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/f5/46/ce/f546ce55c6996610502fe0cd3f4da9c3.jpg')";
}
console.log(notaFinal)  


// isso é um comentario 
// Revisao 
// variveis, strings, console.log, toFixed, operações matemáticas, concatenação 
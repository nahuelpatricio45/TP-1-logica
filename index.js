
//ejercio A)
//let numeros = []
///let continuar= true
//while(continuar){

//let elemento1 = prompt("ingrese 1 elemento")
//elemento1 = +elemento1 
//numeros[numeros.length] = elemento1
//console.log(numeros)

//let decision = prompt("desea agregar otro elemento? escriba 'n' para agregar o 'y' para finalizar")
//if(decision === "y"){
    //const suma = numeros.reduce((total, num) => total + num, 0)
//console.log(suma)

//alert("El total de elementos es" +" "+suma)
 //   continuar = false
//}
//console.log(continuar)
//}

//Ejercicio B)

//let notas = []
///let seguir = true
//while(seguir){
///let nota = prompt ("ingrese la calificacion del alumno")
//nota = +nota
//notas[notas.length] = nota 
//console.log(notas)

//const suma = notas.reduce((total, num) => total + num, 0)
//const promedio = suma / notas.length


//let desicion = prompt("desea ingresar otra nota,n, en caso contrario,y")
//if(desicion === "y"){
//alert("El promedio de la nota total es:" +" "+ promedio)
//seguir=false
//}
//}

//ejercicio c

//let peces = []
//for(let i = 1; i <= 5; i++){

//for(let k = 1; k <= 10; i++){
    //i = prompt("Ingrese el peso de su pez")
  // i = +i
//peces[peces.length] = i}

//console.log(peces)
//}

//const mayorpeso = Math.max(...peces)
//console.log(mayorpeso)

//const numpeces = prompt("Ingrese la cantidad de peces: ")
//const cantidadpeces = parseInt(numPeces)

//if (cantidadpeces < 5) {
 // const alertone =alert("Debe ingresar al menos 5 valores de peso.")
 // console.log(alertone)
//} else {
 //// const pesos = []
 // /
 // for (let i = 0; i < cantidadpeces; i++) {
  //  let peso = prompt(`Ingrese el peso del pez ${i + 1}: `)
   // peso = +peso
   // pesos.push(peso)
  //}

  //pesos.sort((a, b) => b - a) 
  
  //alert(`El pez más pesado pesa: ${pesos[0]}`)
  //alert(`El segundo pez más pesado pesa: ${pesos[1]}`)
 // alert(`El tercer pez más pesado pesa: ${pesos[2]}`)
///}


//ejercicio d
//function espar(numero) {
 // return (numero / 2) === Math.floor(numero / 2);
//}

////function esimpar(numero) {
 // return (numero / 2) !== Math.floor(numero / 2);
//}

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//array.forEach(num => {
 // if (esPar(num)) {
 //     console.log(num + " es PAR");
 // } else {
  //    console.log(num + " es IMPAR");
 // }
//})

//ejercicio e
//ejercic]]]]]]] 
//let array = [2, 4, 6, 8, 10];
//let numerousuario = parseFloat(prompt("Ingresa un número:"));

//if (!isNaN(numerousuario)) {
  //let arraymultiplicado = array.map(function(elemento) {
    //return elemento * numerousuario;
 // });

  //console.log("Array multiplicado:", arraymultiplicado);
//} else {
  //console.log("El número ingresado no es válido.");
//}
// ejercicio g
let array = [15, 8, 23, 5, 10, 42, 7, 12, 30, 18];
let valorbuscar = parseInt(prompt("Ingresa un valor a buscar:")); // Solicitamos al usuario el valor a buscar

if (!isNaN(valorbuscar)) {
  let indiceencontrado = array.indexOf(valorbuscar);

  if (indiceencontrado !== -1) {
    console.log("El valor", valorbuscar, "se encuentra en el array en el índice", indiceencontrado + ".");
  } else {
    console.log("El valor", valorbuscar, "no se encuentra en el array.");
  }
} else {
  console.log("El valor ingresado no es válido.");
}

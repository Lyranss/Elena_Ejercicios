let numeros = [];

numeros[0] = Number(prompt("Escribe un número"));
numeros[1] = Number(prompt("Escribe un número"));
numeros[2] = Number(prompt("Escribe un número"));
numeros[3] = Number(prompt("Escribe un número"));
numeros[4] = Number(prompt("Escribe un número"));

let mayor = numeros[0];
let posicion = 0;
for(let i = 1; i < numeros.length; i++){
    if(mayor < numeros[i]){
        mayor = numeros[i];
        posicion = i;
    }
}
console.log(numeros);
console.log("El mayor es " + mayor + " y es el " + (posicion + 1) + "º");
let num2 = Number(prompt("Escribe un número"));
let num3 = Number(prompt("Escribe un número"));
let num4 = Number(prompt("Escribe un número"));
let num5 = Number(prompt("Escribe un número"));
let num1 = Number(prompt("Escribe un número"));

let mayor = num1;
let posicion = 1;
if(mayor < num2){
    mayor = num2;
    posicion = 2;
}
if(mayor < num3){
    mayor = num3;
    posicion = 3;
}
if(mayor < num4){
    mayor = num4;
    posicion = 4;
}
if(mayor < num5){
    mayor = num5;
    posicion = 5;
}
console.log("El mayor es " + mayor + " y es el " + posicion);


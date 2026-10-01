<script setup>
import { ref } from 'vue'
import Camiseta from '../assets/camiseta.jpg'
import Detalle from './detalle.vue'

const cantidad = ref(0);

let camisetas = [
    { nombre: "Camiseta Taipa", precios: {XS: 18.95, S: 19.95, M: 20.95, L: 21.95}} ,
    { nombre: "Camiseta básica verde", precios: {XS: 19.99, S: 20.99, M: 21.99, L: 22.99} },
    { nombre: "Camiseta Urban Olive", precios: {XS: 16.99, S: 17.99, M: 18.99, L: 19.99} },
    { nombre: "Camiseta Eagle", precios: {XS: 21.99, S: 22.99, M: 23.99, L: 24.99} },
    { nombre: "Camiseta Águila", precios: {XS: 19.99, S: 20.99, M: 21.99, L: 22.99} },
    { nombre: "Camiseta Forest", precios: {XS: 17.99, S: 18.99, M: 19.99, L: 20.99} }
];

const camisetaSeleccionada = ref(null)
const mostrarDetalle = ref(false);

const abrirDetalle = (camiseta) => {
    camisetaSeleccionada.value = camiseta
    mostrarDetalle.value = true
}

const incrementarCantidad = () => {
    cantidad.value++
}
</script>

<template>

    <div class="carrito">
        Carrito
        <strong>{{ cantidad}}</strong>
    </div>

    <div class="catalogo">
        <article v-for="camiseta in camisetas" :key="camiseta.nombre">
            <img :src="Camiseta" alt="Camiseta" @click="abrirDetalle(camiseta)">
            <div class="info">
                <strong>{{ camiseta.nombre }}: </strong><br>
                <span class="precio">{{ camiseta.precios.XS }}€ </span><br>
            </div>

        </article>
    </div>

    <Detalle :visible="mostrarDetalle" :camiseta="camisetaSeleccionada" @cerrar="mostrarDetalle = false" @agregar="incrementarCantidad"></Detalle>

</template>

<style scoped>
article {
    margin: 5%;
    margin-left: 5%;
    height: 250px;
    border-radius: 1em;
    background-color:rgb(250, 187, 250);
    transition: box-shadow 0.3s ease;
}

article:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

img {
    margin-top: 5px;
    width: 180px;
    height: 180px;
    cursor: pointer;
}

button {
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
    cursor: pointer;
}

.catalogo {
    display: grid;
    grid-template-columns:repeat(3, 1fr);   
}

.carrito {
    position: fixed;
    top: 20px;
    right: 30px;
    background-color: rgb(250, 187, 250);
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    gap: 15px;
    align-items: center;
    transition: box-shadow 0.3s ease;
}

.carrito:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

</style>
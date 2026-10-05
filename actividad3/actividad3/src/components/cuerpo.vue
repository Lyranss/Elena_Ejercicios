<script setup>
import { ref } from 'vue'
import Camiseta1 from "../assets/camiseta.jpg"
import porDetras1 from "../assets/porDetras.png"
import Camiseta2 from "../assets/camiseta2.jpg"
import porDetras2 from "../assets/porDetras2.jpg"
import Camiseta3 from "../assets/camiseta3.jpg"
import porDetras3 from "../assets/porDetras3.jpg"
import Camiseta4 from "../assets/camiseta4.jpg"
import porDetras4 from "../assets/porDetras4.jpg"
import Camiseta5 from "../assets/camiseta5.jpg"
import porDetras5 from "../assets/porDetras5.jpg"
import Camiseta6 from "../assets/camiseta6.jpg"
import porDetras6 from "../assets/porDetras6.jpg"
import Detalle from './detalle.vue'

const cantidad = ref(0);

let camisetas = [
    { 
        nombre: "Camiseta Taipa", 
        precios: {XS: 18.95, S: 19.95, M: 20.95, L: 21.95}, 
        stock: {XS: 8, S: 12, M: 16, L: 8},
        img: [Camiseta1, porDetras1]
    },
    { 
        nombre: "Camiseta More Love", 
        precios: {XS: 19.99, S: 20.99, M: 21.99, L: 22.99}, 
        stock: {XS: 7, S: 9, M: 13, L: 9},
        img: [Camiseta2, porDetras2]
    },
    { 
        nombre: "Camiseta Third Wave", 
        precios: {XS: 16.99, S: 17.99, M: 18.99, L: 19.99}, 
        stock: {XS: 8, S: 5, M: 14, L: 4},
        img: [Camiseta3, porDetras3]
    },
    { 
        nombre: "Camiseta SevenZeroFive", 
        precios: {XS: 21.99, S: 22.99, M: 23.99, L: 24.99}, 
        stock: {XS: 10, S: 9, M: 7, L: 7},
        img: [Camiseta4, porDetras4]
    },
    { 
        nombre: "Camiseta Pavillon", 
        precios: {XS: 19.99, S: 20.99, M: 21.99, L: 22.99}, 
        stock: {XS: 14, S: 20, M: 18, L: 10},
        img: [Camiseta5, porDetras5]
    },
    { 
        nombre: "Camiseta Type Physics", 
        precios: {XS: 17.99, S: 18.99, M: 19.99, L: 20.99}, 
        stock: {XS: 1, S: 5, M: 5, L: 9},
        img: [Camiseta6, porDetras6]
    }
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

    <main class="contenedor-principal">
        <div class="catalogo">
            <article v-for="camiseta in camisetas" :key="camiseta.nombre" class="producto-card" @click="abrirDetalle(camiseta)">
                <div class="img-contenedor">
                    <img :src="camiseta.img[0]" alt="Camiseta">
                </div>
                <div class="info">
                    <h3 class="producto-nombre">{{ camiseta.nombre }}</h3>
                    <p class="precio">Desde <span>{{ camiseta.precios.XS }}€</span></p>
                </div>
            </article>
        </div>
    </main>

    <Detalle :visible="mostrarDetalle" :camiseta="camisetaSeleccionada" @cerrar="mostrarDetalle = false" @agregar="incrementarCantidad"></Detalle>

</template>

<style scoped>

.contenedor-principal {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.producto-nombre {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
}

.info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.img-contenedor {
    width: 100%;
    height: 320px;
    background-color: #324A5F;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}

.img-contenedor img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.precio {
    margin: 0;
    font-size: 14px;
    color: #7f8c8d;
}

.precio span {
    font-size: 18px;
    font-weight: 700;
    color: #1B2A41; 
}

.catalogo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;   
    gap: 30px;
}

.producto-card {
    border: 1px solid #324A5F;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.producto-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: #d1d1d1;
}

.carrito {
    position: fixed;
    top: 20px;
    right: 30px;
    color: #CCC9DC;
    background-color: #324A5F;
    border: 1px solid #324A5F;
    padding: 15px 20px;
    border-radius: 10px;
    display: flex;
    gap: 15px;
    align-items: center;
}

.carrito:hover{
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
    background-color: #CCC9DC;
    border: 1px solid #324A5F;
    color: #2c3e50;
    cursor: pointer;
}

</style>
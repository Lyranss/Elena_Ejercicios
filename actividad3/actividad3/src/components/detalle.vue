<script setup>
import { ref } from 'vue'
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    camiseta: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['cerrar', 'agregar'])

const tallaSeleccionada = ref('XS') 
const precioTotal = ref(0);
const seleccionarTalla = (talla, precio) => {
    tallaSeleccionada.value = talla
    if (tallaSeleccionada.value == 'S') {
        camiseta.precio += 1;
    } else if (tallaSeleccionada.value == 'M') {
        camiseta.precio += precio + 2;
    } else if(tallaSeleccionada.value == 'L') {
        camiseta.precio += precio + 3;
    }
}

const agregarAlCarrito = () => {
    emit('agregar')
    emit('cerrar')
}
</script>

<template>
        <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
            <article class="tarjeta">
                <div>
                    <img src="../assets/camiseta.jpg" alt="">
                    <img src="../assets/porDetras.png" alt="">
                </div>
                <div class="info">
                    <h3>{{ camiseta.nombre }}</h3>
                    <p class="precio">{{ camiseta.precios.XS }} €</p>
                    <p class="descripcion">Camiseta de estilo urbano, cómoda y perfecta para el día a día.</p>
                    <hr>

                    <p class="texto-talla">Selecciona una talla</p>
                    <button :class="{ activo: tallaSeleccionada === 'XS' }" @click="seleccionarTalla('XS', camiseta.precio)">XS</button>
                    <button :class="{ activo: tallaSeleccionada === 'S' }" @click="seleccionarTalla('S', camiseta.precio)">S</button>
                    <button :class="{ activo: tallaSeleccionada === 'M' }" @click="seleccionarTalla('M', camiseta.precio)">M</button>
                    <button :class="{ activo: tallaSeleccionada === 'L' }" @click="seleccionarTalla('L', camiseta.precio)">L</button>

                    <button class="carrito" @click="agregarAlCarrito">Añadir al carrito</button>
                    <hr>
                    <button class="carrito" @click="$emit('cerrar')">Cerrar</button>
                </div>


            </article>
        </div>
</template>

<style scoped>
.tarjeta {
    background: white;
    border-radius: 18px;
    max-width: 940px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
}

.descripcion {
    text-align: center;
    color: #666;
    max-width: 300px;
}

.texto-talla {
    margin: 0;
    color: #666;
}

.precio {
    font-size: 24px;
    font-weight: bold;
    color: rgb(254, 93, 254);
}

img {
    width: 350px;
    height: 350px;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

}

.info h3 {
    font-size: 28px;
    margin: 0;
}

button {
    width: 50px;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
    background-color: white;
    color: black;
}

button:hover {
    background-color: rgb(250, 187, 250);
    color: black;
}

.fondo {
    position: fixed;
    inset: 0;
    background: rgba(23, 32, 51, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 100;
}

.carrito {
    width: 220px;
    height: 45px;
    color: rgb(0, 0, 0);
    border-radius: 1px solid black;
    cursor: pointer;
}

button.activo {
    background-color: rgb(250, 187, 250);
    color: rgb(0, 0, 0);
}
</style>
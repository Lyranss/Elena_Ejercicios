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
const totalPrecio = ref(0)
const tallaSeleccionada = ref('')
const stock = ref(0)

const agregarAlCarrito = () => {
    if (stock.value != 0) {
        emit('agregar', {nombre: props.camiseta.nombre, precio: totalPrecio.value, talla: tallaSeleccionada.value});
        emit('cerrar');
    }
}

const indiceCamiseta = ref(0);

const reiniciar = () => {
    tallaSeleccionada.value = "";
    stock.value = 0;
    totalPrecio.value = 0;
    indiceCamiseta.value = 0;
}

const cambiarImagen = () =>{
    if(indiceCamiseta.value == 0){
        indiceCamiseta.value = 1;
    }else{
        indiceCamiseta.value = 0;
    }
}
</script>

<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar'), reiniciar()">
        <article class="tarjeta">
            
            <img :src="camiseta.img[indiceCamiseta]" alt="Camiseta" @click.value="cambiarImagen()">
            
            <div class="info">
                <h3>{{ camiseta.nombre }}</h3>
                <p class="precio">{{ totalPrecio }} €</p>

                <p class="texto-talla">Selecciona una talla</p>
                <div class="contenedor-tallas">
                    <button :class="{ activo: tallaSeleccionada === 'XS' }" @click="tallaSeleccionada = 'XS', totalPrecio = camiseta.precios.XS, stock = camiseta.stock.XS">XS</button>
                    <button :class="{ activo: tallaSeleccionada === 'S' }" @click="tallaSeleccionada = 'S', totalPrecio = camiseta.precios.S, stock = camiseta.stock.S">S</button>
                    <button :class="{ activo: tallaSeleccionada === 'M' }" @click="tallaSeleccionada = 'M', totalPrecio = camiseta.precios.M, stock = camiseta.stock.M">M</button>
                    <button :class="{ activo: tallaSeleccionada === 'L' }" @click="tallaSeleccionada = 'L', totalPrecio = camiseta.precios.L, stock = camiseta.stock.L">L</button>
                </div>
                <strong class="stock">Stock Talla {{ tallaSeleccionada }} disponible: {{ stock }} camisetas</strong>

                <button class="carrito" @click="agregarAlCarrito(), reiniciar()">Añadir al carrito</button>
                <button class="carrito" @click="$emit('cerrar'), reiniciar()">Cerrar</button>
            </div>


        </article>
    </div>
</template>

<style scoped>
.tarjeta {
    background: #CCC9DC;
    border-radius: 18px;
    width: 740px;
    height: 400px;
    max-width: 940px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
}

.texto-talla {
    margin: 0;
    color: #1B2A41;
}

.precio {
    font-size: 24px;
    font-weight: bold;
    color: #1B2A41;
}

img {
    width: 370px;
    height: 400px;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px;
}

.info h3 {
    font-size: 28px;
    margin: 0;
    color: #2c3e50;
}

button {
    width: 50px;
    height: 40px;
    border: 1px solid rgb(129, 127, 127);
    border-radius: 8px;
    cursor: pointer;
    background-color: #CCC9DC;
    color: #0C1821;
}

button:hover {
    background-color: #1B2A41;
    color: #ffffff;
}

button.activo {
    background-color: #1B2A41;
    color: #ffffff;
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
    border-radius: 1px solid black;
    cursor: pointer;
}

.stock {
    color: #378f4a;
    font-size: 17px;
}

.contenedor-tallas{
    display: grid;
        grid-template-columns: 1.2fr 1.2fr 1.2fr 1fr;
}
</style>
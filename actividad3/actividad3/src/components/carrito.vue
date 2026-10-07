<script setup>
import { ref } from 'vue'
    const props=defineProps({
        visible:{
            type: Boolean,
            default: false
        },
        lista:{
            type: Array,
            default: []
        },
        precioTotal:{
            type: Number,
            default: 0
        }
    })

    const emit = defineEmits(['eliminar'])
</script>

<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
        <article class="tarjeta">
            <div class="lista">
                <h3>Carrito</h3>
                <hr>
                <article v-for="camiseta, index in lista" :key="camiseta.nombre" class="articulo">
                    <h5 class="nombre-camiseta">{{ camiseta.nombre }}</h5><br>
                    <p class="talla">Talla: {{ camiseta.talla }}</p>
                    <p class="precio">{{ camiseta.precio }}€</p>
                    <button  @click="emit('eliminar', camiseta.precio), lista.splice(index, 1)">Eliminar</button>
                </article>
            </div>
            
            <div>
                <h3>Total:</h3>
                <h4 class="cantidad">Cantidad del Pedido: </h4>
                <span style="color: #2c3e50;">{{ lista.length }} camisetas</span>
                <br><br>
                <h4 style="color: rgb(83, 83, 83);">Total a Pagar</h4>
                <p style="color: #2c3e50; font-size: 30px; font-weight: bold;">{{ props.precioTotal.toFixed(2) }}€</p>
            </div>
        </article>
    </div>
</template>

<style scoped>
.contenedor-principal {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
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

.tarjeta {
    background: #CCC9DC;
    border-radius: 18px;
    width: 740px;
    height: 500px;
    max-width: 940px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    overflow: hidden;
}
.articulo{
    border: 2px solid rgb(139, 135, 135);
    text-align: left;
    margin-top: 10px;
}

.talla{
    color: rgb(83, 83, 83); 
    display: inline;
    font-size: 15px;
    margin-left: 10px;
}

h3{
    color: #2c3e50;
    text-align: left;
    margin-left: 50px;
    font-size: 30px;
}

.nombre-camiseta{
    color: #2c3e50;
    display: inline;
    margin-left: 5px;
}

.precio{
    margin-left: 350px;
    font-size: 20px;
    color: #2c3e50;
    font-weight: bold   ;
}

.cantidad{
    margin-bottom: 10px;
    color: rgb(83, 83, 83);
}

button{
    margin-left: 350px;
    margin-bottom: 5px;
    background-color: rgb(183, 46, 46);
    border: 1px solid rgb(183, 46, 46);
}

button:hover{
    background-color: #CCC9DC;
    color: rgb(183, 46, 46);
    cursor: pointer;
}

select{
    background-color: #CCC9DC;
    color: black;
    margin-left: 300px;
}
</style>
<script setup>
import { ref } from 'vue';
import Notas from './calcularNota.vue'

const notasMinimas = [70, 60, 50]
const notas = ref([]);
let mensaje = ref('');

function guardarNotas(nota){
    notas.value.push(nota);
    for(let i = 0; i < notas.value.length; i++){
        for(let j = 0; j < notas.value[i].length; j++){
            if(notas.value[i][j] < notasMinimas[i]){
                mensaje.value = 'Suspenso';
                return;
            }
        }
    }

    mensaje.value = 'Aprobado';
    console.log(notas.value);
}
</script>

<template>
    <h1>Calcular notas</h1>
    <br>
    <p>Alumno {{ mensaje }}</p>
    <div class="contenedor">
        <div v-for="numero in 3" class="evaluaciones">
            <Notas :key="numero" :evaluacion="numero" class="evaluaciones" @aniadirNotas="guardarNotas"></Notas>
        </div>
    </div>

</template>

<style scoped>
.contenedor {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
    gap: 20px;
    padding: 20px
}

.evaluaciones{
    width:100%;
}
</style>
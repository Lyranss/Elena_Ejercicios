<script setup>
import { ref } from 'vue';
import Notas from './calcularNota.vue'


</script>

<template>
    <h1>Calcular notas</h1>
    <div class="contenedor">
        <div v-for="numero in 3" class="evaluaciones">
            <Notas :key="numero" :evaluacion="numero" class="evaluaciones"></Notas>
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
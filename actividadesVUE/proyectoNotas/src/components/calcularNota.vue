<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    evaluacion: Number
})

const notasMinimas = [70, 60, 50]
const notas = ref([]);
const recuperacion = ref();
const examenesAprobados = computed(() => {
    let aprobados = 0;
    for (let i = 0; i < notas.value.length; i++) {
        if (notas.value[i] >= notasMinimas[props.evaluacion - 1]) {
            aprobados++;
        }
    }
    return aprobados;
})

</script>

<template>
    <div class="panel-notas">
        <h4>Evaluación {{ evaluacion }}</h4>
        <br>
        <div class="tarjeta-notas" style="max-width: 18rem;">
            <div v-if="examenesAprobados === 3 || recuperacion >= 50" 
                class="estado-evaluacion estado-ok">Evaluación aprobada</div>
            <div v-else class="estado-evaluacion estado-ko">Evaluación suspensa</div>
            <div class="card-body">
                <div v-for="examen in 3" class="bloque-examen">
                    <label for="exampleFormControlInput1" class="form-label">Examen {{ examen }}</label>
                    <div class="form-field">
                        <input v-model.number="notas[examen - 1]" type="number" min="0" max="100" class="form-control"
                            :class="notas[examen - 1] >= notasMinimas[evaluacion - 1] ? 'is-valid' : 'is-invalid'"
                            id="exampleFormControlInput1" placeholder="Escribe una nota">
                        <div v-if="notas[examen - 1] < 0 || notas[evaluacion - 1] > 100" class="form-text">
                            Nota inválida
                        </div>
                        <div v-else-if="notas[examen - 1] >= notasMinimas[evaluacion - 1]" class="form-text"
                            style="color: green;">
                            Aprobado
                        </div>
                        <div v-else class="form-text" style="color: red;">
                            Suspenso
                        </div>
                    </div>
                </div>

                <div>
                    <div class="progreso-examenes">
                        <div :class="examenesAprobados >= 1 ? 'examen-aprobado' : 'examen-suspenso'"></div>
                        <div :class="examenesAprobados >= 2 ? 'examen-aprobado' : 'examen-suspenso'"></div>
                        <div :class="examenesAprobados === 3 ? 'examen-aprobado' : 'examen-suspenso'"></div>
                    </div>
                    <br>
                    <span class="strength-text"></span>
                </div>
                <div v-if="examenesAprobados !== 3" class="bloque-examen">
                    <label for="exampleFormControlInput1" class="form-label">Recuperación</label>
                    <div>   
                        <input v-model.number="recuperacion" type="number" min="0" max="10" class="form-control"
                            :class="recuperacion >= 50 ? 'is-valid' : 'is-invalid'"
                            id="exampleFormControlInput1" placeholder="Escribe una nota">
                        <div v-if="recuperacion < 0 || recuperacion > 100" class="form-text">
                            Nota inválida
                        </div>
                        <div v-else-if="recuperacion >= 50" class="form-text"
                            style="color: green;">
                            Aprobado
                        </div>
                        <div v-else class="form-text" style="color: red;">
                            Suspenso
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.panel-notas {
    width: 100%;
    padding: 15px;
    background: #f0ebfa;
    border-radius: 20px;
}

.tarjeta-notas {
    max-width: 100% !important;
    border: none !important;
    border-radius: 20px;
    background: white;
    box-shadow: 0 8px 25px rgba(73, 51, 111, 0.12);
}

.estado-evaluacion {
    padding: 18px;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
}

.estado-ok {
    background-color: #d9f3e5;
    color: #26774c;
}

.estado-ko {
    background-color: #fbe0e7;
    color: #b94360;
}

.bloque-examen {
    background: #f8f6fc;
    border: 1px solid #ece5f7;
    border-radius: 14px;
    padding: 15px;
    margin-bottom: 15px;
}

.progreso-examenes {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 15px auto;
}

.examen-aprobado,
.examen-suspenso {
    width: 25%;
    height: 12px;
    border-radius: 20px;
    flex: none;
    float: none;
    transition: 0.3s;
}

.examen-aprobado {
    background: #68c595;
}

.examen-suspenso {
    background: #e4deed;
}
</style>
<template>
  <div>
    <form @submit.prevent="save">
      <input type="text" placeholder="Nombres" v-model="datos.nombres" />
      <input type="text" placeholder="Apellidos" v-model="datos.apellidos" />
      <input type="text" max="8" placeholder="Dni" v-model="datos.dni" />
      <button type="submit">Enviar</button>
    </form>

    <p>
      {{ datos }}
    </p>

    <br />

    <p v-if="loading">Cargando...</p>
    <div v-else>
      <obtener-personas :personas="personas"></obtener-personas>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from "vue";
  import useApi from "../hooks/useApi";
  import ObtenerPersonas from "./ObtenerPersonas.vue";

  export default {
    components: { ObtenerPersonas },
    setup() {
      const loading = ref(true);
      const { savePersona, personas, getPersonas } = useApi();

      const datos = ref({
        nombres: null,
        apellidos: null,
        dni: null,
      });

      onMounted(() => {
        obtener();
      });

      const obtener = async () => {
        await getPersonas();
        loading.value = false;
      };

      const save = async (context) => {
        // console.log(datos.value);
        await savePersona({ ...datos.value });
        obtener();
      };

      return { datos, save, personas, obtener, loading };
    },
  };
</script>

<style>
</style>
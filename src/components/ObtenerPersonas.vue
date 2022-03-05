<template>
  <div>
    <ol>
      <li class="lista" v-for="(persona, i) in personas" :key="i">
        {{ persona.dni }} | {{ persona.nombres + " " + persona.apellidos }}
      </li>
    </ol>
  </div>
</template>

<script>
  import useApi from "../hooks/useApi";

  export default {
    name: "ObtenerPersonas",
    props: {
      personas: Object,
    },
  };
</script>

<style scoped>
  .lista {
    color: brown;
  }
</style>
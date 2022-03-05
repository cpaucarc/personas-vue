import { ref } from "vue";

export default function useApi() {
    const personas = ref(null);

    const getPersonas = async () => {
        const res = await fetch(`http://personas.test/control/persona/getPeople.php`);
        const data = await res.json();
        personas.value = data;
    }

    const savePersona = async (datos) => {
        console.log('Datos', datos);

        var params = new URLSearchParams();
        params.append('nombres', datos.nombres);
        params.append('apellidos', datos.apellidos);
        params.append('dni', datos.dni);

        const res = await axios.post('http://personas.test/control/persona/savePerson.php', params)

        const data = await res.data;
        // console.log('hola: ' + data);
        // personas.value = data;
        // console.log('personas ' + personas.value);
    }

    return {
        personas,
        savePersona,
        getPersonas
    }
}
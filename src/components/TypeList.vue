<script>
import store from '../store';
import axios from 'axios';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`)
                .then((response) => {
                    console.log(response);
                    this.types = response.data.results;
                })

                .catch((error) => {
                    console.error(error);

                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }

                })
        }
    },
    created() {
        this.getTypes()
    }
}
</script>

<template>
    <select v-if="types.length>0">
        <option v-for="type in types ">{{ type.name }}</option>
    </select>
</template>



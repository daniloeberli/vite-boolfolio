<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "TypePage",
    data(){
        return {
            store,
            type: null
        }
    },
    methods: {
        getType(){
            axios.get(`${this.store.apiBaseUrl}/types/${this.route.params.slug}`)
                 .then((response)=>{
                    console.log(response);
                    this.type = response.data.results;
                 })
        }
    },
    created(){
        this.getType();
    }
}
</script>

<template>
    <section v-if="type">
      <h1>Type: {{ type.name }}</h1>
      <ul>
        <li v-for="project in type.project"> {{ project.name }}</li>
      </ul>
    </section>
</template>


<style scoped>
</style>
<script>
import store from '../store';
import axios from 'axios';
export default {
    name: 'TechnologyList',
    data() {
        return {
            store,
            currentTechnology: '',
            technologies: []
        }
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.apiBaseUrl}/technologies`)
                .then((response) => {
                    // console.log(response);
                    this.technologies = response.data.results;
                })

                .catch((error) => {
                    console.error(error);

                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }

                })
        },
        changePage(){
            //console.log(this.currentType);
            this.$router.push({name: 'technology',params: {slug: this.currentTechnology}});
        }
    },
    created() {
        this.getTechnologies()
    }
}
</script>

<template>
    <select v-if="technologies.length>0" @change="changePage" v-model="currentTechnology">
        <option :value="technology.slug" v-for="technology in technologies ">{{ technology.name }}</option>
    </select>
</template>

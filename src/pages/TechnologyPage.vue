<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "TechnologyPage",
    data() {
        return {
            store,
            technology: null

        }
    },
    methods: {
        getTechnology() {
            axios.get(`${this.store.apiBaseUrl}/technologies/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.technology = response.data.results;
                })
        }
    },
    created() {
        this.getTechnology();
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({ toParams })
                console.log({ previousParams })
                this.getTechnology();
            }
        )
    }
}
</script>

<template>
    <section v-if="technology">
        <h1>technology: {{ technology.name }}</h1>
        <ul>
            <li v-for="project in technology.projects"> {{ project.title }}</li>
        </ul>
    </section>
</template>


<style scoped></style>
<script >
import axios from 'axios';
import AppCard from './AppCard.vue';
export default{
    name: 'AppMain',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
    },
    components: {
        AppCard
    },
    methods: {
        getProjects() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects)
                 .then((response) => {
                    //console.log(response);
                    this.projects = response.data.results;
                 })
                 .catch((error) => {
                    console.error(error);
                 })
        }
    },
    created(){
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col col-md-4" v-for="data in projects">
                    <AppCard :data="data"></AppCard>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
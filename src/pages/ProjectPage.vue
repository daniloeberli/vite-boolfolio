<script >
import axios from 'axios';
// import AppCard from './AppCard.vue';
export default{
    name: 'ProjectPage',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
    },
    // components: {
    //     AppCard
    // },
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
        <h2>sono project page</h2>
    </main>
</template>

<style scoped>

</style>
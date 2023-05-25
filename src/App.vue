<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
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
        AppHeader,
        AppFooter,
        AppMain
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
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>

<style scoped></style>

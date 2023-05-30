<script >
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
export default{
    name: 'ProjectDetailPage',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: null,
            error: {
                status: false,
                message: ''
            }
        }
    },
    //  components: {
    //      AppCard
    //  },
    methods: {
        getProjects() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.id)
                 .then((response) => {
                    console.log(response);
                    this.projects = response.data.results;
                 })
                 .catch((error) => {
                    console.error(error);
                    this.error.status = true;
                    this.error.message = error.message;
                 })
        }
    },
    created(){
        this.getProjects();
    }
}
</script>

<template>
      <section v-if="projects">
        <h1>SONO NELLA SHOW</h1>
        <div class="container">
            <h1 class="mt-5 mb-3">{{ projects.title }}</h1>
        </div>
    </section>
    <section v-if="error.status">
        <div class="container">
            <p>{{ error.message }}</p>
        </div>
    </section>
</template>

<style scoped>

</style>
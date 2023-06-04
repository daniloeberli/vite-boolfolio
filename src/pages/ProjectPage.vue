<script >
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
export default {
    name: 'ProjectPage',
    data() {
        return {
            currentPage: 1,
            showButton: true,
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
            axios.get(this.apiBaseUrl + this.apiUrls.projects, {
                params: {
                    page: this.currentPage
                }
            })
                .then((response) => {
                    //console.log(response);
                    this.projects = response.data.results;


                    const results = response.data.results.data ?? response.data.results;
                    const moreProjects = response.data.results.next_page_url ?? null;

                    this.projects = [...this.projects, ...results];
                })

                .catch((error) => {
                    console.error(error);

                    if(error.response.status === 404){
                        console.log('ciaooo');
                        this.$router.push({name: 'not-found'}); 
                    }

                })
        },
        nextPage() {
            this.currentPage += 1;
            this.getProjects();
            console.log('click');
        }
    },
    created() {
        this.getProjects();
        // console.log(this.projects);
    }
}
</script>

<template>
    <main>
        <h3>TEST</h3>
        <div class="container">
            <div class="row">
                <div class="col col-md-4" v-for="data in projects">
                    <AppCard :data="data"></AppCard>
                </div>
            </div>
            <!-- <div class="text-center my-5"><button class="btn btn-primary" @click.prevent="nextPage">Mostra altri</button></div> -->
        </div>
    </main>
</template>

<style scoped></style>
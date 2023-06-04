<script>
import store from '../store';
import axios from 'axios';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            currentType: '',
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`)
                .then((response) => {
                    // console.log(response);
                    this.types = response.data.results;
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
            this.$router.push({name: 'type',params: {slug: this.currentType}});
        }
    },
    created() {
        this.getTypes();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getTypes();
            }
        )
    }
}
</script>

<template>
    <select v-if="types.length > 0" @change="changePage" v-model="currentType">
        <option :value="type.slug" v-for="type in types ">{{ type.name }}</option>
    </select>
</template>



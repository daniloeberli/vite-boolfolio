<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <AppFooter></AppFooter>
</template>

<style scoped></style>

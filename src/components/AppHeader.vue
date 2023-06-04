<script >
import TechnologyList from './TechnologyList.vue';
import TypeList from './TypeList.vue';

export default{
    name: "AppHeader",
    components: { TypeList, TechnologyList }
}
</script>

<template>
    <header>
        <h1>header</h1>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
            </li>
            <li>
                <TypeList></TypeList>
            </li>
            <li>
                <TechnologyList></TechnologyList>
            </li>
        </ul>
    </header>
</template>

<style scoped>

</style>
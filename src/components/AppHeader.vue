<script >
export default{
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <h1>header</h1>
        <ul>
            <li>
                <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
            </li>
            <!-- <li>
                <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
            </li> -->
        </ul>
    </header>
</template>

<style scoped>

</style>
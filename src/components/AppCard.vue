<script >
export default {
    name: 'AppCard',
    data() {
        return {

        }
    },
    props: {
        data: Object
    }
}
</script>

<template>
    <div class="card">
        <img  class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text">{{ data.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped></style>
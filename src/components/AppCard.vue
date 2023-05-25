<script >
export default {
    name: 'AppCard',
    data() {
        return {
            descriptionLenght: 50
        }
    },
    props: {
        data: Object
    }
}
</script>

<template>
    <div class="card">
        <img v-if="data.image"  class="card-img-top" :src="data.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text">{{ data.description.substring(0,descriptionLenght) + '...'}}</p>
            <p class="card-text">{{ data.type.name }}</p>
        </div>
    </div>
</template>

<style scoped></style>
<template>
    <div class="catalog-item">
        <img src="" alt="img">
        <p>Item</p>
        <p>Price: 1</p>
        <button class="btn">Add to cart</button>
    </div>
</template>
<script>
export default {
    name: 'catalog-item',
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>
<style lang="scss"> 
    .catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &__image {
            width: 100px;
        }
    }
</style>
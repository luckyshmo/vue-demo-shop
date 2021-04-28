<template>
    <div>
        <p>catalog</p>
        <catalog-item />
        <catalog-item />
        <catalog-item />
    </div>
</template>
<script>
import CatalogItem from './catalog-item.vue'

export default {
    name: 'catalog',
    components: {
        CatalogItem
    },
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style lang="scss">
    .v-catalog {
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
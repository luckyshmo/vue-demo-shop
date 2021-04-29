<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
            <catalog-item />
            <catalog-item />
            <catalog-item />
        </div>
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
    .catalog {
        &__list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
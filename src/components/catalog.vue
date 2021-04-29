<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
            <catalog-item
                v-for="product in products"
                :key="product.article"
                v-bind:product_data="product"
                @sendArticle="showChildArticle"
            />
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
        return {
            products: [
                {
                    image: "1.png",
                    name: "T-shirt 1",
                    price: 2100.234234234,
                    article: "T1",
                    available: true,
                    category: "Мужские"
                },
            ]
        }
    },
    computed: {},
    methods: {
        showChildArticle(data){
            console.log(data)
        }
    }
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
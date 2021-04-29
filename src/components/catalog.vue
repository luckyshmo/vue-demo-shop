<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
            <catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                v-bind:product_data="product"
                @sendArticle="showChildArticle"
            />
        </div>
    </div>
</template>
<script>
import CatalogItem from './catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'catalog',
    components: {
        CatalogItem
    },
    props: {},
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
        showChildArticle(data){
            console.log(data)
        }
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response.data) {
                console.log(response.data)
            }
        })
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
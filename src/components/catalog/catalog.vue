<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="catalog__link_to_cart"> CART: {{CART.length}} </div>
        </router-link>
        <h1>Catalog</h1>
        <v-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
        />
        <div class="catalog__list">
            <catalog-item
                v-for="product in filteredProducts"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>
<script>
import catalogItem from './catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '../select.vue'

export default {
    name: 'catalog',
    components: {
        catalogItem,
        vSelect
    },
    props: {},
    data() {
        return {
            categories: [
              {name: 'All', value: 'all'},
              {name: 'Мужские', value: 'm'},
              {name: 'Женские', value: 'w'}
            ],
            selected: 'All',
            sortedProducts: []
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
        filteredProducts(){
          if (this.sortedProducts.length) {
            return this.sortedProducts
          }
          return this.PRODUCTS
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        sortByCategories(category){
          this.sortedProducts = []
          let vm = this
          this.PRODUCTS.map(function (item){
            if (item.category === category.name) {
              vm.sortedProducts.push(item)
            }
          })
          this.selected = category.name
        },
        addToCart(data){
            this.ADD_TO_CART(data)
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
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
      justify-content: space-between;
      align-items: center;
      grid-gap: 30px;
    }
    &__link_to_cart {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>
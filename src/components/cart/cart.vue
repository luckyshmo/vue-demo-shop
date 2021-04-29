<template>
    <div>
      <router-link :to="{name: 'catalog'}">
            <div class="catalog__link_to_cart"> Back </div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!cart_data.length">Cart is empty</p>
        <CartItem 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
    </div>
</template>
<script>
import CartItem from './cart-item'
import {mapActions} from 'vuex'

export default {
    name: 'cart',
    components: {
        CartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
}
</script>
<style lang="scss">
    .cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      background: $green-bg;
      color: #ffffff;
      font-size: 20px;
    }

    .total__name {
      margin-right: $margin*2;
    }
    }
</style>
<template>
    <div class="main-wrapper">
        <catalog/>
        <cart 
            v-if="CART.length"
            :cart_data="CART"
        />
    </div>
</template>
<script>
import catalog from './catalog/catalog.vue'
import cart from './cart/cart'
import {mapGetters} from 'vuex'

export default {
    name: 'main-wrapper',
    components: {
        catalog,
        cart,
    },
    props: {},
    data() {
        return {
        }
    },
    methods: {},
    watch: {},
    mounted() { //fully loaded component
        console.log("I'am ALIVE!")
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
}
</script>

<style>
    .main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>
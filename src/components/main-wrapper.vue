<template>
    <div class="main-wrapper">
        <p>{{title}}</p>
        <catalog/>
        <cart/>
    </div>
</template>
<script>
import catalog from './catalog.vue'
import cart from './cart'

export default {
    name: 'main-wrapper',
    components: {
        catalog,
        cart,
    },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() { //fully loaded component
        console.log("I'am ALIVE!")
    },
}
</script>

<style>
    .main-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>
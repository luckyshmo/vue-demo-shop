<template>
    <div class="main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>

export default {
    name: 'main-wrapper',
    components: {
        // catalog,
        // cart,
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
    computed: {},
}
</script>

<style>
    .main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>
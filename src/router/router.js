import Vue from 'vue'
import Router from 'vue-router'

import catalog from '../components/catalog/catalog'
import cart from '../components/cart/cart'
import mainPage from '../components/main/main'
// import productPage from '../components/catalog/product-page'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalog
    },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: productPage
    // },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      props: true
    }
  ]
})

export default router;
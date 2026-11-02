import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductFormView from '../views/ProductFormView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductsView
    },
    {
      path: '/productos/crear',
      name: 'crear-producto',
      component: ProductFormView
    },
    {
      path: '/productos/:id',
      name: 'editar-producto',
      component: ProductFormView
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CartView
    }
  ]
})

export default router

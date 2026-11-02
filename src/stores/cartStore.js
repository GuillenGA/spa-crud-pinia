import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Estado global del carrito
  const items = ref([])

  // Getters
  const totalItems = computed(() => {
    return items.value.reduce((acc, item) => acc + item.cantidad, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
  })

  // Actions (Lógica de negocio del carrito en Pinia)
  const addToCart = (product) => {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.cantidad++
    } else {
      items.value.push({
        id: product.id,
        nombre: product.nombre,
        precio: Number(product.precio),
        cantidad: 1
      })
    }
  }

  const removeFromCart = (id) => {
    items.value = items.value.filter(item => item.id !== Number(id))
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  }
})

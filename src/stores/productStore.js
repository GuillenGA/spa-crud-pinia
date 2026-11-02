import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('products', () => {
  // Estado global de productos
  const products = ref([
    { id: 1, nombre: 'SSD Kingston KC3000 1TB NVMe M.2', precio: 1850, categoria: 'Almacenamiento' },
    { id: 2, nombre: 'Tarjeta Gráfica AMD Radeon RX 6600 8GB', precio: 4200, categoria: 'Componentes' },
    { id: 3, nombre: 'Bobina Cable UTP Cat6 100% Cobre (305m)', precio: 2950, categoria: 'Redes' },
    { id: 4, nombre: 'Memoria RAM DDR4 16GB 3200MHz', precio: 780, categoria: 'Componentes' },
    { id: 5, nombre: 'Fuente de Poder 650W 80 Plus Bronze', precio: 1150, categoria: 'Energía' }
  ])

  let nextId = 6

  // Getters
  const totalProducts = computed(() => products.value.length)

  const getProductById = (id) => {
    return products.value.find(product => product.id === Number(id))
  }

  // Actions (Toda la lógica CRUD concentrada en el Store)
  const addProduct = (productData) => {
    products.value.push({
      id: nextId++,
      nombre: productData.nombre.trim(),
      precio: Number(productData.precio),
      categoria: productData.categoria?.trim() || 'General'
    })
  }

  const updateProduct = (id, updatedData) => {
    const index = products.value.findIndex(product => product.id === Number(id))
    if (index !== -1) {
      products.value[index] = {
        id: Number(id),
        nombre: updatedData.nombre.trim(),
        precio: Number(updatedData.precio),
        categoria: updatedData.categoria?.trim() || 'General'
      }
    }
  }

  const deleteProduct = (id) => {
    products.value = products.value.filter(product => product.id !== Number(id))
  }

  return {
    products,
    totalProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
  }
})

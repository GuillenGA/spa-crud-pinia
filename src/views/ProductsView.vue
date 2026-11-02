<script setup>
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '../stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()
</script>

<template>
  <div>
    <div class="header-bar">
      <h2>📦 Lista de Productos</h2>
      <router-link to="/productos/crear" class="btn btn-primary">
        + Crear Producto
      </router-link>
    </div>

    <!-- Uso de directiva v-if para mostrar estado vacío -->
    <div v-if="productStore.products.length === 0" class="card empty-state">
      <h3>No hay productos registrados</h3>
      <p>Agrega un nuevo producto para comenzar a llenar el catálogo.</p>
      <router-link to="/productos/crear" class="btn btn-primary" style="margin-top: 1rem;">
        Registrar Primer Producto
      </router-link>
    </div>

    <!-- Uso de directiva v-for para renderizar la lista de productos -->
    <div v-else>
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="card product-item"
      >
        <div class="product-info">
          <span class="category-badge">{{ product.categoria }}</span>
          <h3>{{ product.nombre }}</h3>
          <p class="price">${{ Number(product.precio).toFixed(2) }} MXN</p>
        </div>

        <div class="product-actions">
          <button @click="cartStore.addToCart(product)" class="btn btn-success">
            🛒 Agregar al carrito
          </button>
          <router-link :to="`/productos/${product.id}`" class="btn btn-warning">
            ✏️ Editar
          </router-link>
          <button @click="productStore.deleteProduct(product.id)" class="btn btn-danger">
            🗑️ Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.empty-state {
  text-align: center;
  padding: 2.5rem;
  color: #64748b;
}
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.category-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  background: #e2e8f0;
  color: #334155;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 0.35rem;
}
.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-top: 0.25rem;
}
.product-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>

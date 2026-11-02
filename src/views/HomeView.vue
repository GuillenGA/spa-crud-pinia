<script setup>
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '../stores/cartStore'

const productStore = useProductStore()
const cartStore = useCartStore()
</script>

<template>
  <div class="card">
    <h1>Bienvenido a TechStore SPA</h1>
    <p class="subtitle">
      Proyecto Unidad 3 – Single Page Application (SPA) con CRUD de productos, Carrito de Compras,
      gestión de estado global con <strong>Pinia</strong> y navegación con <strong>Vue Router</strong>.
    </p>

    <div class="stats-grid">
      <div class="stat-box blue-box">
        <h3>📦 Productos en Catálogo</h3>
        <p class="stat-number">{{ productStore.totalProducts }}</p>
      </div>
      <div class="stat-box green-box">
        <h3>🛒 Artículos en Carrito</h3>
        <p class="stat-number">{{ cartStore.totalItems }}</p>
      </div>
      <div class="stat-box purple-box">
        <h3>💰 Total Acumulado</h3>
        <p class="stat-number">${{ cartStore.totalPrice.toFixed(2) }}</p>
      </div>
    </div>

    <div class="quick-actions">
      <router-link to="/productos" class="btn btn-primary">Ver Lista de Productos</router-link>
      <router-link to="/productos/crear" class="btn btn-success">+ Registrar Producto</router-link>
      <router-link to="/carrito" class="btn btn-secondary">Ir al Carrito</router-link>
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  margin: 0.75rem 0 1.5rem;
  color: #475569;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.75rem;
}
.stat-box {
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.blue-box { background: #eff6ff; color: #1e3a8a; }
.green-box { background: #f0fdf4; color: #14532d; }
.purple-box { background: #faf5ff; color: #581c87; }
.stat-number {
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0.4rem;
}
.quick-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
</style>

<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2 style="margin-bottom: 1.25rem;">🛒 Resumen del Carrito de Compras</h2>

    <!-- Directiva v-if para mostrar cuando el carrito está vacío -->
    <div v-if="cartStore.items.length === 0" class="card empty-cart">
      <h3>Tu carrito está vacío</h3>
      <p style="margin: 0.5rem 0 1.25rem; color: #64748b;">
        Aún no has agregado productos a tu pedido.
      </p>
      <router-link to="/productos" class="btn btn-primary">
        Ir a la Lista de Productos
      </router-link>
    </div>

    <!-- Directiva v-else y v-for para listar productos añadidos -->
    <div v-else>
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="card cart-item"
      >
        <div>
          <h3>{{ item.nombre }}</h3>
          <p class="item-meta">
            Precio unitario: <strong>${{ Number(item.precio).toFixed(2) }} MXN</strong> |
            Cantidad: <strong>{{ item.cantidad }}</strong>
          </p>
        </div>

        <div class="item-right">
          <span class="subtotal">
            ${{ (item.precio * item.cantidad).toFixed(2) }} MXN
          </span>
          <button @click="cartStore.removeFromCart(item.id)" class="btn btn-danger">
            Eliminar del carrito
          </button>
        </div>
      </div>

      <!-- Total acumulado y botón para vaciar carrito -->
      <div class="card cart-summary">
        <div>
          <p style="color: #475569; font-size: 0.95rem;">
            Total de artículos: <strong>{{ cartStore.totalItems }}</strong>
          </p>
          <h3 class="grand-total">
            Total Acumulado: ${{ cartStore.totalPrice.toFixed(2) }} MXN
          </h3>
        </div>
        <button @click="cartStore.clearCart()" class="btn btn-warning">
          🧹 Vaciar Carrito
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty-cart {
  text-align: center;
  padding: 2.5rem;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.item-meta {
  color: #475569;
  margin-top: 0.25rem;
}
.item-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.subtotal {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
}
.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: #f8fafc;
  border-top: 4px solid #2563eb;
}
.grand-total {
  font-size: 1.5rem;
  color: #0f172a;
  margin-top: 0.2rem;
}
</style>

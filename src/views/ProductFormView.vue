<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/productStore'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

// Determina si la ruta es de edición (/productos/:id) o creación (/productos/crear)
const isEditing = computed(() => Boolean(route.params.id))

const form = ref({
  nombre: '',
  precio: '',
  categoria: ''
})

const errorMsg = ref('')

onMounted(() => {
  if (isEditing.value) {
    const existing = productStore.getProductById(route.params.id)
    if (existing) {
      form.value = {
        nombre: existing.nombre,
        precio: existing.precio,
        categoria: existing.categoria
      }
    } else {
      router.push('/productos')
    }
  }
})

const handleSubmit = () => {
  if (!form.value.nombre.trim() || Number(form.value.precio) <= 0) {
    errorMsg.value = 'Por favor ingresa un nombre válido y un precio mayor a $0.'
    return
  }

  if (isEditing.value) {
    productStore.updateProduct(route.params.id, form.value)
  } else {
    productStore.addProduct(form.value)
  }

  router.push('/productos')
}
</script>

<template>
  <div class="card form-card">
    <h2>{{ isEditing ? '✏️ Editar Producto Existente' : '📝 Crear Nuevo Producto' }}</h2>

    <!-- Uso de directiva v-if para mostrar estado de error en el formulario -->
    <div v-if="errorMsg" class="alert-error">
      {{ errorMsg }}
    </div>

    <!-- Uso de v-model para enlace bidireccional de datos -->
    <form @submit.prevent="handleSubmit" class="product-form">
      <div class="form-group">
        <label for="nombre">Nombre del Producto *</label>
        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          placeholder="Ej. Monitor Gamer 24 pulgadas 144Hz"
          required
        />
      </div>

      <div class="form-group">
        <label for="precio">Precio Unitario (MXN) *</label>
        <input
          id="precio"
          v-model.number="form.precio"
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Ej. 3250.00"
          required
        />
      </div>

      <div class="form-group">
        <label for="categoria">Categoría</label>
        <input
          id="categoria"
          v-model="form.categoria"
          type="text"
          placeholder="Ej. Periféricos, Redes, Almacenamiento"
        />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">
          {{ isEditing ? 'Actualizar Producto' : 'Guardar Producto' }}
        </button>
        <router-link to="/productos" class="btn btn-secondary">
          Cancelar
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-card {
  max-width: 580px;
  margin: 0 auto;
}
.alert-error {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: 600;
}
.product-form {
  margin-top: 1.25rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
}
.form-group label {
  font-weight: 600;
  font-size: 0.92rem;
  color: #334155;
}
.form-group input {
  padding: 0.65rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
}
.form-group input:focus {
  outline: 2px solid #2563eb;
  border-color: transparent;
}
.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
</style>

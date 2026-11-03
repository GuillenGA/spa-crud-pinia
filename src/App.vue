<script setup>
import { useCartStore } from './stores/cartStore'
const cartStore = useCartStore()
</script>

<template>
  <div class="app-layout">
    <header class="navbar">
      <div class="nav-brand">⚡ TechStore SPA</div>
      <nav class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/productos">Productos</router-link>
        <router-link to="/carrito" class="cart-link">
          🛒 Carrito <span class="badge">{{ cartStore.totalItems }}</span>
        </router-link>
      </nav>
    </header>

    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
  background-color: #f1f5f9;
  color: #1e293b;
  line-height: 1.5;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f172a;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.nav-brand {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #38bdf8;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
}

.nav-links a:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.nav-links a.router-link-exact-active {
  color: #38bdf8;
  font-weight: 700;
  background: rgba(56, 189, 248, 0.12);
}

.badge {
  background: #38bdf8;
  color: #0f172a;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
  margin-left: 0.25rem;
}

.container {
  max-width: 980px;
  margin: 2rem auto;
  padding: 0 1.25rem;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
}

.btn {
  padding: 0.55rem 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s, transform 0.1s;
}



<script setup lang="ts">
import { menuCategories, products } from '~/data/products'
import type { ProductCategory } from '~/types'

const activeCategory = ref<'Todos' | ProductCategory>('Todos')

const filteredProducts = computed(() =>
  activeCategory.value === 'Todos'
    ? products
    : products.filter((product) => product.category === activeCategory.value)
)

useSeoMeta({
  title: 'Cardápio — Café Aurora',
  description:
    'Conheça o cardápio do Café Aurora: cafés especiais, bebidas, doces e salgados feitos à mão todos os dias.'
})
</script>

<template>
  <div class="py-16 sm:py-24">
    <header class="container-page text-center">
      <p class="eyebrow">Feito na hora</p>
      <h1 class="mt-4 text-4xl sm:text-5xl">Nosso cardápio</h1>
      <p class="mx-auto mt-4 max-w-md text-muted">
        Sabores preparados para tornar seu momento ainda melhor.
      </p>
    </header>

    <div class="container-page mt-10">
      <div
        class="flex flex-wrap justify-center gap-3"
        role="tablist"
        aria-label="Filtrar por categoria"
      >
        <button
          v-for="category in menuCategories"
          :key="category"
          type="button"
          role="tab"
          :aria-selected="activeCategory === category"
          class="rounded-full border px-5 py-2.5 text-sm font-medium transition"
          :class="
            activeCategory === category
              ? 'border-espresso bg-espresso text-cream'
              : 'border-espresso/15 bg-white text-espresso hover:border-espresso/40'
          "
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <p class="sr-only" aria-live="polite">
        {{ filteredProducts.length }} produtos em {{ activeCategory }}
      </p>

      <div class="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.slug"
          :product="product"
          cta-label="Adicionar"
        />
      </div>
    </div>
  </div>
</template>

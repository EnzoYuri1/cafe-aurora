<script setup lang="ts">
import RevealOnScroll from '~/components/RevealOnScroll.vue'
import { menuCategories, products } from '~/data/products'
import type { ProductCategory } from '~/types'

const activeCategory = ref<'Todos' | ProductCategory>('Todos')

const searchQuery = ref('')
const debouncedQuery = ref('')

let debounceTimer: ReturnType<typeof setTimeout> | undefined

watch(searchQuery, (value) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    debouncedQuery.value = value
  }, 150)
})

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const byCategory = computed(() =>
  activeCategory.value === 'Todos'
    ? products
    : products.filter((product) => product.category === activeCategory.value)
)

const filteredProducts = computed(() => {
  const query = normalize(debouncedQuery.value)
  if (!query) return byCategory.value
  return byCategory.value.filter((product) => normalize(product.name).includes(query))
})

const hasSearchTerm = computed(() => debouncedQuery.value.trim().length > 0)

const clearSearch = () => {
  searchQuery.value = ''
  debouncedQuery.value = ''
}

onUnmounted(() => clearTimeout(debounceTimer))

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
      <div class="relative mx-auto max-w-md">
        <svg
          aria-hidden="true"
          class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Buscar no cardápio..."
          aria-label="Buscar no cardápio"
          class="w-full rounded-full border border-espresso/15 bg-white py-3 pl-11 pr-4 text-sm placeholder:text-muted focus:border-olive focus:outline-none dark:border-cream/15 dark:bg-espresso dark:text-cream"
        >
      </div>

      <div
        class="mt-6 flex flex-wrap justify-center gap-3"
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
              : 'border-espresso/15 bg-white text-espresso hover:border-espresso/40 dark:border-cream/15 dark:bg-espresso dark:text-cream dark:hover:border-cream/40'
          "
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <p class="sr-only" aria-live="polite">
        {{ filteredProducts.length }} produtos em {{ activeCategory }}
      </p>

      <div v-if="filteredProducts.length > 0" class="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <RevealOnScroll
          v-for="(product, index) in filteredProducts"
          :key="product.slug"
          :delay="index * 80"
        >
          <ProductCard :product="product" cta-label="Adicionar" :priority="index === 0" />
        </RevealOnScroll>
      </div>

      <div v-else class="mt-16 text-center">
        <p class="font-serif text-xl">
          Nenhum item encontrado para
          <span class="text-olive-dark">“{{ debouncedQuery }}”</span>
        </p>
        <p v-if="hasSearchTerm" class="mt-2 text-sm text-muted">
          Tente buscar por outro nome de produto.
        </p>
        <button type="button" class="btn-secondary mt-6" @click="clearSearch">
          Limpar busca
        </button>
      </div>
    </div>
  </div>
</template>
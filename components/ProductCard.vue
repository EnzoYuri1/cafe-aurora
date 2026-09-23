<script setup lang="ts">
import type { Product } from '~/types'

withDefaults(
  defineProps<{
    product: Product
    ctaLabel?: string
  }>(),
  { ctaLabel: 'Pedir agora' }
)
</script>

<template>
  <NuxtLink
    :to="`/produto/${product.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    :aria-label="`Ver detalhes de ${product.name}`"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="product.image"
        :alt="product.imageAlt"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        width="900"
        height="675"
      >
    </div>
    <div class="flex flex-1 flex-col gap-2 p-6">
      <div class="flex items-baseline justify-between gap-3">
        <h3 class="text-xl">{{ product.name }}</h3>
        <p class="font-sans text-sm font-semibold text-espresso">
          {{ formatPrice(product.price) }}
        </p>
      </div>
      <p class="text-sm leading-relaxed text-muted">{{ product.shortDescription }}</p>
      <span
        class="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-olive-dark transition group-hover:gap-2.5"
        aria-hidden="true"
      >
        {{ ctaLabel }} <span>→</span>
      </span>
    </div>
  </NuxtLink>
</template>

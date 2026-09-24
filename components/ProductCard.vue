<script setup lang="ts">
import type { Product } from '~/types'

const props = withDefaults(
  defineProps<{
    product: Product
    ctaLabel?: string
  }>(),
  { ctaLabel: 'Pedir agora' }
)

const cart = useCartStore()

const addToCart = () => {
  cart.addItem({
    slug: props.product.slug,
    name: props.product.name,
    image: props.product.image,
    size: null,
    addons: [],
    quantity: 1,
    unitPrice: props.product.price
  })
  cart.openCart()
}
</script>

<template>
  <div
    class="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift dark:bg-espresso"
  >
    <NuxtLink
      :to="`/produto/${product.slug}`"
      class="flex flex-1 flex-col"
      :aria-label="`Ver detalhes de ${product.name}`"
    >
      <div class="aspect-[4/3] w-full overflow-hidden">
        <LazyImage
          :src="product.image"
          :alt="product.imageAlt"
          class="h-full w-full"
          img-class="transition duration-500 group-hover:scale-105"
          width="900"
          height="675"
        />
      </div>
      <div class="flex flex-1 flex-col gap-2 p-6">
        <div class="flex items-baseline justify-between gap-3">
          <h3 class="text-xl">{{ product.name }}</h3>
          <p class="font-sans text-sm font-semibold text-espresso dark:text-cream">
            {{ formatPrice(product.price) }}
          </p>
        </div>
        <p class="text-sm leading-relaxed text-muted">{{ product.shortDescription }}</p>
      </div>
    </NuxtLink>

    <div class="px-6 pb-6">
      <button
        v-if="ctaLabel === 'Adicionar'"
        type="button"
        class="btn-primary w-full"
        @click="addToCart"
      >
        <span aria-live="polite">Adicionar</span> <span aria-hidden="true">→</span>
      </button>
      <NuxtLink
        v-else
        :to="`/produto/${product.slug}`"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-olive-dark transition group-hover:gap-2.5"
        :aria-label="`${ctaLabel} ${product.name}`"
      >
        {{ ctaLabel }} <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </div>
</template>
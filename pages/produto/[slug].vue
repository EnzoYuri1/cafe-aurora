<script setup lang="ts">
import { addonOptions, getRelatedProducts, getProductBySlug, sizeOptions } from '~/data/products'

const route = useRoute()
const cart = useCartStore()

const slug = computed(() => String(route.params.slug))
const product = computed(() => getProductBySlug(slug.value))

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Produto não encontrado',
    fatal: true
  })
}

const current = product.value!
const isDrink = current.category === 'Cafés' || current.category === 'Bebidas'

const related = getRelatedProducts(current, 4)

const selectedSize = ref('Pequeno')
const selectedAddons = ref<string[]>([])
const quantity = ref(1)

const sizeSurcharge = computed(
  () => sizeOptions.find((option) => option.label === selectedSize.value)?.surcharge ?? 0
)

const addonsTotal = computed(() =>
  selectedAddons.value.reduce(
    (sum, label) => sum + (addonOptions.find((option) => option.label === label)?.price ?? 0),
    0
  )
)

const unitPrice = computed(() => current.price + (isDrink ? sizeSurcharge.value : 0) + addonsTotal.value)
const total = computed(() => unitPrice.value * quantity.value)

const addedFeedback = ref(false)
let feedbackTimer: ReturnType<typeof setTimeout> | undefined

const addToCart = () => {
  cart.addItem({
    slug: current.slug,
    name: current.name,
    image: current.image,
    size: isDrink ? selectedSize.value : null,
    addons: [...selectedAddons.value],
    quantity: quantity.value,
    unitPrice: unitPrice.value
  })
  cart.openCart()
  addedFeedback.value = true
  clearTimeout(feedbackTimer)
  feedbackTimer = setTimeout(() => {
    addedFeedback.value = false
  }, 2000)
}

onUnmounted(() => clearTimeout(feedbackTimer))

useSeoMeta({
  title: `${current.name} — Café Aurora`,
  description: current.description,
  ogTitle: `${current.name} — Café Aurora`,
  ogDescription: current.shortDescription,
  ogImage: current.image
})
</script>

<template>
  <div>
    <section class="py-14 sm:py-20" aria-labelledby="produto-title">
      <div class="container-page">
        <nav aria-label="Trilha de navegação" class="mb-8 text-sm text-muted">
          <NuxtLink to="/" class="hover:text-espresso hover:underline hover:underline-offset-4">
            Início
          </NuxtLink>
          <span aria-hidden="true"> / </span>
          <NuxtLink to="/cardapio" class="hover:text-espresso hover:underline hover:underline-offset-4">
            Cardápio
          </NuxtLink>
          <span aria-hidden="true"> / </span>
          <span class="text-espresso">{{ current.name }}</span>
        </nav>

        <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <LazyImage
            :src="current.image"
            :alt="current.imageAlt"
            class="h-[320px] w-full rounded-card shadow-soft sm:h-[480px]"
            width="900"
            height="900"
          />

          <div class="max-w-xl">
            <p class="eyebrow">Cafés da casa</p>
            <h1 id="produto-title" class="mt-4 text-4xl sm:text-5xl">{{ current.name }}</h1>

            <div class="mt-4 flex items-center gap-2 text-sm">
              <span class="text-olive" aria-hidden="true">★★★★★</span>
              <span class="sr-only">Avaliação {{ current.rating.toFixed(1) }} de 5</span>
              <span class="text-muted">
                {{ current.rating.toFixed(1).replace('.', ',') }} · {{ current.reviewCount }} avaliações
              </span>
            </div>

            <p class="mt-5 text-3xl font-semibold">{{ formatPrice(total) }}</p>
            <p v-if="unitPrice !== current.price" class="mt-1 text-xs text-muted">
              {{ formatPrice(unitPrice) }} por unidade
            </p>

            <p class="mt-5 leading-relaxed text-muted">{{ current.description }}</p>

            <div v-if="isDrink" class="mt-8">
              <h2 class="text-sm font-semibold text-espresso">Escolha o tamanho</h2>
              <div class="mt-3">
                <SizeSelector v-model="selectedSize" :options="sizeOptions" :product-id="current.name" />
              </div>
            </div>

            <div class="mt-8">
              <h2 class="text-sm font-semibold text-espresso">Adicionais</h2>
              <div class="mt-3">
                <AddonSelector v-model="selectedAddons" :options="addonOptions" />
              </div>
            </div>

            <div class="mt-8">
              <h2 class="text-sm font-semibold text-espresso">Quantidade</h2>
              <div class="mt-3">
                <QuantitySelector v-model="quantity" />
              </div>
            </div>

            <button type="button" class="btn-secondary mt-9 w-full sm:w-auto" @click="addToCart">
              <span aria-live="polite">
                {{ addedFeedback ? 'Adicionado ao pedido ✓' : 'Adicionar ao pedido →' }}
              </span>
            </button>

            <p v-if="addedFeedback" class="mt-3 text-sm text-olive-dark">
              Item adicionado.
              <button
                type="button"
                class="underline underline-offset-4"
                @click="cart.openCart()"
              >
                Ver pedido
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-espresso/10 py-14 sm:py-20 dark:border-cream/10" aria-labelledby="relacionados-title">
      <div class="container-page">
        <h2 id="relacionados-title" class="text-2xl sm:text-3xl">
          Você também pode gostar
        </h2>
        <div class="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <RevealOnScroll
            v-for="(item, index) in related"
            :key="item.slug"
            :delay="index * 80"
          >
            <ProductCard
              :product="item"
              cta-label="Ver detalhes"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>

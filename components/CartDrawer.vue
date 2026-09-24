<script setup lang="ts">
const cart = useCartStore()

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && cart.isOpen) cart.closeCart()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="cart.isOpen"
        class="fixed inset-0 z-50 bg-espresso-deep/50"
        aria-hidden="true"
        @click="cart.closeCart()"
      />
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="cart.isOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Seu pedido"
        class="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-cream shadow-lift dark:bg-espresso-deep sm:max-w-[420px]"
      >
        <header class="flex items-center justify-between border-b border-espresso/10 px-6 py-5 dark:border-cream/10">
          <h2 class="text-xl">Seu pedido</h2>
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5 dark:text-cream dark:hover:bg-cream/5"
            aria-label="Fechar carrinho"
            @click="cart.closeCart()"
          >
            <svg aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div class="flex-1 overflow-y-auto px-6 py-5">
          <div v-if="cart.items.length === 0" class="flex flex-col items-center py-14 text-center">
            <span class="flex h-14 w-14 items-center justify-center rounded-full bg-cream-dark text-olive-dark dark:bg-espresso dark:text-olive-light" aria-hidden="true">
              <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5v15m0 0h3.75a2.25 2.25 0 0 0 0-4.5H13.5m0 4.5V9.75A2.25 2.25 0 0 0 11.25 7.5H7.5A2.25 2.25 0 0 0 5.25 9.75v5.25m8.25-10.5H18A2.25 2.25 0 0 1 20.25 7.5v.75A2.25 2.25 0 0 1 18 10.5h-4.5"
                />
              </svg>
            </span>
            <p class="mt-4 font-serif text-lg text-espresso">Seu carrinho está vazio</p>
            <NuxtLink
              to="/cardapio"
              class="btn-primary mt-5"
              @click="cart.closeCart()"
            >
              Ver cardápio
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>

          <ul v-else class="space-y-4">
            <li
              v-for="item in cart.items"
              :key="item.id"
              class="flex gap-4 rounded-2xl bg-white p-4 shadow-soft dark:bg-espresso"
            >
              <LazyImage
                :src="item.image"
                :alt="item.name"
                class="h-16 w-16 shrink-0 rounded-xl"
                width="64"
                height="64"
              />
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <p class="truncate text-sm font-semibold text-espresso dark:text-cream">{{ item.name }}</p>
                  <button
                    type="button"
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-espresso/5 hover:text-espresso dark:hover:bg-cream/10 dark:hover:text-cream"
                    :aria-label="`Remover ${item.name} do pedido`"
                    @click="cart.removeItem(item.id)"
                  >
                    <svg aria-hidden="true" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>

                <p class="mt-0.5 text-xs text-muted">
                  <template v-if="item.size">{{ item.size }} · </template>
                  <template v-if="item.addons.length">{{ item.addons.join(', ') }} · </template>
                  {{ formatPrice(item.unitPrice) }} por unidade
                </p>

                <div class="mt-2 flex items-center justify-between gap-3">
                  <div
                    class="inline-flex items-center gap-1 rounded-full border border-espresso/15 bg-cream p-0.5 dark:border-cream/15 dark:bg-espresso-deep"
                    role="group"
                    :aria-label="`Quantidade de ${item.name}`"
                  >
                    <button
                      type="button"
                      class="flex h-7 w-7 items-center justify-center rounded-full text-base text-espresso transition hover:bg-espresso/5 disabled:cursor-not-allowed disabled:opacity-30 dark:text-cream dark:hover:bg-cream/5"
                      aria-label="Diminuir quantidade"
                      :disabled="item.quantity <= 1"
                      @click="cart.setQuantity(item.id, item.quantity - 1)"
                    >
                      −
                    </button>
                    <span class="min-w-6 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                      {{ item.quantity }}
                    </span>
                    <button
                      type="button"
                      class="flex h-7 w-7 items-center justify-center rounded-full text-base text-espresso transition hover:bg-espresso/5 dark:text-cream dark:hover:bg-cream/5"
                      aria-label="Aumentar quantidade"
                      @click="cart.setQuantity(item.id, item.quantity + 1)"
                    >
                      +
                    </button>
                  </div>
                  <p class="text-sm font-semibold text-espresso dark:text-cream">
                    {{ formatPrice(item.unitPrice * item.quantity) }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <footer v-if="cart.items.length > 0" class="border-t border-espresso/10 bg-cream/80 px-6 pb-6 pt-4 dark:border-cream/10 dark:bg-espresso-deep/80">
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted">Subtotal</span>
            <span class="font-medium text-espresso dark:text-cream">{{ formatPrice(cart.total) }}</span>
          </div>
          <div class="mt-1.5 flex items-center justify-between">
            <span class="text-sm font-medium text-espresso dark:text-cream">Total</span>
            <span class="text-xl font-semibold text-espresso dark:text-cream">{{ formatPrice(cart.total) }}</span>
          </div>
          <button type="button" class="btn-secondary mt-4 w-full" aria-label="Finalizar pedido">
            Finalizar pedido →
          </button>
          <button
            type="button"
            class="mt-2 w-full py-2 text-center text-xs text-muted underline-offset-4 hover:text-espresso hover:underline"
            @click="cart.clearCart()"
          >
            Limpar pedido
          </button>
        </footer>
      </aside>
    </Transition>
  </Teleport>
</template>
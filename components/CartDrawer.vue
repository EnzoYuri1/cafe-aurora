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
        class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-lift"
      >
        <header class="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <h2 class="text-xl">Seu pedido</h2>
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5"
            aria-label="Fechar carrinho"
            @click="cart.closeCart()"
          >
            <svg aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div class="flex-1 overflow-y-auto px-6 py-5">
          <p v-if="cart.items.length === 0" class="py-12 text-center text-sm text-muted">
            Seu pedido está vazio.
            <NuxtLink to="/cardapio" class="mt-3 block font-medium text-olive-dark underline underline-offset-4" @click="cart.closeCart()">
              Ver cardápio →
            </NuxtLink>
          </p>

          <ul v-else class="space-y-4">
            <li
              v-for="item in cart.items"
              :key="item.id"
              class="flex gap-4 rounded-2xl bg-white p-4 shadow-soft"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="h-16 w-16 shrink-0 rounded-xl object-cover"
                width="64"
                height="64"
              >
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <p class="truncate text-sm font-semibold text-espresso">{{ item.name }}</p>
                  <button
                    type="button"
                    class="text-xs text-muted underline-offset-4 transition hover:text-espresso hover:underline"
                    :aria-label="`Remover ${item.name} do pedido`"
                    @click="cart.removeItem(item.id)"
                  >
                    Remover
                  </button>
                </div>
                <p class="mt-0.5 text-xs text-muted">
                  <template v-if="item.size">{{ item.size }} · </template>
                  <template v-if="item.addons.length">{{ item.addons.join(', ') }} · </template>
                  {{ item.quantity }}×
                </p>
                <p class="mt-1 text-sm font-medium text-espresso">
                  {{ formatPrice(item.unitPrice * item.quantity) }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <footer v-if="cart.items.length > 0" class="border-t border-espresso/10 px-6 py-5">
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted">Subtotal</span>
            <span class="font-semibold text-espresso">{{ formatPrice(cart.total) }}</span>
          </div>
          <button type="button" class="btn-primary mt-4 w-full" aria-label="Finalizar pedido">
            Finalizar pedido →
          </button>
          <button
            type="button"
            class="mt-2 w-full py-2 text-center text-xs text-muted underline-offset-4 hover:underline"
            @click="cart.clearCart()"
          >
            Limpar pedido
          </button>
        </footer>
      </aside>
    </Transition>
  </Teleport>
</template>

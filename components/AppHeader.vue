<script setup lang="ts">
const route = useRoute()
const cart = useCartStore()
const colorMode = useColorMode()

const links = [
  { label: 'Início', to: '/' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Contato', to: '/#contato' }
]

const isDark = computed(() => colorMode.value === 'dark')

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  if (to.startsWith('/#')) return false
  return route.path.startsWith(to)
}

const isOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-espresso/5 bg-cream/90 backdrop-blur dark:border-line dark:bg-[#1C1410]/95">
    <div class="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 font-serif text-lg font-semibold tracking-wide text-espresso dark:text-ink-primary"
        aria-label="Café Aurora — página inicial"
      >
        <span>CAFÉ AURORA</span>
      </NuxtLink>

      <nav aria-label="Navegação principal" class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="text-sm font-medium text-espresso/75 transition hover:text-espresso dark:text-ink-secondary dark:hover:text-ink-primary"
          :class="{ 'text-espresso dark:text-ink-primary': isActive(link.to) }"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <ClientOnly>
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5 dark:text-ink-primary dark:hover:bg-surface-tertiary"
            :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
            @click="toggleColorMode"
          >
            <svg v-if="isDark" aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            <svg v-else aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
          <template #fallback>
            <div
              aria-hidden="true"
              class="flex h-11 w-11 items-center justify-center rounded-full text-espresso/40 dark:text-ink-muted"
            >
              <span class="h-5 w-5 rounded-full border border-current opacity-40" />
            </div>
          </template>
        </ClientOnly>

        <button
          type="button"
          class="relative flex h-11 w-11 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5 dark:text-ink-primary dark:hover:bg-surface-tertiary"
          :aria-label="`Abrir carrinho, ${cart.count} itens`"
          @click="cart.openCart()"
        >
          <svg aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span
            v-if="cart.count > 0"
            class="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-olive px-1 text-[11px] font-semibold text-cream dark:bg-accent dark:text-btn-text"
          >
            {{ cart.count }}
          </span>
        </button>

        <NuxtLink to="/cardapio" class="btn-primary hidden sm:inline-flex">
          Ver cardápio
          <span aria-hidden="true">→</span>
        </NuxtLink>

        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-full text-espresso transition hover:bg-espresso/5 md:hidden dark:text-ink-primary dark:hover:bg-surface-tertiary"
          :aria-expanded="isOpen"
          aria-controls="menu-mobile"
          aria-label="Abrir menu"
          @click="isOpen = !isOpen"
        >
          <svg v-if="!isOpen" aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
          <svg v-else aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-if="isOpen"
      id="menu-mobile"
      aria-label="Navegação mobile"
      class="border-t border-espresso/5 bg-cream px-5 py-4 md:hidden dark:border-line dark:bg-surface-primary"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in links" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="block rounded-lg px-3 py-3 text-sm font-medium text-espresso transition hover:bg-espresso/5 dark:text-ink-primary dark:hover:bg-surface-tertiary"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li class="pt-2">
          <NuxtLink to="/cardapio" class="btn-primary w-full">Ver cardápio →</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

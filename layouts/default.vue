<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="conteudo" class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <CartDrawer />
  </div>
</template>

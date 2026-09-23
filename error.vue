<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } }>()

const isNotFound = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: isNotFound.value ? 'Página não encontrada — Café Aurora' : 'Erro — Café Aurora'
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-cream px-5 text-center">
    <p class="eyebrow">{{ error?.statusCode || 500 }}</p>
    <h1 class="mt-4 text-4xl">
      {{ isNotFound ? 'Esse sabor não existe.' : 'Algo deu errado.' }}
    </h1>
    <p class="mt-3 max-w-md text-muted">
      {{
        isNotFound
          ? 'O produto que você procura não está no cardápio — talvez tenha saído de temporada.'
          : 'Tente novamente em instantes.'
      }}
    </p>
    <div class="mt-8 flex gap-4">
      <NuxtLink to="/" class="btn-primary">Voltar ao início</NuxtLink>
      <NuxtLink to="/cardapio" class="btn-secondary">Ver cardápio</NuxtLink>
    </div>
  </div>
</template>

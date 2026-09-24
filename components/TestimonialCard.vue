<script setup lang="ts">
defineProps<{
  quote: string
  author: string
}>()
</script>

<template>
  <figure class="flex h-full flex-col rounded-card bg-white p-7 shadow-soft dark:bg-surface-secondary">
    <div class="flex gap-1 text-sm text-olive dark:text-accent" aria-label="Avaliação: 5 de 5 estrelas">
      <span v-for="n in 5" :key="n" aria-hidden="true">★</span>
    </div>
    <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-espresso/80">
      “{{ quote }}”
    </blockquote>
    <figcaption class="mt-5 text-sm font-semibold text-espresso dark:text-ink-primary">{{ author }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: 'coffee' | 'leaf' | 'hand' | 'home' | 'sparkles' | 'sprout'
}>()

const paths: Record<string, string> = {
  coffee:
    'M10 2v2 M14 2v2 M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1 M6 2v2',
  leaf:
    'M11 20a10 10 0 0 0 10-10a25.9 25.9 0 0 0-1.04-7.281a1 1 0 0 0-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0 0 11 20 M2 21a5 5 0 0 1 2.911-4.544C7.613 15.212 8.351 15.24 11 13',
  hand:
    'M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2 M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2 M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8 M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15',
  home: 'M2.25 12l8.955-8.955a1.125 1.125 0 0 1 1.59 0L21.75 12M4.5 9.75V20a1 1 0 0 0 1 1h4.5v-4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21H19.5a1 1 0 0 0 1-1V9.75',
  sparkles:
    'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
  sprout:
    'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M12 12.75A4.5 4.5 0 0 0 7.5 8.25c-.75 0-1.5.187-2.14.52A5.526 5.526 0 0 0 3.75 12.75v1.125H12m0 0v-1.5M9 11.25A5.25 5.25 0 0 1 14.25 6'
}
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <span
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream-dark text-olive-dark dark:bg-surface-tertiary dark:text-accent"
      aria-hidden="true"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
        <path stroke-linecap="round" stroke-linejoin="round" :d="paths[icon]" />
      </svg>
    </span>
    <div>
      <h3 class="text-lg text-espresso">{{ title }}</h3>
      <p class="mt-1.5 text-sm leading-relaxed text-muted">{{ description }}</p>
    </div>
  </div>
</template>

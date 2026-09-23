<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: 'coffee' | 'leaf' | 'hand' | 'home' | 'sparkles' | 'sprout'
}>()

const paths: Record<string, string> = {
  coffee:
    'M13.5 4.5v15m0 0h3.75a2.25 2.25 0 0 0 0-4.5H13.5m0 4.5V9.75A2.25 2.25 0 0 0 11.25 7.5H7.5A2.25 2.25 0 0 0 5.25 9.75v5.25m8.25-10.5H18A2.25 2.25 0 0 1 20.25 7.5v.75A2.25 2.25 0 0 1 18 10.5h-4.5',
  leaf: 'M12 21c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 2.48-1 4.73-2.62 6.35M12 21V9m0 0c-2-1.5-5-2-7-1.5M12 12c1.5-2 1.5-5 0-7',
  hand: 'M9 11V6.75a1.5 1.5 0 1 1 3 0V11m0-1.5a1.5 1.5 0 1 1 3 0V12m0-1a1.5 1.5 0 1 1 3 0v4.5A5.25 5.25 0 0 1 12.75 21h-1.5A5.25 5.25 0 0 1 6 15.75V13a1.5 1.5 0 1 1 3 0',
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
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream-dark text-olive-dark"
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

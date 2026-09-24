<script setup lang="ts">
const props = defineProps<{
  modelValue: number
  min?: number
}>()

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

const min = computed(() => props.min ?? 1)

const increment = () => emit('update:modelValue', props.modelValue + 1)
const decrement = () => {
  if (props.modelValue > min.value) {
    emit('update:modelValue', props.modelValue - 1)
  }
}
</script>

<template>
  <div
    class="inline-flex items-center gap-1 rounded-full border border-espresso/15 bg-white p-1 dark:border-line dark:bg-surface-tertiary"
    role="group"
    aria-label="Quantidade"
  >
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-full text-lg text-espresso transition hover:bg-espresso/5 disabled:cursor-not-allowed disabled:opacity-30 dark:text-ink-primary dark:hover:bg-surface-tertiary"
      aria-label="Diminuir quantidade"
      :disabled="modelValue <= min"
      @click="decrement"
    >
      −
    </button>
    <span
      class="min-w-8 text-center text-sm font-semibold tabular-nums"
      aria-live="polite"
      aria-label="Quantidade atual"
    >
      {{ modelValue }}
    </span>
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-full text-lg text-espresso transition hover:bg-espresso/5 dark:text-ink-primary dark:hover:bg-surface-tertiary"
      aria-label="Aumentar quantidade"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

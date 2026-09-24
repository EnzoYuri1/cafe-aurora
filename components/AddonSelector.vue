<script setup lang="ts">
import type { AddonOption } from '~/types'

const props = defineProps<{
  modelValue: string[]
  options: AddonOption[]
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string[]] }>()

const toggle = (label: string) => {
  const current = [...props.modelValue]
  const index = current.indexOf(label)
  if (index >= 0) {
    current.splice(index, 1)
  } else {
    current.push(label)
  }
  emit('update:modelValue', current)
}
</script>

<template>
  <div class="flex flex-wrap gap-3" role="group" aria-label="Adicionais">
    <button
      v-for="option in options"
      :key="option.label"
      type="button"
      :aria-pressed="modelValue.includes(option.label)"
      class="rounded-full border px-5 py-2.5 text-sm font-medium transition"
      :class="
        modelValue.includes(option.label)
          ? 'border-olive bg-olive text-cream dark:border-accent dark:bg-surface-tertiary dark:text-ink-primary'
          : 'border-espresso/15 bg-white text-espresso hover:border-espresso/40 dark:border-line dark:bg-surface-secondary dark:text-ink-secondary dark:hover:border-accent-hover'
      "
      @click="toggle(option.label)"
    >
      {{ option.label }}
      <span class="ml-1 text-xs opacity-75">
        {{ option.price > 0 ? `+${formatPrice(option.price)}` : 'grátis' }}
      </span>
    </button>
  </div>
</template>

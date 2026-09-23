<script setup lang="ts">
import type { SizeOption } from '~/types'

defineProps<{
  modelValue: string
  options: SizeOption[]
  productId?: string
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div
    class="flex flex-wrap gap-3"
    role="radiogroup"
    :aria-label="productId ? `Tamanho para ${productId}` : 'Escolha o tamanho'"
  >
    <button
      v-for="option in options"
      :key="option.label"
      type="button"
      role="radio"
      :aria-checked="modelValue === option.label"
      class="rounded-full border px-5 py-2.5 text-sm font-medium transition"
      :class="
        modelValue === option.label
          ? 'border-espresso bg-espresso text-cream'
          : 'border-espresso/15 bg-white text-espresso hover:border-espresso/40'
      "
      @click="emit('update:modelValue', option.label)"
    >
      {{ option.label }}
      <span v-if="option.surcharge > 0" class="ml-1 text-xs opacity-70">
        +{{ formatPrice(option.surcharge) }}
      </span>
    </button>
  </div>
</template>

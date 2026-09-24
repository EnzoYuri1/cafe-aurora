<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    width?: number | string
    height?: number | string
    loading?: 'lazy' | 'eager'
    imgClass?: string
    class?: string
  }>(),
  { loading: 'lazy', imgClass: '' }
)

const loaded = ref(false)
</script>

<template>
  <div class="relative overflow-hidden" :class="class">
    <ImageSkeleton v-if="!loaded" />
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      class="h-full w-full object-cover transition-opacity duration-500 ease-out"
      :class="[imgClass, loaded ? 'opacity-100' : 'opacity-0']"
      @load="loaded = true"
    >
  </div>
</template>
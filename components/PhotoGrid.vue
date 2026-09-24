<script setup lang="ts">
interface GalleryPhoto {
  id: string
  src: string
  alt: string
}

defineProps<{
  photos: GalleryPhoto[]
}>()
</script>

<template>
  <div class="grid gap-5 sm:grid-cols-3">
    <figure
      v-for="photo in photos"
      :key="photo.id"
      class="overflow-hidden rounded-card shadow-soft"
    >
      <NuxtImg
        :src="photo.src"
        :alt="photo.alt"
        class="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105"
        loading="lazy"
        :width="400"
        :height="300"
      />
    </figure>
  </div>
</template>
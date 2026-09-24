<script setup lang="ts">
const features = [
  {
    icon: 'coffee' as const,
    title: 'Café especial',
    description: 'Grãos selecionados e torra cuidadosa.'
  },
  {
    icon: 'leaf' as const,
    title: 'Ingredientes frescos',
    description: 'Qualidade que você sente em cada receita.'
  },
  {
    icon: 'sparkles' as const,
    title: 'Produção artesanal',
    description: 'Feito em pequenos lotes, todos os dias.'
  },
  {
    icon: 'sprout' as const,
    title: 'Sustentabilidade',
    description: 'Escolhas responsáveis do campo à xícara.'
  }
]

const galleryPhotos = [
  {
    id: 'v60',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    alt: 'Barista preparando café pelo método de filtro V60 para uma cliente'
  },
  {
    id: 'clientes',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Grupo de clientes conversando e sorrindo em uma mesa da cafeteria'
  },
  {
    id: 'interior',
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80',
    alt: 'Interior da cafeteria com plantas, prateleiras e balcão'
  }
]

useSeoMeta({
  title: 'Sobre nós — Café Aurora',
  description:
    'Conheça a história do Café Aurora: uma torrefação que começou pequena e segue torrando em lotes reduzidos, assando diariamente e recebendo cada pessoa como parte da casa.'
})
</script>

<template>
  <div>
    <header class="container-page py-16 text-center sm:py-24">
      <p class="eyebrow">Um pouco da nossa história</p>
      <h1 class="mt-4 text-4xl sm:text-5xl">Sobre nós</h1>
      <p class="mx-auto mt-4 max-w-md text-muted">
        Duas amigas, uma ideia simples e o desejo de fazer cada momento contar.
      </p>
    </header>

    <!-- Nossa história -->
    <section class="container-page pb-16 sm:pb-24" aria-labelledby="historia-title">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
<div class="overflow-hidden rounded-2xl shadow-md">
          <LazyImage
            src="https://images.unsplash.com/photo-1758525225676-329ddcedf78f?w=800&auto=format&fit=crop&q=80"
            alt="Ana e Laura tomando café juntas no Café Aurora"
            class="h-[320px] w-full sm:h-[440px]"
            width="1200"
            height="900"
          />
        </div>
        <RevealOnScroll>
        <div class="max-w-xl">
          <p class="eyebrow">Desde 2018</p>
          <h2 id="historia-title" class="mt-4 text-3xl sm:text-4xl">
            Uma pausa verdadeira no meio da cidade.
          </h2>
          <p class="mt-6 leading-relaxed text-muted">
            O Café Aurora nasceu do encontro entre Ana e Laura e de uma ideia
            simples: criar um lugar onde o tempo pudesse passar mais devagar.
            Começamos com uma pequena torrefação e seis mesas, escolhendo
            pessoalmente cada produtor e cada receita.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            Hoje, continuamos torrando em lotes reduzidos, assando diariamente
            e recebendo cada pessoa como parte da casa. Café bom, para nós, é
            aquele que aproxima.
          </p>
        </div>
      </RevealOnScroll>
      </div>
    </section>

    <!-- Nossa filosofia -->
    <section aria-labelledby="filosofia-title">
      <div class="container-page pb-16 sm:pb-24">
        <RevealOnScroll>
          <div class="mx-auto max-w-2xl text-center">
            <p class="eyebrow">O que guia o nosso trabalho</p>
            <h2 id="filosofia-title" class="mt-4 text-3xl sm:text-4xl">
              Nossa filosofia
            </h2>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <RevealOnScroll
            v-for="(feature, index) in features"
            :key="feature.title"
            :delay="index * 80"
          >
            <FeatureIcon
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </RevealOnScroll>
        </div>
      </div>

      <div class="bg-sage py-16 sm:py-24 dark:bg-[#2F3B2F]">
        <div class="container-page">
          <RevealOnScroll>
            <PhotoGrid :photos="galleryPhotos" />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>
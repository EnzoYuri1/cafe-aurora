<script setup lang="ts">
import RevealOnScroll from '~/components/RevealOnScroll.vue'
import { products } from '~/data/products'

const featured = ['cappuccino', 'cold-brew', 'croissant']
  .map((slug) => products.find((p) => p.slug === slug)!)
  .filter(Boolean)

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
    icon: 'hand' as const,
    title: 'Produção artesanal',
    description: 'Feito em pequenos lotes, todos os dias.'
  },
  {
    icon: 'home' as const,
    title: 'Ambiente acolhedor',
    description: 'Uma pausa leve, do seu jeito.'
  }
]

const testimonials = [
  {
    quote:
      'O cappuccino é perfeito e o ambiente faz a gente querer ficar mais um pouco.',
    author: 'Marina Lopes'
  },
  {
    quote:
      'Atendimento gentil, café excelente e um croissant que vale cada camada.',
    author: 'Rafael Mendes'
  },
  {
    quote: 'Virou meu lugar favorito para começar o dia com calma.',
    author: 'Clara Nogueira'
  }
]

useSeoMeta({
  title: 'Café Aurora — Café especial e comida feita à mão',
  description:
    'Café Aurora: café especial, preparado com carinho, e um espaço acolhedor no Centro de São Paulo. Conheça nosso cardápio.',
  ogTitle: 'Café Aurora — O café que transforma seu momento.',
  ogDescription:
    'Café especial, comida feita à mão e um espaço para viver o tempo com mais calma.',
  ogImage: featured[0]?.image
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="overflow-hidden" aria-labelledby="hero-title">
      <div class="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div class="max-w-xl">
          <p class="eyebrow">Café artesanal • desde cedo</p>
          <h1 id="hero-title" class="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            O café que transforma seu momento.
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-muted">
            Café especial, preparado com carinho para começar bem o seu dia.
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <NuxtLink to="/cardapio" class="btn-primary">
              Conheça nosso cardápio
              <span aria-hidden="true">→</span>
            </NuxtLink>
            <NuxtLink to="#favoritos" class="btn-secondary">
              Ver favoritos
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <NuxtImg
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=75"
            alt="Interior aconchegante da cafeteria com xícara de café em primeiro plano"
            class="h-[360px] w-full rounded-card object-cover shadow-lift sm:h-[460px]"
            loading="eager"
            :width="800"
            :height="600"
            fetchpriority="high"
            preload
          />
        </div>
      </div>
    </section>

    <!-- Favoritos -->
    <section id="favoritos" class="py-16 sm:py-24" aria-labelledby="favoritos-title">
      <div class="container-page">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <RevealOnScroll>
            <div>
              <p class="eyebrow">Escolhas da casa</p>
              <h2 id="favoritos-title" class="mt-4 text-3xl sm:text-4xl">Nossos favoritos</h2>
            </div>
          </RevealOnScroll>
          <p class="max-w-sm text-sm leading-relaxed text-muted md:text-right">
            Receitas queridas, ingredientes selecionados e preparo cuidadoso em cada pedido.
          </p>
        </div>

        <div class="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <RevealOnScroll
            v-for="(product, index) in featured"
            :key="product.slug"
            :delay="index * 80"
          >
            <ProductCard :product="product" />
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <!-- Sobre -->
    <section id="sobre" class="bg-white py-16 sm:py-24 dark:bg-surface-secondary" aria-labelledby="sobre-title">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <NuxtImg
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=75"
          alt="Interior da cafeteria com mesas de madeira e luz natural"
          class="h-[320px] w-full rounded-card object-cover shadow-soft sm:h-[440px]"
          loading="lazy"
          :width="800"
          :height="600"
        />
        <RevealOnScroll>
          <div class="max-w-xl">
            <p class="eyebrow">Nossa essência</p>
            <h2 id="sobre-title" class="mt-4 text-3xl sm:text-4xl">Feito para desacelerar.</h2>
            <p class="mt-6 leading-relaxed text-muted">
              O Café Aurora nasceu para criar pausas verdadeiras no meio da rotina.
              Selecionamos grãos de pequenos produtores, torramos em lotes reduzidos e
              preparamos cada receita à mão — sempre com cuidado, frescor e tempo.
            </p>
            <p class="mt-4 leading-relaxed text-muted">
              Um espaço acolhedor para conversar, trabalhar ou simplesmente apreciar um bom café.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <!-- Diferenciais -->
    <section id="diferenciais" class="py-16 sm:py-24" aria-labelledby="diferenciais-title">
      <div class="container-page">
        <RevealOnScroll>
          <div class="max-w-2xl">
            <p class="eyebrow">Por que Aurora?</p>
            <h2 id="diferenciais-title" class="mt-4 text-3xl sm:text-4xl">
              Cuidado em cada detalhe
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
    </section>

    <!-- Depoimentos -->
    <section class="bg-sage py-16 sm:py-24 dark:bg-surface-tertiary" aria-labelledby="depoimentos-title">
      <div class="container-page">
        <RevealOnScroll>
            <div class="max-w-2xl">
              <p class="eyebrow">Boas conversas</p>
              <h2 id="depoimentos-title" class="mt-4 text-3xl sm:text-4xl">
                O que nossos clientes dizem
              </h2>
            </div>
          </RevealOnScroll>
        <div class="mt-12 grid gap-7 md:grid-cols-3">
          <RevealOnScroll
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.author"
            :delay="index * 80"
          >
            <TestimonialCard
              :quote="testimonial.quote"
              :author="testimonial.author"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contato">
    <section class="bg-espresso-deep py-20 text-center text-cream dark:bg-surface-primary" aria-labelledby="cta-title">
      <div class="container-page max-w-3xl">
        <h2 id="cta-title" class="text-3xl sm:text-4xl">
          Seu próximo café favorito está aqui.
        </h2>
        <p class="mt-4 text-cream/70">
          Venha descobrir sabores feitos para acompanhar bons momentos.
        </p>
        <NuxtLink to="/cardapio" class="btn-light mt-8">
          Conheça o cardápio
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </section>

    <section class="bg-espresso py-16 text-cream/85 dark:bg-surface-secondary">
      <div class="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p class="flex items-center gap-2 font-serif text-lg font-semibold text-cream">
             CAFÉ AURORA
          </p>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
            Café especial, comida feita à mão e um espaço para viver o tempo com mais calma.
          </p>
          <div class="mt-6 flex gap-4 text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cream/75 underline-offset-4 transition hover:text-cream hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cream/75 underline-offset-4 transition hover:text-cream hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Onde estamos
          </h3>
          <address class="mt-4 space-y-1 text-sm not-italic text-cream/75">
            <p>Rua das Flores, 128</p>
            <p>Centro • São Paulo, SP</p>
          </address>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Horário de funcionamento
          </h3>
          <div class="mt-4 space-y-1 text-sm text-cream/75">
            <p>Seg-Sex: 7h às 19h</p>
            <p>Sáb-Dom: 8h às 18h</p>
          </div>
        </div>
      </div>

      <div class="container-page mt-12 border-t border-cream/10 pt-6">
        <p class="text-center text-xs text-cream/50">
          © {{ year }} Café Aurora. Todos os direitos reservados.
        </p>
      </div>
    </section>
  </footer>
</template>

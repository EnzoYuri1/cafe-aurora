import type { Product, ProductCategory } from '~/types'

const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const products: Product[] = [
  {
    slug: 'espresso',
    name: 'Espresso',
    category: 'Cafés',
    price: 8.9,
    shortDescription: 'Intenso, encorpado e final doce.',
    description:
      'Extraído na medida certa, nosso espresso é intenso e encorpado, com crema densa e um final delicadamente doce.',
    image: unsplash('photo-1510707577719-ae7c14805e3a'),
    imageAlt: 'Xícara de espresso com crema dourada',
    rating: 4.8,
    reviewCount: 96
  },
  {
    slug: 'cappuccino',
    name: 'Cappuccino',
    category: 'Cafés',
    price: 12.9,
    shortDescription: 'Espresso, leite cremoso e um toque de cacau.',
    description:
      'Espresso encorpado, leite vaporizado com textura aveludada e um toque delicado de cacau por cima.',
    image: unsplash('photo-1572442388796-11668a67e53d'),
    imageAlt: 'Cappuccino com desenho de latte art',
    rating: 4.9,
    reviewCount: 128
  },
  {
    slug: 'latte',
    name: 'Latte',
    category: 'Cafés',
    price: 13.9,
    shortDescription: 'Espresso suave com leite vaporizado.',
    description:
      'Um espresso suave envelopado em leite vaporizado, cremoso e equilibrado para qualquer momento do dia.',
    image: unsplash('photo-1541167760496-1628856ab772'),
    imageAlt: 'Latte em xícara branca sobre mesa de madeira',
    rating: 4.7,
    reviewCount: 84
  },
  {
    slug: 'mocha',
    name: 'Mocha',
    category: 'Cafés',
    price: 14.9,
    shortDescription: 'Café, chocolate e leite cremoso.',
    description:
      'A combinação envolvente de espresso, chocolate meio amargo e leite vaporizado, finalizada com cacau.',
    image: unsplash('photo-1578374173705-969cbe6f2d6b'),
    imageAlt: 'Mocha com cobertura de chantilly e cacau',
    rating: 4.8,
    reviewCount: 72
  },
  {
    slug: 'cold-brew',
    name: 'Cold Brew',
    category: 'Bebidas',
    price: 14.9,
    shortDescription: 'Extraído a frio por 16 horas, suave e refrescante.',
    description:
      'Grãos selecionados extraídos a frio por 16 horas. Uma bebida suave, refrescante e de final limpo.',
    image: unsplash('photo-1461023058943-07fcbe16d735'),
    imageAlt: 'Copo de cold brew com gelo',
    rating: 4.9,
    reviewCount: 110
  },
  {
    slug: 'croissant',
    name: 'Croissant',
    category: 'Salgados',
    price: 9.9,
    shortDescription: 'Massa folhada artesanal, leve e amanteigada.',
    description:
      'Massa folhada feita à mão, assada todos os dias. Leve, amanteigada e com camadas delicadas.',
    image: unsplash('photo-1555507036-ab1f4038808a'),
    imageAlt: 'Croissant dourado em prato branco',
    rating: 4.9,
    reviewCount: 145
  },
  {
    slug: 'brownie',
    name: 'Brownie',
    category: 'Doces',
    price: 11.9,
    shortDescription: 'Chocolate intenso, centro macho e casquinha fina.',
    description:
      'Chocolate intenso com centro macho e casquinha fina. Perfeito para acompanhar um espresso.',
    image: unsplash('photo-1606313564200-e75d5e30476c'),
    imageAlt: 'Fatia de brownie de chocolate',
    rating: 4.8,
    reviewCount: 99
  },
  {
    slug: 'bolo-de-chocolate',
    name: 'Bolo de chocolate',
    category: 'Doces',
    price: 15.9,
    shortDescription: 'Fofa e generosa com ganache sedosa.',
    description:
      'Fatia generosa, fofa e úmida, finalizada com ganache sedosa de chocolate meio amargo.',
    image: unsplash('photo-1578985545062-69928b1d9587'),
    imageAlt: 'Fatia de bolo de chocolate com ganache',
    rating: 4.9,
    reviewCount: 87
  }
]

export const menuCategories: Array<'Todos' | ProductCategory> = [
  'Todos',
  'Cafés',
  'Bebidas',
  'Doces',
  'Salgados'
]

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (current: Product, limit = 4) => {
  const sameCategory = products.filter(
    (product) => product.slug !== current.slug && product.category === current.category
  )
  const others = products.filter(
    (product) => product.slug !== current.slug && product.category !== current.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export const sizeOptions = [
  { label: 'Pequeno', surcharge: 0 },
  { label: 'Médio', surcharge: 2 },
  { label: 'Grande', surcharge: 4 }
]

export const addonOptions = [
  { label: 'Canela', price: 0 },
  { label: 'Chantilly', price: 2 },
  { label: 'Dose extra', price: 3 }
]

export type ProductCategory = 'Cafés' | 'Bebidas' | 'Doces' | 'Salgados'

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  price: number
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  rating: number
  reviewCount: number
}

export interface CartItem {
  id: string
  slug: string
  name: string
  image: string
  size: string | null
  addons: string[]
  quantity: number
  unitPrice: number
}

export interface SizeOption {
  label: string
  surcharge: number
}

export interface AddonOption {
  label: string
  price: number
}

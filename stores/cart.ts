import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { CartItem } from '~/types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const isOpen = ref(false)

  const count = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0)
  )

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
  )

  function addItem(item: Omit<CartItem, 'id'>) {
    const id = [item.slug, item.size ?? '', [...item.addons].sort().join('-'), item.quantity]
      .join('|')
    const existing = items.value.find((current) => current.id === id)
    if (existing) {
      existing.quantity += item.quantity
      return
    }
    items.value.push({ ...item, id: `${id}#${Date.now()}` })
  }

  function removeItem(id: string) {
    items.value = items.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    items.value = []
  }

  function openCart() {
    isOpen.value = true
  }

  function closeCart() {
    isOpen.value = false
  }

  return {
    items,
    isOpen,
    count,
    total,
    addItem,
    removeItem,
    clearCart,
    openCart,
    closeCart
  }
})

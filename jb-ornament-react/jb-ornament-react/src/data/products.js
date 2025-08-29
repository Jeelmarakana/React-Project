export const products = [
  // Silver
  { id: 's1', name: 'Silver Anklet (Payal)', metal: 'Silver', category: 'Anklets', price: 1200, image: 'https://images.unsplash.com/photo-1603575449980-c34f52f51a93?q=80&w=1200&auto=format&fit=crop' },
  { id: 's2', name: 'Silver Bracelet', metal: 'Silver', category: 'Bracelets', price: 2200, image: 'https://images.unsplash.com/photo-1660315736506-1e52455c8f63?q=80&w=1200&auto=format&fit=crop' },
  { id: 's3', name: 'Silver Ring', metal: 'Silver', category: 'Rings', price: 650, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop' },
  { id: 's4', name: 'Silver Pendant', metal: 'Silver', category: 'Pendants', price: 1800, image: 'https://images.unsplash.com/photo-1617038260897-3f6c02c9f88b?q=80&w=1200&auto=format&fit=crop' },
  // Gold
  { id: 'g1', name: 'Gold Necklace', metal: 'Gold', category: 'Necklaces', price: 65000, image: 'https://images.unsplash.com/photo-1603570419960-f733afa53b3b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g2', name: 'Gold Bangle', metal: 'Gold', category: 'Bangles', price: 42000, image: 'https://images.unsplash.com/photo-1585386959984-a41552231671?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g3', name: 'Gold Earrings', metal: 'Gold', category: 'Earrings', price: 28000, image: 'https://images.unsplash.com/photo-1617038260401-4a93450ccaa0?q=80&w=1200&auto=format&fit=crop' },
  { id: 'g4', name: 'Gold Ring', metal: 'Gold', category: 'Rings', price: 18000, image: 'https://images.unsplash.com/photo-1585386959845-2570a1bf6df3?q=80&w=1200&auto=format&fit=crop' }
]

export function getProduct(id) {
  return products.find(p => p.id === id)
}

export const categories = ['All', 'Anklets', 'Bracelets', 'Rings', 'Pendants', 'Necklaces', 'Bangles', 'Earrings']
export const metals = ['All', 'Silver', 'Gold']

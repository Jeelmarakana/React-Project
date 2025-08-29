import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories, metals } from '../data/products.js'

export default function Products() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [metal, setMetal] = useState('All')

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchQ = p.name.toLowerCase().includes(q.toLowerCase())
      const matchCat = cat === 'All' || p.category === cat
      const matchMetal = metal === 'All' || p.metal === metal
      return matchQ && matchCat && matchMetal
    })
  }, [q, cat, metal])

  return (
    <section>
      <h2>Products</h2>
      <div style={{display:'flex', gap:12, margin:'12px 0', flexWrap:'wrap'}}>
        <input
          placeholder="Search…"
          value={q}
          onChange={e => setQ(e.target.value)}
          className="btn"
          style={{minWidth: 220}}
        />
        <select className="btn" value={cat} onChange={e => setCat(e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select className="btn" value={metal} onChange={e => setMetal(e.target.value)}>
          {metals.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}

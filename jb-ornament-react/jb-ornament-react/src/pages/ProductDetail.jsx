import { useParams, Link } from 'react-router-dom'
import { getProduct } from '../data/products.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)

  if (!product) return (
    <div>
      <h2>Product not found</h2>
      <Link to="/products" className="btn">Back to Products</Link>
    </div>
  )

  return (
    <article style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:20}}>
      <img src={product.image} alt={product.name} style={{width:'100%', borderRadius:16, border:'1px solid #232a35'}} />
      <div>
        <div className="badge">{product.category} · {product.metal}</div>
        <h2>{product.name}</h2>
        <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
        <div style={{display:'grid', gap:10, marginTop:16}}>
          <a className="btn primary" href={`https://wa.me/919898426635?text=I want to know more about ${encodeURIComponent(product.name)} (${product.id}).`}
            target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
          <a className="btn" href="tel:+919898426635">Call to Order</a>
          <Link className="btn" to="/products">Back to Products</Link>
        </div>
      </div>
    </article>
  )
}

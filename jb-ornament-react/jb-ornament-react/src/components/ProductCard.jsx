import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <div className="badge">{product.category} · {product.metal}</div>
        <strong>{product.name}</strong>
        <div className="price">₹{product.price.toLocaleString('en-IN')}</div>
        <Link to={`/products/${product.id}`} className="btn">View Details</Link>
      </div>
    </div>
  )
}

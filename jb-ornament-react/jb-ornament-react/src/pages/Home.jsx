import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Jay Bhavani Ornament</h1>
        <p>Wholesalers of Silver & Gold Ornaments · Kamrej, Surat</p>
        <div className="actions">
          <a className="btn primary" href="tel:+919898426635">Call Now</a>
          <a className="btn" href="https://wa.me/919898426635" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="btn" href="https://maps.google.com/?q=Shop No. 103, Vastu Palace-B, Pasodra Patiya, Kamrej, Surat" target="_blank" rel="noreferrer">Open in Maps</a>
          <Link className="btn" to="/products">Browse Products</Link>
        </div>
      </div>
      <img src="/src/assets/hero.jpg" alt="Jay Bhavani Ornament Card" />
    </section>
  )
}

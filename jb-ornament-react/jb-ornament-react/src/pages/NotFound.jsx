import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section>
      <h2>Page Not Found</h2>
      <Link className="btn" to="/">Go Home</Link>
    </section>
  )
}

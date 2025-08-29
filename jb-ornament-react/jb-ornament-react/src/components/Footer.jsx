export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div>© {new Date().getFullYear()} Jay Bhavani Ornament — Surat</div>
        <div>
          <a href="tel:+919898426635">📞 98984 26635</a> ·{' '}
          <a href="https://wa.me/919898426635" target="_blank" rel="noreferrer">WhatsApp</a> ·{' '}
          <a href="mailto:info@jaybhavani-ornament.example">Email</a> ·{' '}
          <a href="https://maps.google.com/?q=Shop No. 103, Vastu Palace-B, Pasodra Patiya, Kamrej, Surat" target="_blank" rel="noreferrer">Map</a>
        </div>
      </div>
    </footer>
  )
}

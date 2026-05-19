import { Link } from 'react-router-dom'

// Navbar component - handles navigation between all routes
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>👗 Threads & Co</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/add-product" style={styles.link}>Add Product</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
  },
  logo: {
    color: 'white',
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  }
}

export default Navbar
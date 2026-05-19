import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SearchBar from './SearchBar'

// Products page - displays all products with search functionality
function ProductsPage() {
  const { data: products, loading } = useFetch('http://localhost:3001/products')
  const [search, setSearch] = useState('')

  if (loading) return <p style={styles.loading}>Loading products...</p>

  // Filter products by search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Products</h2>
      <SearchBar search={search} onSearchChange={setSearch} />
      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.category}>{product.category}</p>
            <p style={styles.price}>KSh {product.price.toLocaleString()}</p>
            <Link to={`/products/${product.id}`}>
              <button style={styles.button}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p style={styles.noResults}>No products found for "{search}"</p>
      )}
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.25rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '0.75rem',
  },
  productName: {
    fontSize: '1rem',
    color: '#2c3e50',
    marginBottom: '0.25rem',
  },
  category: {
    fontSize: '0.85rem',
    color: '#7f8c8d',
    marginBottom: '0.25rem',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '0.75rem',
  },
  button: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  loading: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  noResults: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginTop: '2rem',
  }
}

export default ProductsPage
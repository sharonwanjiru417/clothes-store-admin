import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

// Landing page - shows store info and welcome message
function LandingPage() {
  const { data, loading, error } = useFetch('http://localhost:3001/store_info')

  if (loading) return <p style={styles.loading}>Loading...</p>
  if (error) return <p style={styles.loading}>Error: {error}</p>
  if (!data || data.length === 0) return <p style={styles.loading}>No store info found.</p>

  const store = data[0]

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to {store.name}</h1>
        <p style={styles.description}>{store.description}</p>
        <p style={styles.phone}>📞 {store.phone_number}</p>
        <Link to="/products">
          <button style={styles.button}>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  hero: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: '600px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '1rem',
  },
  phone: {
    fontSize: '1rem',
    color: '#7f8c8d',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  loading: {
    textAlign: 'center',
    marginTop: '2rem',
  }
}

export default LandingPage
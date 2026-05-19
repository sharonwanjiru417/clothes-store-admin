import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

// Product detail page - shows single product with edit and delete functionality
function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: product, loading } = useFetch(`http://localhost:3001/products/${id}`)
  const [newPrice, setNewPrice] = useState('')
  const [editing, setEditing] = useState(false)

  if (loading) return <p style={styles.loading}>Loading product...</p>

  // PATCH request to update price
  function handleUpdatePrice() {
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    })
      .then(res => res.json())
      .then(() => {
        alert(`Price updated to $${newPrice}`)
        setEditing(false)
        window.location.reload()
      })
  }

  // DELETE request to remove product
  function handleDelete() {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      }).then(() => {
        alert('Product deleted!')
        navigate('/products')
      })
    }
  }

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/products')} style={styles.backButton}>
        ← Back to Products
      </button>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.info}>
          <h2 style={styles.name}>{product.name}</h2>
          <p style={styles.category}>Category: {product.category}</p>
          <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>Price: KSh {product.price.toLocaleString()}</p>

          {/* Edit Price Section */}
          {editing ? (
            <div style={styles.editSection}>
              <input
                type="number"
                value={newPrice}
                onChange={e => setNewPrice(e.target.value)}
                placeholder="Enter new price"
                style={styles.input}
              />
              <button onClick={handleUpdatePrice} style={styles.saveButton}>
                Save Price
              </button>
              <button onClick={() => setEditing(false)} style={styles.cancelButton}>
                Cancel
              </button>
            </div>
          ) : (
            <button onClick={() => setEditing(true)} style={styles.editButton}>
              Edit Price
            </button>
          )}

          {/* Delete Button */}
          <button onClick={handleDelete} style={styles.deleteButton}>
            Delete Product
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  backButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#2c3e50',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '1rem',
    padding: 0,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    display: 'flex',
    gap: '2rem',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: '1.75rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  category: {
    color: '#7f8c8d',
    marginBottom: '0.5rem',
  },
  description: {
    color: '#555',
    marginBottom: '0.5rem',
  },
  price: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '1rem',
  },
  editSection: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '6px',
    border: '1.5px solid #ddd',
    fontSize: '1rem',
  },
  editButton: {
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '0.75rem',
    display: 'block',
  },
  saveButton: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#7f8c8d',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '0.5rem',
    display: 'block',
  },
  loading: {
    textAlign: 'center',
    marginTop: '2rem',
  }
}

export default ProductDetail
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Product form - allows admin to add a new product
function ProductForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: '',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // POST request to add new product
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price),
      }),
    })
      .then(res => res.json())
      .then(() => {
        alert(`${formData.name} has been added!`)
        navigate('/products')
      })
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add New Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Tops, Bottoms, Dresses"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Add Product</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
  },
  form: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  field: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.4rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '0.65rem 1rem',
    borderRadius: '8px',
    border: '1.5px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
  }
}

export default ProductForm
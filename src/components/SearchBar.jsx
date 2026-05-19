// SearchBar component - filters products by name
function SearchBar({ search, onSearchChange }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for a product..."
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        style={styles.input}
      />
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '1.5rem',
  },
  input: {
    padding: '0.75rem 1rem',
    width: '100%',
    borderRadius: '8px',
    border: '1.5px solid #ddd',
    fontSize: '1rem',
    outline: 'none',
  }
}

export default SearchBar
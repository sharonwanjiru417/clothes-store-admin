import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductsPage from '../components/ProductsPage'

// Mock useFetch hook
vi.mock('../hooks/useFetch', () => ({
  default: () => ({
    data: [
      { id: 1, name: 'Classic White T-Shirt', category: 'Tops', price: 2500, image: 'https://via.placeholder.com/200' },
      { id: 2, name: 'Slim Fit Jeans', category: 'Bottoms', price: 6500, image: 'https://via.placeholder.com/200' },
      { id: 3, name: 'Floral Summer Dress', category: 'Dresses', price: 4500, image: 'https://via.placeholder.com/200' },
    ],
    loading: false,
    error: null,
  })
}))

describe('ProductsPage', () => {
  test('renders products page title', () => {
    render(
      <BrowserRouter>
        <ProductsPage />
      </BrowserRouter>
    )
    expect(screen.getByText('Our Products')).toBeInTheDocument()
  })

  test('renders all products', () => {
    render(
      <BrowserRouter>
        <ProductsPage />
      </BrowserRouter>
    )
    expect(screen.getByText('Classic White T-Shirt')).toBeInTheDocument()
    expect(screen.getByText('Slim Fit Jeans')).toBeInTheDocument()
    expect(screen.getByText('Floral Summer Dress')).toBeInTheDocument()
  })

  test('filters products by search', () => {
    render(
      <BrowserRouter>
        <ProductsPage />
      </BrowserRouter>
    )
    const searchInput = screen.getByPlaceholderText('Search for a product...')
    fireEvent.change(searchInput, { target: { value: 'jeans' } })
    expect(screen.getByText('Slim Fit Jeans')).toBeInTheDocument()
    expect(screen.queryByText('Classic White T-Shirt')).not.toBeInTheDocument()
  })

  test('shows no results message when search has no match', () => {
    render(
      <BrowserRouter>
        <ProductsPage />
      </BrowserRouter>
    )
    const searchInput = screen.getByPlaceholderText('Search for a product...')
    fireEvent.change(searchInput, { target: { value: 'xyz' } })
    expect(screen.getByText(/No products found/i)).toBeInTheDocument()
  })
})
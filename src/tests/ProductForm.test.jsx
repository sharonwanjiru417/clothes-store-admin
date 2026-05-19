import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

describe('ProductForm', () => {
  test('renders the form', () => {
    render(
      <BrowserRouter>
        <ProductForm />
      </BrowserRouter>
    )
    expect(screen.getByText('Add New Product')).toBeInTheDocument()
  })

  test('renders all input fields', () => {
    render(
      <BrowserRouter>
        <ProductForm />
      </BrowserRouter>
    )
    expect(screen.getByPlaceholderText('Enter product name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. Tops, Bottoms, Dresses')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter price')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter image URL')).toBeInTheDocument()
  })

  test('updates input values when typed', () => {
    render(
      <BrowserRouter>
        <ProductForm />
      </BrowserRouter>
    )
    const nameInput = screen.getByPlaceholderText('Enter product name')
    fireEvent.change(nameInput, { target: { value: 'Test Shirt' } })
    expect(nameInput.value).toBe('Test Shirt')
  })

  test('renders submit button', () => {
    render(
      <BrowserRouter>
        <ProductForm />
      </BrowserRouter>
    )
    expect(screen.getByText('Add Product')).toBeInTheDocument()
  })
})
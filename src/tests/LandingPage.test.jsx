import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from '../components/LandingPage'

// Mock useFetch hook
vi.mock('../hooks/useFetch', () => ({
  default: () => ({
    data: [
      {
        id: 1,
        name: 'Threads & Co',
        description: 'Your go-to store for trendy and affordable clothing',
        phone_number: '+254 712 345 678'
      }
    ],
    loading: false,
    error: null,
  })
}))

describe('LandingPage', () => {
  test('renders store name', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Threads & Co/i)).toBeInTheDocument()
  })

  test('renders store description', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/Your go-to store/i)).toBeInTheDocument()
  })

  test('renders phone number', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(screen.getByText(/254 712 345 678/i)).toBeInTheDocument()
  })

  test('renders Shop Now button', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })
})
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import ProductsPage from './components/ProductsPage'
import ProductDetail from './components/ProductDetail'
import ProductForm from './components/ProductForm'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
    </div>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

// Import Bootstrap and CSS
import * as bootstrap from 'bootstrap'
import './index.css'

// Import Default Layout Component
import DefaultLayout from './layout/DefaultLayout.jsx'

// Import Page Components
import HomePage from './pages/HomePage.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import RickMorty from './pages/RickMorty.jsx'
import PersonalityPage from './pages/PersonalityPage.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage titlePage={"Home Page"} />} />

          <Route path='/products' element={<Products titlePage={"Products"} />} />
          <Route path='/products/:id' element={<ProductDetail />} />

          <Route path='/about' element={<About titlePage={"about"} />} />

          <Route path='/rickmorty' element={<RickMorty />} />
          <Route path="/personality/:id" element={<PersonalityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

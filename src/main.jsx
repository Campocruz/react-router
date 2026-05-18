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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage titlePage={"Home Page"} />}></Route>
          <Route path='/products' element={<Products titlePage={"Products"} />}></Route>
          <Route path='/about' element={<About titlePage={"about"} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

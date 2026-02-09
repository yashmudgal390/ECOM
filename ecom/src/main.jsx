import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart-context.jsx'
import { LoginProvider } from './context/login-context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

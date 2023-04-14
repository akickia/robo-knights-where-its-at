import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Events from './pages/Events'
import Event from './pages/Event'
import Order from './pages/Order'
import Tickets from './pages/Tickets'
import { createContext, useState } from 'react'

export const CartContext = createContext()
const navigate = useNavigate()
  function handleNavigation(route) {
    navigate(route)
  }

function App() {
//Using context to access cart in several components
//Using routing
const [cart, setCart] = useState([])
  return (
    
      <BrowserRouter>
        <Routes>
          <CartContext.Provider value={{cart, setCart, handleNavigation}}>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/tickets" element={<Tickets />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path='*' element={<Navigate to='/error' />} />
        </CartContext.Provider>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App

// A reflection - we should have used the navigation function in a parent to pass it with context, 
// but if we do it here we must to it inside of the routing and that complicates it. We could have had a main or startpage 
// that renders the rest instead of routing them directly in main. 

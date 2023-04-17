import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Events from './pages/Events'
import Event from './pages/Event'
import Order from './pages/Order'
import Tickets from './pages/Tickets'
import { createContext, useState } from 'react'

export const CartContext = createContext()

function App() {
//Using context to access cart in several components
//Using routing
const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{cart, setCart}}>
    <BrowserRouter>
      <Routes>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App

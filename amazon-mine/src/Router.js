import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import SignIn from './pages/Auth/SignUP';
import Payment from './pages/Payment/Payment';
import Order from './pages/Orders/Order';
import Cart from './pages/Cart/Cart';
import Results from './pages/Results/Result';
function Routing() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth" element={<SignIn/>} />
      <Route path="/payments" element={<Payment/>} />
      <Route path="/orders" element={<Order/>} />
      <Route path="/category/:categoryName" element={<Results/>} /> 
      <Route path="/cart" element={<Cart/>} />

    </Routes>
   </Router>
  )
}

export default Routing
import React from 'react'
import "./App.css"
import Cart from './components/cart/Cart'
import Products from './components/product/Products'
import ProductList from './components/product/ProductList'
import ProductsList from './components/bai4/ProductsList'
import Bai5 from './components/bai5/Bai5'
export default function App() {
  return (
    <div className="container">App
      <Products></Products>
      <Cart></Cart>
      <ProductList></ProductList> 
      <ProductsList></ProductsList>
      <Bai5></Bai5>
    </div>
  )
}

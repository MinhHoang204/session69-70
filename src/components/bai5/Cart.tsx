import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Cart.css';
export default function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Empty product in your cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.price} USD x {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import { updateCartItemQuantity, removeFromCart } from '../../store/reducers/cartReducer';
import { selectCartTotalPrice } from '../../store/reducers/cartSelectors';
import './Cart.css';
export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState<string | null>(null);

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateCartItemQuantity({ id, quantity: Math.max(1, quantity) }));
  };

  const handleRemoveFromCart = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      dispatch(removeFromCart(id));
      setNotification('Delete cart successfully');
      setTimeout(() => {
        setNotification(null);
      }, 2000); 
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {notification && <div className="notification">{notification}</div>}
      {cartItems.length === 0 ? (
        <p>Empty product in your cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>{item.price} USD</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h3>Total Price: {totalPrice} USD</h3>
          </div>
        </>
      )}
    </div>
  )
}

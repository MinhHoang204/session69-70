import React from 'react'
import {useDispatch} from "react-redux"
import { useState } from 'react';
import {Product} from "../../interface";
import { addToCart } from '../../store/reducers/cartReducer';
export default function Products() {
    // lấy dữ liệu ở trong kho đi render
    const dispatch = useDispatch();
    const [notification, setNotification] = useState<string | null>(null);
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        setNotification('Add to cart successfully');
        setTimeout(() => {
            setNotification(null);
        }, 2000);
    };
  return (
    <div className="products">
      <h2>List Products</h2>
      {notification && <div className="notification">{notification}</div>}
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price} USD</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => handleAddToCart(product)}>{product.price} USD</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'
import { UseSelector } from 'react-redux';
import "./productList.css"
import { RootState } from '../../store/store';
export default function ProductList() {
    const products = useSelector((state: RootState) => state.products);
  return (
    <div className="product-list">
      <h2>List Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} USD</p>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

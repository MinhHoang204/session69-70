import React from 'react'
interface ProductItemProps {
    name: string;
    price: number;
    quantity: number;
    image: string;
    onAddToCart: () => void;
}
export default function ProductItem(name:any, price:any, quantity:any, image:any, onAddToCart:any) {
  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price} USD</p>
      <input type="number" value={quantity} readOnly />
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  )
}

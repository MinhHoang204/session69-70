import React from 'react'
interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    onUpdateQuantity: (quantity: number) => void;
    onDelete: () => void;
}
  
export default function CartItem(name:any, price:any, quantity:any, onUpdateQuantity:any, onDelete:any) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price} USD</td>
      <td>
        <input type="number" value={quantity} onChange={(e) => onUpdateQuantity(Number(e.target.value))} />
      </td>
      <td>
        <button onClick={onUpdateQuantity}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  )
}

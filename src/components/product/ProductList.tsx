import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartReducer';
import { RootState } from '../../store/store';
import { updateQuantity } from '../../store/reducers/cartReducer';
export default function ProductsList() {
    const products = [
        { name: 'Pizza1', price: 30000, quantity: 1, image: 'https://images7.alphacoders.com/596/596343.jpg' },
        { name: 'Pizza2', price: 35000, quantity: 2, image: 'https://riotfest.org/wp-content/uploads/2016/10/151_1stuffed_crust_pizza.jpg' },
        { name: 'Pizza3', price: 40000, quantity: 3, image: 'https://media.timeout.com/images/103437036/image.jpg' },
        { name: 'Pizza4', price: 50000, quantity: 4, image: 'https://www.cuisinart.com/globalassets/catalog/appliances/food-processors/complete-chef-cooking-food-processor/pepperonipizza_ss656275903.jpg' },
    ];
    const product = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: number, quantity: number) => {
      dispatch(updateQuantity({ id, quantity: Math.max(1, quantity) }));
    };

    const handleAddToCart = (product: any) => {
      dispatch(addToCart({ ...product, quantity: product.quantity }));
    };
  return (
    <div className="product-list">
    <h2>List Products</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} USD</p>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
            min="1"
          />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

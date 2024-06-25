import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        if (item.quantity + 1 <= item.stock) {
          item.quantity = Math.max(1, item.quantity + 1);
        } else {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
        }
      } else {
        if (action.payload.quantity <= action.payload.stock) {
          state.push({ ...action.payload, quantity: Math.max(1, action.payload.quantity) });
        } else {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
        }
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter(cartItem => cartItem.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedState));
      return updatedState;
    }
  }
});

export const { addToCart, updateCartItemQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
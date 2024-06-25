import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + action.payload.quantity);
      } else {
        state.push({ ...action.payload, quantity: Math.max(1, action.payload.quantity) });
      }
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter(cartItem => cartItem.id !== action.payload);
    }
  }
});

export const { addToCart, updateCartItemQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

import { RootState } from '../store';

export const selectCartTotalPrice = (state: RootState) => {
  return state.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

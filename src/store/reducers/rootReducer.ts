import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  notification: notificationReducer
});

export default rootReducer;

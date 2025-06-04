import { createStore, combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import couponReducer from './couponReducer';

// Combine all reducers
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,

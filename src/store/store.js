// src/store/store.js

import { createStore, combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer'; // ✅ Import the new reducer

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer, // ✅ Add to rootReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import checkoutReducer from './checkoutReducer';
import couponReducer from './couponReducer';
import notificationReducer from './notificationReducer';
import orderReducer from './orderReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  productState: productReducer,
  cartState: cartReducer,
  userState: userReducer,
  checkoutState: checkoutReducer,
  couponState: couponReducer,
  notificationState: notificationReducer,
  orderState: orderReducer,
  reviewState: reviewReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

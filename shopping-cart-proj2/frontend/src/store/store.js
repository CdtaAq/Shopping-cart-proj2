import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  // other reducers...
  order: orderReducer
});

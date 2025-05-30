import { useDispatch } from 'react-redux';
import { performCheckout } from '../store/checkoutActions';

const dispatch = useDispatch();

const handlePayment = () => {
  dispatch(performCheckout(userDetails, cartItems, totalAmount));
  setShowPaymentMessage(true); // local state to show "Thank you" message
};

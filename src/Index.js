// 
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './components/Payment';

const stripePromise = loadStripe('pk_test_your_publishable_key');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
}

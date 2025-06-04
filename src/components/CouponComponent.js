import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateCoupon } from '../store/couponActions';

const CouponComponent = () => {
  const dispatch = useDispatch();
  const coupon = useSelector(state => state.coupon.couponCode);
  const [localCoupon, setLocalCoupon] = useState(null);

  const handleGenerate = () => {
    const newCoupon = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit random
    setLocalCoupon(newCoupon);
    dispatch(generateCoupon(newCoupon));
  };

  return (
    <div>
      <h2>Coupon Page</h2>
      <button onClick={handleGenerate}>Generate Coupon</button>
      {localCoupon && <p>Your Coupon: <strong>{coupon}</strong></p>}
    </div>
  );
};

export default CouponComponent;

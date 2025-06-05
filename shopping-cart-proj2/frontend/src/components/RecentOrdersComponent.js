import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, cancelOrder } from '../store/orderActions';

const RecentOrdersComponent = ({ currentUser }) => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders(currentUser.id));
  }, [dispatch]);

  const handleCancel = (id) => {
    dispatch(cancelOrder(id));
  };

  return (
    <div>
      <h2>Your Recent Orders</h2>
      {orders.map((o, index) => (
        <div key={index} style={{ border: '1px solid gray', margin: 10 }}>
          <p><strong>Date:</strong> {new Date(o.dateTime).toLocaleString()}</p>
          <p><strong>Status:</strong> {o.status}</p>
          <ul>
            {o.order.map((item, i) => (
              <li key={i}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          {o.status === 'Placed' && (
            <button onClick={() => handleCancel(o._id)}>Cancel</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecentOrdersComponent;

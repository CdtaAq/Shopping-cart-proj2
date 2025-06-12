import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Notification.css';
import { removeNotification } from '../store/notificationActions';

const NotificationIcon = () => {
  const notifications = useSelector(state => state.notificationState.notifications);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleNotificationClick = (index, link) => {
    dispatch(removeNotification(index));
    if (link) window.location.href = link;
  };

  return (
    <div className="notification-container">
      <div className="notification-icon" onClick={() => setOpen(!open)}>
        🔔 <span className="badge">{notifications.length}</span>
      </div>
      {open && (
        <div className="notification-box">
          {notifications.length === 0 ? (
            <div className="no-msg">No Notifications</div>
          ) : (
            notifications.map((note, index) => (
              <div key={index} className="notification-item" onClick={() => handleNotificationClick(index, note.link)}>
                {note.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;

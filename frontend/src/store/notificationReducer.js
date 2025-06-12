import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './notificationActions';

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case REMOVE_NOTIFICATION:
      const newList = [...state.notifications];
      newList.splice(action.payload, 1);
      return {
        ...state,
        notifications: newList,
      };
    default:
      return state;
  }
};

export default notificationReducer;

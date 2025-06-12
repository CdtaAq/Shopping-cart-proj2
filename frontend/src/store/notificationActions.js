export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = (message, link, isStatic = false) => ({
  type: ADD_NOTIFICATION,
  payload: { message, link, isStatic },
});

export const removeNotification = (index) => ({
  type: REMOVE_NOTIFICATION,
  payload: index,
});

export const actions = {
  REMOVE_ITEM: 'REMOVE_ITEM',
  ADD_ITEM: 'ADD_ITEM',
  EDIT_ITEM: 'EDIT_ITEM',
};

export const removeItem = (type, id) => {
  return {
    type: actions.REMOVE_ITEM,
    payload: {
      type,
      id,
    },
  };
};

export const addItem = (item) => {
  const id = Date.now();
  return {
    type: actions.ADD_ITEM,
    payload: {
      id,
      ...item,
    },
  };
};

export const editItem = (item) => {
  return {
    type: actions.EDIT_ITEM,
    payload: {
      ...item,
    },
  };
};

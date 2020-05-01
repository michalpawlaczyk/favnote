export const actions = {
  REMOVE_ITEM: 'REMOVE_ITEM',
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

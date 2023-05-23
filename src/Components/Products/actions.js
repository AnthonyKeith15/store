// actions.js
export const setActivePage = (pageName) => {
  return {
    type: 'SET_ACTIVE_PAGE',
    payload: pageName,
  };
};

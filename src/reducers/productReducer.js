const initialState = {
  products: [], // Initial products state
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      // Logic for adding a new product to the state
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'UPDATE_PRODUCT':
      // Logic for updating a product in the state
      // ...
      return state;
    case 'DELETE_PRODUCT':
      // Logic for deleting a product from the state
      // ...
      return state;
    default:
      return state;
  }
};


export default productReducer;

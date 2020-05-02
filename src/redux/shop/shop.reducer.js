import shopTypes from "./shop.types";
const { UPDATE_COLLECTIONS } = shopTypes;

const INITIAL_STATE = {
  collections: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

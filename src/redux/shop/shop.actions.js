import shopTypes from "./shop.types";
const { UPDATE_COLLECTIONS } = shopTypes;

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

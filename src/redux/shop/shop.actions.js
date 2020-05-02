import shopTypes from "./shop.types";
const { UPDATE_COLLECTIONS } = shopTypes;

export const updateCollections = collectionMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionMap,
});

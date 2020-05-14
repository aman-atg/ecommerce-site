import shopTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILTURE,
} = shopTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = collectionMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionsFailture = errMsg => ({
  type: FETCH_COLLECTIONS_FAILTURE,
  payload: errMsg,
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(e => {
      dispatch(fetchCollectionsFailture(e.message));
    });
};

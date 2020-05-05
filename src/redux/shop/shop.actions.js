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
export const fetchCollectionsSuccess = collections => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  action: collections,
});
export const fetchCollectionsFailture = error => ({
  type: FETCH_COLLECTIONS_FAILTURE,
  action: error.message,
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then(snapshot => {
      const CollectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(CollectionsMap));
    })
    .catch(e => {
      fetchCollectionsFailture(e);
    });
};

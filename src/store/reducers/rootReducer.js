// Import reducers that are being combined
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
// Import function to  combine reducers
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

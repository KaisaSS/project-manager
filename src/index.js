import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// applyMiddleware to apply thunk
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
// Provider gives application access to the store
import { Provider, useSelector } from "react-redux";
// Redux thunk is middleware that has extra functionality
import reduxThunk from "redux-thunk";
// Firebase
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/compat/app";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig)
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: "presence",
  sessions: "sessions",
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

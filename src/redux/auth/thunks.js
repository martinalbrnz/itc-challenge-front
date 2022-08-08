import * as action from "./actions";
import firebase from "../../auxFunctions/firebase";

export const login = (credentials) => (dispatch) => {
  dispatch(action.loginPending());
  return firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (response) => {
      const token = await response.user.getIdToken();
      localStorage.setItem("token", token);
      return dispatch(action.loginFulfilled(token));
    })
    .catch((error) => {
      return dispatch(action.loginFailed(error));
    });
};

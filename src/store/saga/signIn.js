import { all, fork, put, takeEvery, retry } from "redux-saga/effects";
import { db } from "../../utils/init-firebase";
import { doc, getDoc } from "firebase/firestore";
import { RETRY_INTERVAL, MAX_RETRY_COUNT } from "./constants";
import { signInSuccess, signInFailure } from "../actions/SignIn";
import { SIGN_IN } from "../types";
import { LocalStorage } from "../../constants/LocalStorage";

const signInApi = async (payload) => {
  const docRef = doc(db, `${payload.selectedValue}/${payload.user?.uid}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

function* signIn({ payload }) {
  try {
    const response = yield retry(
      MAX_RETRY_COUNT,
      RETRY_INTERVAL,
      signInApi,
      payload
    );
    if (response) {
      if (payload.selectedValue === "admin") {
        yield put(signInSuccess(response));
        localStorage.setItem(LocalStorage.TOKEN, payload.user.accessToken);
        localStorage.setItem(LocalStorage.USER_ID, payload.user.uid);
        localStorage.setItem(LocalStorage.USER_TYPE, payload.selectedValue);
        payload.history.push("/admin-dashboard");
      } else if (payload.selectedValue === "student") {
        yield put(signInSuccess(response));
        localStorage.setItem(LocalStorage.TOKEN, payload.user.accessToken);
        localStorage.setItem(LocalStorage.USER_ID, payload.user.uid);
        localStorage.setItem(LocalStorage.USER_TYPE, payload.selectedValue);
        payload.history.push("/student-dashboard");
      } else {
        yield put(signInSuccess(response));
        localStorage.setItem(LocalStorage.TOKEN, payload.user.accessToken);
        localStorage.setItem(LocalStorage.USER_ID, payload.user.uid);
        localStorage.setItem(LocalStorage.USER_TYPE, payload.selectedValue);
        payload.history.push("/faculty-dashboard");
      }
    }
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* callSignIn() {
  yield takeEvery(SIGN_IN, signIn);
}

export default function* rootSaga() {
  yield all([fork(callSignIn)]);
}

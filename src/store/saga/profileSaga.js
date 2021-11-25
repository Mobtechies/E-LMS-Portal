import { all, fork, put, takeEvery, retry } from "redux-saga/effects";
import { RETRY_INTERVAL, MAX_RETRY_COUNT } from "./constants";
import {
  getProfileSuccess,
  getProfileFailure,
  saveDataSuccess,
  saveDataFailure,
} from "../actions/Profile";
import { GET_USER_PROFILE, SAVE_DATA } from "../types";
import { db } from "../../utils/init-firebase";
import { doc, setDoc } from "firebase/firestore";

const getUserProfile = async (payload) => {};
function* getProfile({ payload }) {
  try {
    const data = yield retry(
      MAX_RETRY_COUNT,
      RETRY_INTERVAL,
      getUserProfile,
      payload
    );
    if (data) yield put(getProfileSuccess(data));
  } catch (error) {
    yield put(getProfileFailure(error));
  }
}

export function* callProfile() {
  yield takeEvery(GET_USER_PROFILE, getProfile);
}
const savaDataApi = async (payload) => {
  if (payload) {
    const docRef = doc(db, `${payload.collection}/${payload.id}`);
    return await setDoc(docRef, payload.data, { merge: true });
  }
};

function* saveData({ payload }) {
  try {
    const data = yield retry(
      MAX_RETRY_COUNT,
      RETRY_INTERVAL,
      savaDataApi,
      payload
    );
    if (data) yield put(saveDataSuccess(data));
  } catch (error) {
    yield put(saveDataFailure(error));
  }
}

export function* callSaveData() {
  yield takeEvery(SAVE_DATA, saveData);
}

export default function* rootSaga() {
  yield all([fork(callProfile), fork(callSaveData)]);
}

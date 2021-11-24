import { all, fork, put, takeEvery, retry } from "redux-saga/effects";
import { RETRY_INTERVAL, MAX_RETRY_COUNT } from "./constants";
import { getProfileSuccess, getProfileFailure } from "../actions/Profile";
import { GET_USER_PROFILE } from "../types";
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

export default function* rootSaga() {
  yield all([fork(callProfile)]);
}

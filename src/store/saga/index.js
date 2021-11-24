import { all } from "redux-saga/effects";
import profile from "./profileSaga";

export default function* rootSaga() {
  yield all([profile()]);
}

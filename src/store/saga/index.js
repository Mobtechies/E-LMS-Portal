import { all } from "redux-saga/effects";
import profile from "./profileSaga";
import signIn from "./signIn";

export default function* rootSaga() {
  yield all([profile(), signIn()]);
}

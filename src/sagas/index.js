import { all } from "redux-saga/effects";
import { watchGetUsers } from "../actions/Home";
export function* rootSaga() {
  yield all([watchGetUsers()]);
}
// export default function*() {
//   console.log("rootSaga");
// }

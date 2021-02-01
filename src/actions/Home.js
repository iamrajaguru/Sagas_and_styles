import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
export const GET_USERS = "GET_USERS";
export const getTodo = () => ({ type: "GET_USERS" });
export function* watchGetUsers() {
  console.log("Trig 2");
  yield takeEvery(GET_USERS, workerGetUsers);
}

export function fetchUser(userId) {
  return Axios.get("https://jsonplaceholder.typicode.com/todos/" + userId);
}
function* workerGetUsers() {
  try {
    console.log("workerSaga");
    const res = yield call(
      Axios.get,
      "https://jsonplaceholder.typicode.com/todos/"
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  //   yield put({ type: "SET_USERS", value: res.data });
}

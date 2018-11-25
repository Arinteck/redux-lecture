import contactsSaga from "./contactsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        contactsSaga()
    ]);
}
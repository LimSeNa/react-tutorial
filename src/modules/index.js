import {combineReducers} from "redux";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import auth, {authSaga} from "./auth";

const rootReducer = combineReducers({
    loading,
    auth
});

export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as authAPI from '../lib/api/auth'
import {takeLatest} from 'redux-saga/effects';
import produce from "immer";

const CHANGE_FIELD = 'auth/CHANGE_LOADING';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER'
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form, key, value
    })
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
    form => form
);

export const register = createAction(
    REGISTER,
    ({email, password, nickname}) => ({
        email, password, nickname
    })
);

const registerSaga = createRequestSaga(REGISTER, authAPI.signup);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
    register: {
        email: '',
        password: '',
        nickname: ''
    },
    registerSuccess: null,
    registerError: null
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form]
        }),
        [REGISTER_SUCCESS]: (state, {payload: registerSuccess}) => ({
            ...state, // 기존 데이터 유지
            registerSuccess,
            registerError: null
        }),
        [REGISTER_FAILURE]: (state, {payload: registerError}) => ({
            ...state,
            registerSuccess: null,
            registerError
        })
    },
    initialState
);

export default auth;
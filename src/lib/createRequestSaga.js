import {startLoading, finishLoading} from "../modules/loading";
import {put, call} from 'redux-saga/effects';

// Redux Action type을 생성하는 함수
// type에는 이름이 들어옴
export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
}

// 위의 Action type 이름과 API 요청을 매개변수로 받아
// API 호출 결과를 SUCCESS, FAILURE 두 가지 경우로 나누고, 제너레이트 함수 반환
const createRequestSaga = (type, request) => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type));
        // 성공, 실패
        try {
            const response = yield call(request, action.payload); // API 호출 결과를 받아옴
            yield put({ // 디스패치
                type: SUCCESS,
                payload: response.data
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }
        yield put(finishLoading(type));
    };
};

export default createRequestSaga;
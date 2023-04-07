import {createAction, handleActions} from "redux-actions";
import {request} from "axios";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADIND = 'loading/FINISH_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType
);

export const finishLoading = createAction(
    FINISH_LOADIND,
    requestType => requestType
);

const initialState = {};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => {
            return {
                ...state,
                [action.payload]: true,
            }
        },
        [FINISH_LOADIND]: (state, action) => ({
            ...state,
            [action.type]: false,

        }),
    },
    initialState
);

export default loading;
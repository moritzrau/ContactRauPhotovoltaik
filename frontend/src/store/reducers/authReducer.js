import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../actionTypes';

const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
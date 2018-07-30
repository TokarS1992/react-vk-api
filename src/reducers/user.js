import * as userConst from '../constants/user';

const initialState = {
    name: '',
    error: ''
};

export default function user(state = initialState, action) {
    switch(action.type) {
        case userConst.LOGIN_SUCCESS:
            return { ...state, name: action.payload, error: '' };
        case userConst.LOGIN_FAIL:
            return { ...state, error: action.payload.message };
        default:
            return state
    }
}
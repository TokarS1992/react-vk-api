import * as pagesConst from '../constants/Page';

const initialState = {
    year: 2016,
    photos: [],
    fetching: false,
    error: ''
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case pagesConst.SET_YEAR:
            return { ...state, year: action.payload };
        case pagesConst.GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, fetching: true, error: '' };
        case pagesConst.GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false, error: '' };
        case pagesConst.GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, fetching: false };
        default:
            return state;
    }
}
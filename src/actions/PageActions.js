import * as pagesConst from '../constants/Page';

export function setYear(year) {
    return {
        type: pagesConst.SET_YEAR,
        payload: year
    }
}

let photosArr = [];

function getMorePhotos(offset, count, year, dispatch) {
    VK.Api.call('photos.getAll', {extended:1, count: count, offset: offset, v: '5.0'}, (r) => { // eslint-disable-line no-undef
        try {
            if (offset <= r.response.count - count) {
                offset+= 200;
                photosArr = photosArr.concat(r.response);
                getMorePhotos(offset, count, year, dispatch);
            } else {
                let photos = makeYearPhotos(r.response.items, year);
                dispatch({
                    type: pagesConst.GET_PHOTOS_SUCCESS,
                    payload: photos
                });
            }
        }
        catch(e) {
            dispatch({
                type: pagesConst.GET_PHOTOS_FAIL,
                error: true,
                payload: new Error(e)
            })
        }
    });
}

function makeYearPhotos(photos, selectedYear) {
    let createdYear, yearPhotos = [];

    photos.forEach((item) => {
        createdYear = new Date(item.date * 1000).getFullYear();
        if (createdYear === selectedYear ) {
            yearPhotos.push(item);
        }
    });

    yearPhotos.sort((a,b) => b.likes.count - a.likes.count);

    return yearPhotos;
}

export function getPhotos(year) {
    return (dispatch) => {
        dispatch({
            type: pagesConst.GET_PHOTOS_REQUEST,
            payload: year
        });

        getMorePhotos(0, 200, year, dispatch);
        // if (cached) {
        //     let photos = makeYearPhotos(photosArr, year);
        //     dispatch({
        //         type: pagesConst.GET_PHOTOS_SUCCESS,
        //         payload: photos
        //     })
        // } else {
        //
        // }
    }
}
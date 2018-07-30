import * as userConst from '../constants/User';

export function handleLogin() {
    return function(dispatch) {
        dispatch({
            type: userConst.LOGIN_REQUEST
        });

        VK.Auth.login((r) => { // eslint-disable-line no-undef
            if (r.session) {
                let username = r.session.user.first_name;

                dispatch({
                    type: userConst.LOGIN_SUCCESS,
                    payload: username
                })

            } else {
                dispatch({
                    type: userConst.LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        },4); // запрос прав на доступ к photo
    }
}
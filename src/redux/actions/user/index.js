import { SET_USER_DETAILS, GET_USER_DETAILS } from '../../action-types';
import { fetchUserDeatils } from '../../../services/user';

export const getUserDetails = () => {
    return { type: GET_USER_DETAILS };
};

export const setUserDetails = (payload) => {
    return { type: SET_USER_DETAILS, payload };
};

export const fetchUser = (uid) => {
    return async (dispatch) => {
        try {
            dispatch(getUserDetails());

            const response = await fetchUserDeatils(uid);

            dispatch(setUserDetails(response._data || {}));

            return true;
        } catch (e) {
            dispatch(setUserDetails({}));
            return false;
        }
    };
};
import { GET_USER_DETAILS, SET_USER_DETAILS } from '../../action-types';

export const userInitialState = {
    user: [],
    isFetchingItems: false,
    
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS:
            return {...state, isFetchingItems: true};
        case SET_USER_DETAILS:
            return {...state, isFetchingItems: false, user: action.payload};
        default:
            return state;
    }
    
}

export default userReducer;

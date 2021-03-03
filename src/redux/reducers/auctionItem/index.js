import { FETCH_ITEMS } from '../../action-types';

export const itemInitialState = {
    items: [],
    
};

const auctionItemReducer = (state = itemInitialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
    
}

export default auctionItemReducer;



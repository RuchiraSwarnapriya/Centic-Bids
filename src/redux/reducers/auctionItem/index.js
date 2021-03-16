import { GET_AUCTION_ITEMS, SET_AUCTION_ITEMS } from '../../action-types';

export const itemInitialState = {
    items: [],
    isFetchingItems: false,
    
};

const auctionItemReducer = (state = itemInitialState, action) => {
    switch (action.type) {
        case GET_AUCTION_ITEMS:
            return {...state, isFetchingItems: true};
        case SET_AUCTION_ITEMS:
            return {...state, isFetchingItems: false, items: action.payload};
        default:
            return state;
    }
    
}

export default auctionItemReducer;



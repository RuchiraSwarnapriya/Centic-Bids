import { SET_AUCTION_ITEMS, GET_AUCTION_ITEMS } from '../../action-types';
import { fetchAuctionItems } from "../../../services/auctionItems";

export const getAuctionItems = () => {
    return { type: GET_AUCTION_ITEMS };
};

export const setAuctionItems = (payload) => {
    return { type: SET_AUCTION_ITEMS, payload };
};

export const fetchItems = () => {
    return async (dispatch) => {
        try {
            dispatch(getAuctionItems());
           
            const response = await fetchAuctionItems();

            dispatch(setAuctionItems(response || {}));
            return true;
        } catch (e) {
            dispatch(setAuctionItems({}));
            return false;
        }
    };
};

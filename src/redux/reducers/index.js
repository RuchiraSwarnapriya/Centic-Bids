import { combineReducers } from 'redux';
import auctionItemReducer from './auctionItem';
import userReducer from "./user";

export default combineReducers({
  auctionItems: auctionItemReducer,
  currentUser: userReducer,
});


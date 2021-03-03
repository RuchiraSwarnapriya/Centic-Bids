import {combineReducers} from 'redux';
import auctionItemReducer  from './auctionItem';

export default combineReducers({
  auctionItems: auctionItemReducer,
});


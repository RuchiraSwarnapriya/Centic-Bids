import axios from 'axios';

// fetch auction item details
export const fetchAuctionItems = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
};

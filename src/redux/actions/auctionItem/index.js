import { FETCH_ITEMS } from '../../action-types';

export const fetchIems = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_ITEMS,
                payload: posts
            })
        );
};

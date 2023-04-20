import axios from 'axios';
import {
  FETCH_POSTS_REQUESTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../constants/postsConstants';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUESTS,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});

export const fetchPosts = (count) => async (dispatch) => {
  dispatch(fetchPostsRequest);
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = response.data.slice(0, count);
    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};

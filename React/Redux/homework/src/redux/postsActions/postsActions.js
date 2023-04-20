import axios from 'axios';
import {
  FETCH_POSTS_REQUESTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../postsConstants/postsConstants';

export const fetchPostsRequest = () => {
  type: FETCH_POSTS_REQUESTS;
};

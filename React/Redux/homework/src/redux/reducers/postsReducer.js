import {
  FETCH_POSTS_REQUESTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../constants/postsConstants';

const initialState = {
  posts: [],
  error: '',
  loading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTS:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, posts: [], error: action.error };
    default:
      return state;
  }
};

export default postsReducer;

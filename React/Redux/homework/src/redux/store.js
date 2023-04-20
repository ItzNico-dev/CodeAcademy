import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsReducer';

const store = configureStore({
  reducer: {
    users: postsReducer,
  },
});

export default store;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/usersActions';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUsers(5));
        }}
      >
        5 users
      </button>{' '}
      <br />
      <button
        onClick={() => {
          dispatch(fetchUsers(10));
        }}
      >
        10 users
      </button>
      {loading && <h1>Loading...</h1>}
      {error && <p>Error: {error}</p>}
      <ul>
        {
          users.map((user, index)=>{
            return <li key={index}>name: {user.name} email: {user.email}</li>
          })
        }
      </ul>
    </div>
  );
}




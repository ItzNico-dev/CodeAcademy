import React from 'react';
import useUsers from '../../hooks/useUsers';

export default function UserList() {
  const { isLoading, isError, data, error } = useUsers();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <pre>{error}</pre>;
  }

  return (
    <div>
      {data.map((user) => {
        return (
          <div>
            <p>
              {user.name.first} {user.name.last}
            </p>
            <img src={user.picture.medium} alt='' />
          </div>
        );
      })}
    </div>
  );
}

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
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

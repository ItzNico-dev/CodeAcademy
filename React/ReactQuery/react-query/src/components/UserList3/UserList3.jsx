import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const USERS = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  { username: 'user3', email: 'user3@example.com', password: 'password3' },
  { username: 'user4', email: 'user4@example.com', password: 'password4' },
  { username: 'user5', email: 'user5@example.com', password: 'password5' },
];
export default function UserList3() {
  // function wait() {
  //   return new setTimeout(() => {}, 1000);
  // }

  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: ['users', 'hardcoded'],
    queryFn: () => {
      return USERS;
    },
    enabled: true
  });

  const userMutation = useMutation({
    mutationFn: () => {
      USERS.push({
        username: 'user6',
        email: 'user5@example.com',
        password: 'password6',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users', 'hardcoded']);
    },
  });

  if (userQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={() => userMutation.mutate()}>add</button>
      {userQuery.data.map((user) => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

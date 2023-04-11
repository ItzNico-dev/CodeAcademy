import React from 'react';

export default function UserData() {
  const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

  return (
    <div>
      {fetch(ENDPOINT)
        .then((res) => res.json())
        .then()
        
        }
    </div>
  );
}

//fetch example?
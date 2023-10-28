// YourComponent.js

import React  from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER, UPDATE_USER } from './../graphql';

const Test = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: '123' },
  });

  const [updateUser] = useMutation(UPDATE_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleUpdateUser = () => {
    updateUser({ variables: { userId: '123', newName: 'New Name' } })
      .then(response => {
        // Handle the response if needed
      })
      .catch(error => {
        // Handle errors if needed
      });
  };

  return (
    <div>
      <div>User's name: {data.user.name}</div>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default Test;

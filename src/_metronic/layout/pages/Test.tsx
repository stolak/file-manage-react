import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_FOLDER} from './../graphql';

const Test = () => {
  const [name, setName] = useState('');
  const [createFolder] = useMutation(CREATE_FOLDER);

  const handleCreateFolder = async () => {
    try {
      const { data } = await createFolder({
        variables: { name },
      });
      console.log('Folder created:', data.createFolder);
    } catch (error) {
      console.error('Error creating folder:', error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Folder Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateFolder}>Create Folder</button>
    </div>
  );
}

export {Test};

// graphql.js

import { gql } from '@apollo/client';



export const CREATE_FOLDER = gql`
mutation CreateFolder($name: String) {
  createFolder(name: $name) {
    id
    name
  }   
}
`;

const CREATE_FILE = gql`
  mutation CreateFile($input: FileInput!) {
    createFile(input: $input) {
      id
      name
      type
      path
      folderId
    }
  }
`;


export const GET_FOLDERS = gql`
query {
  folders {
    id
    name
  }
}
`;



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



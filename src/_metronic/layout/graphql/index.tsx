// graphql.js

import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $newName: String!) {
    updateUser(id: $userId, name: $newName) {
      id
      name
    }
  }
`;

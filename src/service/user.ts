import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users(skip: 0, take: 10) {
      _id
      userName
      fullName
      email
      password
      role
      address
      phone
      gender
      birthday
      createdAt
      updatedAt
    }
    userCount
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($_id: String!) {
    user(_id: $_id ) {
      _id
      userName
      fullName
      email
      password
      role
      address
      phone
      gender
      birthday
      createdAt
      updatedAt
    }
  }
`

export const ADD_USER = gql`
  mutation createUser(
    $userName: String!
    $fullName: String!
    $email: String!
    $password: String!
    $role: String!
    $address: String
    $phone: String
    $birthday: DateTime
    $gender: String
  ) {
    createUser(
      createUserInput: {
        userName: $userName
        fullName: $fullName
        email: $email
        password: $password
        role: $role
        address: $address
        phone: $phone
        birthday: $birthday
        gender: $gender
      }
    ) {
      _id
      userName
      fullName
      email
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation removeUser($_id: String!) {
    removeUser(_id: $_id )
  }
`;

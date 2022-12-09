import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query getStudents {
    students(skip: 0, take: 10) {
      _id
      userName
      fullName
      email
      password
      address
      phone
      gender
      birthday
      createdAt
      updatedAt
    }
    studentCount
  }
`;

export const GET_STUDENT_BY_ID = gql`
  query getStudentById($_id: String!) {
    student(_id: $_id ) {
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

export const ADD_STUDENT = gql`
  mutation createStudent(
    $userName: String!
    $fullName: String!
    $email: String!
    $password: String!
    $address: String
    $phone: String
    $birthday: DateTime
    $gender: String
  ) {
    createStudent(
      createStudentInput: {
        userName: $userName
        fullName: $fullName
        email: $email
        password: $password
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


export const UPDATE_STUDENT = gql`
  mutation updateStudent(
    $_id: String!
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
    updateStudent(
      updateStudentInput: {
        _id: $_id
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

export const DELETE_STUDENT = gql`
  mutation removeStudent($_id: String!) {
    removeStudent(_id: $_id )
  }
`;

import { gql } from "@apollo/client";

export const GET_TEACHERS = gql`
  query getTeachers {
    teachers(skip: 0, take: 10) {
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
    teacherCount
  }
`;

export const GET_TEACHER_BY_ID = gql`
  query getTeacherById($_id: String!) {
    teacher(_id: $_id ) {
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
  }
`

export const ADD_TEACHER = gql`
  mutation createTeacher(
    $userName: String!
    $fullName: String!
    $email: String!
    $password: String!
    $address: String
    $phone: String
    $birthday: DateTime
    $gender: String
  ) {
    createTeacher(
      createTeacherInput: {
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

export const UPDATE_TEACHER = gql`
  mutation updateTeacher(
    $_id: String!
    $userName: String!
    $fullName: String!
    $email: String!
    $password: String!
    $address: String
    $phone: String
    $birthday: DateTime
    $gender: String
  ) {
    updateTeacher(
      updateTeacherInput: {
        _id: $_id
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

export const DELETE_TEACHER = gql`
  mutation removeTeacher($_id: String!) {
    removeTeacher(_id: $_id )
  }
`;

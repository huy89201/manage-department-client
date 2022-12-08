import { gql } from "@apollo/client";

export const GET_CLASSROOMS = gql`
  query getClassrooms {
    classrooms(skip: 0, take: 10) {
        _id
        schedule
        startDate
        endDate
        createdAt
        updatedAt
        teacher {
            _id
            fullName
        }
        subject {
            _id
            name
        }
        students {
            _id
            fullName
        }
    }
  }
`;

export const GET_CREATE_CLASS_DATA = gql`
    query getCreateClassData {
        teachers(skip: 0, take: 10) {
            _id
            userName
            fullName
        }
        subjects(skip: 0, take: 10) {
            _id
            name
        }
    }
`

export const GET_CLASSROOM_BY_ID = gql`
  query getClassroomById($_id: String!) {
    classroom(_id: $_id ) {
        _id
        schedule
        startDate
        endDate
        createdAt
        updatedAt
        teacher {
            _id
            fullName
        }
        subject {
            _id
            name
        }
        students {
            _id
            fullName
        }
    }
  }
`

export const ADD_CLASSROOM = gql`
  mutation createClassroom(
    $schedule: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $teacherId: String!
    $subjectId: String!
  ) {
    createClassroom(
      createClassroomInput: {
        schedule:$schedule
        startDate:$startDate
        endDate:$endDate
        teacherId:$teacherId
        subjectId:$subjectId
      }
    ) {
        _id
        schedule
        startDate
        endDate
    }
  }
`;


export const UPDATE_CLASSROOM = gql`
  mutation updateClassroom(
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
    updateClassroom(
      updateClassroomInput: {
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

export const DELETE_CLASSROOM = gql`
  mutation removeClassroom($_id: String!) {
    removeClassroom(_id: $_id )
  }
`;

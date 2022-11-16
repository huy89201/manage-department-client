import { gql } from "@apollo/client";

export const GET_SUBJECTS = gql`
  query getSubjects {
    subjects(skip: 0, take: 10) {
      _id
      name
    }
    subjectCount
  }
`;

export const GET_SUBJECT_BY_ID = gql`
    query getSubjectById($_id: String!) {
    subject(_id: $_id ) {
      _id
      name
    }
  }
`

export const ADD_SUBJECT = gql`
  mutation createSubject(
    $name: String!
  ) {
    createSubject(
        createSubjectInput: {
        name: $name
      }
    ) {
      _id
      name
    }
  }
`;

export const UPDATE_SUBJECT = gql`
  mutation updateSubject(
    $name: String!
    $_id: String!
  ) {
    updateSubject(
      updateSubjectInput: {
        name: $name
        _id: $_id
      }
    ) {
      _id
      name
    }
  }
`;



export const DELETE_SUBJECT = gql`
  mutation removeSubject($_id: String!) {
    removeSubject(_id: $_id )
  }
`;
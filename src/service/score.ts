import { gql } from "@apollo/client";

export const CREATE_SCORE = gql`
  mutation createScore(
    $subjectId: String!
    $studentId: String!
    $processScore: Float!
    $midtermScore: Float!
  ) {
    createScore(
        createScoreInput: {
        subjectId: $subjectId
        studentId: $studentId
        processScore: $processScore
        midtermScore: $midtermScore
      }
    ) {
        _id
        subject {
            name
        }
        subjectId
        processScore
        midtermScore
        finalScore
    }
  }
`;

export const UPDATE_SCORE = gql`
  mutation updateScore(
    $_id: String!
    $processScore: Float!
    $midtermScore: Float!
  ) {
    updateScore(
        updateScoreInput: {
        _id: $_id
        processScore: $processScore
        midtermScore: $midtermScore
      }
    ) {
        _id
        subject {
            name
        }
        subjectId
        processScore
        midtermScore
        finalScore
    }
  }
`;
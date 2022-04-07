import { gql } from '@apollo/client';

export const ADD_ISSUE = gql`
  mutation addIssue($_id: ID!, $issueType: String!) {
    addIssue(_id: $_id, issueType : $issueType) {
      _id
      facilityName
      address
      photoName
      issues
    }
  }
`;

 
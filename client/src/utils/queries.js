import { gql } from '@apollo/client';

export const QUERY_FACILITIES = gql`
  query facilities {
    facilities {
      _id
      facilityName
      address
      photoName
      issues
    }
  }
`;

 
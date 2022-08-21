import { gql } from '@apollo/client';

export const QUERY_MISSION_LIST = gql`
  query MissionList{
        missions(limit: 50, find: {manufacturer: "", name: ""}) {
          description
          manufacturers
          name
          website
        }
    }
`;
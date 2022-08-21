import { gql } from '@apollo/client';

export const QUERY_MISSION_LIST = gql`
query LaunchesPast($sort_name: String!, $limit: Int!, $mission_name: String!) {
  launchesPast(sort: $sort_name, limit: $limit, find: {mission_name: $mission_name}) {
    mission_name
    id
    launch_date_utc
    details
  }
}
`;
import { gql } from '@apollo/client';

export const QUERY_MISSION_LIST = gql`
query LaunchesPastQuery($limit: Int!, $sort_name: String!) {
  launchesPast(sort: $sort_name, limit: $limit) {
    mission_name
    id
    launch_date_utc
    details
  }
}
`;
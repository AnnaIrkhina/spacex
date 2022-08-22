import { gql } from '@apollo/client';

export const QUERY_MISSION_LIST = gql`
query launchesPast($sort_name: String!, $limit: Int!, $mission_name: String!) {
  launchesPast(sort: $sort_name, limit: $limit, find: {mission_name: $mission_name}) {
    mission_name
    id
    launch_date_utc
    launch_date_unix

    details
    rocket {
      rocket_name
    }
    ships {
      image
      year_built
    }
    links {
      article_link
      video_link
    }
    
  }
}
`;
import { gql } from '@apollo/client';

export const QUERY_MISSION_LIST = gql`
query LaunchDetailesQuery( $id : ID!) {
  launch(id: $id) {
    links {
      article_link
      video_link
    }
    mission_name
    rocket {
      rocket_name
    }
    ships {
      name
      image
      year_built
    }
    details
    launch_date_unix
    id
  }
}
`;
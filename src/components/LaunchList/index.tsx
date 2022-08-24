import * as React from 'react';
import { useLaunchesPastQuery  } from '../../generated/graphql';
import LaunchList, {IOwnProps} from './LaunchList';

const LaunchListContainer :React.FC<IOwnProps> = (props) => {
  const {limit, sort_name, mission_name} = props;
  const { data, error, loading } = useLaunchesPastQuery({
    variables: { limit: limit, sort_name: sort_name, mission_name: mission_name || "" },
  });


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }


  return <LaunchList data={data} {...props}/>;
};

export default LaunchListContainer;
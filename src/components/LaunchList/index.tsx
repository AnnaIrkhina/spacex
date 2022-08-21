import * as React from 'react';
import { useLaunchesPastQueryQuery } from '../../generated/graphql';
import LaunchList, {IOwnProps} from './LaunchList';

const LaunchListContainer :React.FC<IOwnProps> = (props) => {
  const { data, error, loading, refetch } = useLaunchesPastQueryQuery({
    variables: { limit: 10, sort_name: "mission_name" },
  });

  const {limit, sort_name} = props;


  React.useEffect(() => {
    refetch({ limit:  limit, sort_name: sort_name});
  }, [refetch, limit, sort_name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props}/>;
};

export default LaunchListContainer;
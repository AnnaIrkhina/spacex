import * as React from 'react';
import { useLaunchDetailesQueryQuery } from '../../generated/graphql';
import LaunchDetailes from './LaunchDetailes';

interface OwnProps {
  id: number;
}

const LaunchDetailesContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchDetailesQueryQuery({
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error ) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a mission from the panel</div>;
  }

  return <LaunchDetailes data={data} />;
};

export default LaunchDetailesContainer;
import * as React from 'react';
import { useMissionListQuery } from '../../generated/graphql';
import MissionList from './MissionList';

const MissionListContainer = () => {
  const { data, error, loading } = useMissionListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <MissionList data={data} />;
};

export default MissionListContainer;
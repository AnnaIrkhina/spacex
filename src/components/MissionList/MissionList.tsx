import * as React from 'react';
import { MissionListQuery } from '../../generated/graphql';
import './styles.css';
import MissionCard from './MissionCard'

interface Props {
  data: MissionListQuery;
}

interface IMissionCard {
    mission: {
        description?: string | null | undefined;
        manufacturers?: (string | null)[] | null | undefined;
        name?: string | null | undefined;
        website?: string | null | undefined;
    }
}

const className = 'MissionList';

const MissionList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h1 className={`${className}__title`}>Missions</h1>
    <ul className={`${className}__list`}>
      {!!data.missions &&
        data.missions.map(
          (mission, i) =>
            !!mission && <MissionCard key={i} mission={mission}/>
        )}
    </ul>
  </div>
);
export default MissionList;
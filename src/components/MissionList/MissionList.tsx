import * as React from 'react';
import { MissionListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: MissionListQuery;
}

const className = 'MissionList';

const MissionList: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h1 className={`${className}__title`}>Missions</h1>
    <ul className={`${className}__list`}>
      {!!data.missions &&
        data.missions.map(
          (mission, i) =>
            !!mission && (
              <li key={i} className={`${className}__item`}>
                <h2>{mission.name} ({mission.manufacturers})</h2>
                <div>{mission.description}</div>
                {!!mission.website && <a href={mission.website || ""}>{mission.website}</a>}
              </li>
            ),
        )}
    </ul>
  </div>
);
export default MissionList;
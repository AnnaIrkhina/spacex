import * as React from 'react';
import { MissionListQuery } from '../../generated/graphql';
import './styles.css';

interface IMissionCard {
    description?: string | null | undefined;
    manufacturers?: (string | null)[] | null | undefined;
    name?: string | null | undefined;
    website?: string | null | undefined;
}

interface IMissionProps {
    mission: IMissionCard;
}

const className = 'MissionCard';

const MissionCard = ( props: IMissionProps) => {
    const { mission } = props;
    
    return(
        <div className={className}>
            {!!{mission} && 
                <li className={`${className}__item`}>
                    <h2>{mission.name} ({mission.manufacturers})</h2>
                    <div>{mission.description}</div>
                    <a href={mission.website || ""}>{mission.website}</a>
                </li>}
        </div>
    );
};
export default MissionCard;
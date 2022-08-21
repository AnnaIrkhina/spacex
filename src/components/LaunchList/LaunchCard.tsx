import * as React from 'react';
import { LaunchesPastQueryQuery } from '../../generated/graphql';
import './styles.css';

interface ILaunchCard {
        mission_name?: string | null | undefined;
        id?: string | null | undefined;
        launch_date_utc?: any | null;
        details?: string | null | undefined;
}

interface ILaunchProps {
    launch: ILaunchCard,
    handleIdChange: (id: number) =>  void;
}

const className = 'LaunchCard';

const LaunchCard = ( props: ILaunchProps) => {
    const { launch, handleIdChange } = props;
    var dt = new Date(launch.launch_date_utc).getFullYear();
    
    return(
        <div className={className} onClick={(e) => handleIdChange(parseInt(launch.id || '77'))}>
            {!!{launch} && 
                <li className={`${className}__item`}>
                    <h2 className={`${className}__title`}>{launch.mission_name} ({dt})</h2>
                    {!!launch.details && <div className={`${className}__details`}>{`${launch.details?.slice(0, 100)}...`}</div>}
                </li>}
        </div>
    );
};
export default LaunchCard;
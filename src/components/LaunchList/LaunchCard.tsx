import * as React from 'react';
import { LaunchesPastQuery } from '../../generated/graphql';
import './styles.css';

interface ILaunchCard {
        mission_name?: string | null | undefined;
        id?: string | null | undefined;
        launch_date_unix?: any | null;
        launch_date_utc?: any | null;
        details?: string | null | undefined;

        rocket?: { rocket_name?: string }, 
        ships?: { image?:string, 
                name?: string,
                year_built?: number }[],
        links?: { 
            article_link?: string, 
            video_link?: string}
}

interface ILaunchProps {
    launch: ILaunchCard,
}

const LaunchCard = ( props: ILaunchProps) => {
    const { launch } = props;
    var dt = new Date(launch.launch_date_utc).getFullYear();
    const className = 'LaunchCard';
    return(
        <>
        {!!launch && launch.details?
            <div className={className}>
                {!!{launch} && 
                    <li className={`${className}__item`}>
                        {!!launch.details && 
                        <div className={className}>
                            <h2>{launch.mission_name}({dt})</h2>
                            <div className={`${className}__details`}>{launch.details}</div>
                            <a href={launch.links?.article_link || ""} target="blank" >More details...</a>
                            <h3>{launch.rocket?.rocket_name}</h3>
                            <div className={`${className}__ships`}>
                            {!!launch.ships && launch.ships?.map((ship, i) =>{
                            return(
                                <div key={i} className={`${className}__ship-card`}>
                                    <span>{ship?.name}</span><span>({ship?.year_built})</span>
                                    <img className={`${className}__img`} src={ship?.image|| ""} alt={launch.mission_name || ""}/>
                                </div>)})}
                            </div>
                        </div>}
                    </li>}
            </div>:
            <></>}
        </>
    );
};
export default LaunchCard;
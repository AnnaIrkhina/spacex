import * as React from 'react';
import { useState } from 'react';
import { LaunchDetailesQueryQuery } from '../../generated/graphql';
import './styles.css';

interface IProps {
  data: LaunchDetailesQueryQuery;
}


const className = 'LaunchDetailes';

const LaunchDetailes: React.FC<IProps> = ({ data }) => {
  console.log(data);
  if (!data?.launch) {
    return <div>No launch available</div>;
  }
  const {launch} = data;
  return (
    <div className={className}>
      <h2>{launch.mission_name}</h2>
      <div className={`${className}__details`}>{launch.details}</div>
      <a href={launch.links?.article_link || ""} target="blank" >More details...</a>
      <h3>{launch.rocket?.rocket_name}</h3>
      <div className={`${className}__ships`}>
        {!!launch.ships && launch.ships?.map((ship, i) =>{
          return(
            <div key={i} className={`${className}__ship-card`}>
              <span>{ship?.name}</span><span>({ship?.year_built})</span>
              <img className={`${className}__img`} src={ship?.image|| ""}/>
            </div>
          )
        })}
      </div>
    </div>
  )
};
export default LaunchDetailes;
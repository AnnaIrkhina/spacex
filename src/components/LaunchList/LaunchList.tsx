import * as React from 'react';
import { LaunchesPastQuery } from '../../generated/graphql';
import './styles.css';
import LaunchCard from './LaunchCard'

export interface IOwnProps {
    limit: number,
    sort_name: string,
    mission_name?: string
  }
  
  interface IProps extends IOwnProps {
    data: LaunchesPastQuery;
  }


const className = 'LaunchList';

const LaunchList: React.FC<IProps> = ({ data }) =>{

  return(
  <div className={className}>
    
    <div className={`${className}__container`}>
        <ul className={`${className}__list`}>
        {!!data.launchesPast &&
            data.launchesPast.map(
            (launch: any, i: number) =>
                !!launch && <LaunchCard key={i} launch={launch}/>
            )}
        </ul>
    </div>
  </div>)
};
export default LaunchList;
import * as React from 'react';
import { LaunchesPastQuery } from '../../generated/graphql';
import './styles.css';
import LaunchCard from './LaunchCard'

export interface IOwnProps {
    handleIdChange: (newId: number) => void;
    setId: (id: number ) => void;
    limit: number,
    sort_name: string,
    mission_name?: string
  }
  
  interface IProps extends IOwnProps {
    data: LaunchesPastQuery;
  }

  export interface ILaunch {
        mission_name?: String | undefined;
        id?: String | undefined;
        launch_date_utc?: any;
        details?: String | undefined;
  }

const className = 'LaunchList';

const LaunchList: React.FC<IProps> = ({ data, handleIdChange }) =>{

  return(
  <div className={className}>
    
    <div className={`${className}__container`}>
        <ul className={`${className}__list`}>
        {!!data.launchesPast &&
            data.launchesPast.map(
            (launch: any, i: number) =>
                !!launch && <LaunchCard key={i} launch={launch} handleIdChange={handleIdChange}/>
            )}
        </ul>
    </div>
  </div>)
};
export default LaunchList;
import * as React from 'react';
import { LaunchesPastQueryQuery } from '../../generated/graphql';
import './styles.css';
import LaunchCard from './LaunchCard'

export interface IOwnProps {
    handleIdChange: (newId: number) => void;
    limit: number,
    sort_name: string,
  }
  
  interface IProps extends IOwnProps {
    data: LaunchesPastQueryQuery;
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
import * as React from 'react';
import LaunchList from './components/LaunchList';

import './App.css';

const App = () => {

  const [limit, setLimit] = React.useState(5);
  const [sortName, setSortName] = React.useState('mission_name');
  const [missionName, setMissionName] = React.useState('');


  const sortNameChanged = (value: string) => {
    console.log('sortNameChanged', value)
    setSortName(value);
  }

  const limitChanged = (value: string) => {
    setLimit(parseInt(value));
  }

  const missionNameChange = (value: string) => {
    setMissionName(value);
  }

  return (
    <div className="App">
      <div className="App__header">
        <h1>Missions</h1>
        <div>
          <select className='App__select' name="sort" id="sort" onChange={(e) => sortNameChanged(e.target.value)}>
            <option value="mission_name">Sort by Mission title</option>
            <option value="launch_date_unc">Sort by year</option>  
          </select>
          <select className='App__select' name="limit" id="limit" onChange={(e) => limitChanged(e.target.value)}>
            <option value="5">Show 5 Missions</option>
            <option value="15">Show 15 Missions</option>
            <option value="50">Show 50 Missions</option>
            
          </select>
          <input type="text" className='App__select' value={missionName} onChange={(e) => missionNameChange(e.target.value)}/>
        </div>
      </div>
      <div className="App__body">
        <LaunchList limit={limit} sort_name={sortName} mission_name={missionName} />
      </div>
      
    </div>
  );
};

export default App;
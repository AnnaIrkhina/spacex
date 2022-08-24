import * as React from 'react';
import LaunchList from './components/LaunchList';
import debounce from 'lodash.debounce';

import './App.css';

const App = () => {

  const [limit, setLimit] = React.useState(5);
  const [sortName, setSortName] = React.useState('mission_name');
  const [missionName, setMissionName] = React.useState('');
  const [debouncedMissionName, setDebouncedMissionName] =  React.useState('')

  const sortNameChanged = (value: string) => {
    setSortName(value);
  }

  const limitChanged = (value: string) => {
    setLimit(parseInt(value));
  }

  function missionNameChange (value: string)  {
    setMissionName(value);
    debouncedSave(value);
  }

  const debouncedSave = React.useCallback(
		debounce((value: string) => setDebouncedMissionName(value), 1000),
		[]
	);

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
          <input 
            type="text" 
            className='App__input' 
            value={missionName} 
            placeholder="Search, start type Mission titile"
            onChange={(e) => missionNameChange(e.target.value)}/>
        </div>
      </div>
      <div className="App__body">
        <LaunchList limit={limit} sort_name={sortName} mission_name={debouncedMissionName} />
      </div>
      
    </div>
  );
};

export default App;
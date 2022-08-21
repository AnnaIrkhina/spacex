import * as React from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetailes from './components/LaunchDetailes';

import './App.css';

const App = () => {

  const [id, setId] = React.useState(77);
  const [limit, setLimit] = React.useState(5);
  const [sortName, setSortName] = React.useState('mission-name');

  const handleIdChange = React.useCallback((newId:number) => {
    setId(newId);
  },[]);

  const sortNameChanged = (value: string) => {
    setSortName(value);
  }

  const limitChanged = (value: string) => {
    setLimit(parseInt(value));
  }


  return (
    <div className="App">
      <div className="App__header">
        <h1>Missions</h1>
        <div>
          <select className='App__select' name="sort" id="sort" onChange={(e) => sortNameChanged(e.target.value)}>
            <option value="mission-name">Sort by Mission</option>
            <option value="launch_date_utc">Sort by year</option>  
          </select>
          <select className='App__select' name="limit" id="limit" onChange={(e) => limitChanged(e.target.value)}>
            <option value="5">Show 5 Missions</option>
            <option value="15">Show 15 Missions</option>
            <option value="50">Show 50 Missions</option>
            
          </select>
        </div>
      </div>
      <div className="App__body">
        <LaunchList handleIdChange={handleIdChange} limit={limit} sort_name={sortName} setId={setId}/>
        <LaunchDetailes id={id} />
      </div>
      
    </div>
  );
};

export default App;
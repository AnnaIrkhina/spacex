import * as React from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetailes from './components/LaunchDetailes';

import './App.css';

const App = () => {

  const [id, setId] = React.useState(77);
  const [limit, setLimit] = React.useState(10);
  const [sortName, setSortName] = React.useState('mission-name');
  const handleIdChange = React.useCallback((newId:number) => {
    setId(newId);
  },[]);
  const sortByName = () => {
    console.log('sortByName mission-name')
    setSortName('mission-name');
  }
  const sortByYear = () => {
    console.log('sortByName launch_date_utc')
    setSortName('launch_date_utc');
  }

  return (
    <div className="App">
      <h1 className="App__title">Missions</h1>
      <button onClick={(e) => sortByName()}>Sort by name</button>
      <button onClick={(e) => sortByYear()}>Sort by year</button>
      <LaunchList handleIdChange={handleIdChange} limit={limit} sort_name={sortName}/>
      <LaunchDetailes id={id} />
    </div>
  );
};

export default App;
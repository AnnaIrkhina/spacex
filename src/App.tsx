import * as React from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetailes from './components/LaunchDetailes';

import './App.css';

const App = () => {

  const [id, setId] = React.useState(77);
  const handleIdChange = React.useCallback((newId:number) => {
    setId(newId);
  },[]);


  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange}/>
      <LaunchDetailes id={id} />
    </div>
  );
};

export default App;
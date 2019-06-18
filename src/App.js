import React from 'react';
import Login from './login';
import {Switch,Route} from 'react-router-dom';
import Tabledata from './tabledata';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/login' exacts component={Login} />
      <Route path='/table'  component={Tabledata} />
    </Switch>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTabs from './Tabs';
import { BrowserRouter, Route } from 'react-router-dom';
import Ground from './Ground';
import Rank from './Rank';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <SimpleTabs></SimpleTabs>
      </div>
      <div className="App-body">
        <BrowserRouter>
          <Route exact={true} path="/">
            <Ground />
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

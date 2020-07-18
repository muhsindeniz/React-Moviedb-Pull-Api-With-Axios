import React from 'react';
import './App.css';

import Header from './Components/Header';
import PopularMovie from './Components/PopularMovie';
import TrendingMovie from './Components/TrendingMovie';
import TopList from './Components/TopList';

function App() {
  return (
    <div className="App">
        <Header
        title={"Trending Movies"}
        />

        <PopularMovie />

        <Header
        title={"Popular Movies"}
        />

      <TrendingMovie />

      <Header
        title={"Top List"}
        />

        <TopList />
        
    </div>
  );
}

export default App;

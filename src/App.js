import React from 'react';
import './App.css';
import Row from './Components/Row';
import request from './helper/request';

function App() {
  return (
    <div className="App">
    <h1>Netflix Clone</h1>
    <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      
    </div>
  );
}

export default App;

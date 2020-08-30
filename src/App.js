import React from 'react';
import './App.css';
import Row from './Components/Row';
import request from './helper/request';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="app">
    {/* Navbar */}
    <Nav />
    <Banner />
    


    <Row title="Netflix Originals" 
         fetchUrl={request.fetchNetflixOriginals}
         isLargeRow
    />
    <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
    <Row title="Horror Moviee" fetchUrl={request.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;

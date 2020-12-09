import React from 'react'
import './App.css'
import Row from './Row';
import request from './request'
import Banner from './Banner'
function App(){
  return(
    <div className="App">
      <Banner />
      <Row title="Now Playing" fetchURL={request.fetchNowPlaying} bigrow={true} />
      <Row title="Popular" fetchURL={request.fetchPopular} />
      <Row title="Trending" fetchURL={request.fetchTrending} />
    </div>

  )
}
export default App
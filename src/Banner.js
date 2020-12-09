import React from 'react'
import {useState,useEffect} from 'react'
import Request from './request'
import axios from './axios'
function Banner() {
    const [movie,setMovie]= useState([]);
    const baseURL="http://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function getMovie(){
            const req=await axios.get(Request.fetchTopRated);
            const mov=req.data.results[Math.floor(Math.random()*req.data.results.length-1)];
            //console.log(mov);
            setMovie(mov);
            return mov;
        }
        getMovie();
      
        
    },[]); //[])
    console.log(movie);
    return (
        <header className="banner" style={{backgroundImage:"url("+baseURL+movie.backdrop_path+")"}}>
             <h1 className="banner_name">{movie.title}</h1>
             <div className="banner_buttons">
                 <button className="banner_button" >Play</button>
                 <button className="banner_button" >My List</button>
             </div>
            <div className="banner_content">
          
           {movie.overview}
           </div>
        </header>
    )
}

export default Banner

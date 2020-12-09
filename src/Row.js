import React from 'react'
import axios from './axios'
import {useEffect,useState} from 'react';

function Row({title,fetchURL, bigrow}) {
    const [movies,setMovies]=useState([])
    const baseURL="http://image.tmdb.org/t/p/original";
    useEffect(() => {
       async function getMovies(){
           const response=await axios.get(fetchURL)
          //console.log(response.data.results)
          setMovies(response.data.results)
          return response;
       }
       getMovies();
       
    }, [fetchURL])
    console.log(movies)
    return (
        <div className="row">
            <h2 className="title" >{title}</h2>
            <div className="row_posters">
                { movies.map((movie)=>{
                    return(<img key={movie.id} className={bigrow ? "row_poster_big":"row_poster"} src={bigrow?(baseURL+movie.poster_path):(baseURL+movie.backdrop_path)} alt={movie.name} />)
                })}
            </div>
        </div>
    )
}

export default Row

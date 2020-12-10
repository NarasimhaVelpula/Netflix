import React from 'react'
import axios from './axios'
import {useEffect,useState} from 'react';
import YouTube from 'react-youtube';
function Row({title,fetchURL, bigrow}) {
    const [movies,setMovies]=useState([])
    const [vedioId,setVedioId]=useState([])
    const [block,setBlock]=useState({
        block:"none"
    })
    const [moviename,setMoviename]=useState([])
    
    const baseURL="http://image.tmdb.org/t/p/original";
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
    useEffect(() => {
       async function getMovies(){
           const response=await axios.get(fetchURL)
          //console.log(response.data.results)
          setMovies(response.data.results)
          return response;
       }
       getMovies();
       
    }, [fetchURL])
    console.log(movies);
    function movieHandler(movieId){
        async function getMovieKey(){
        const response=await axios.get("/movie/"+movieId+"/videos?api_key=7e945e91ee18f3f5b8cbb54293dc7ded&language=en-US")
        console.log(response)
        setVedioId(response.data.results[0].key)
        setMoviename(response.data.results[0].name)
        setBlock("block")
        return response;
    }
    getMovieKey();
    }
    function unset(){
        setBlock("none");
        setVedioId("");
    }
    return (
        <div className="row">
            <h2 className="title" >{title}</h2>
            <div className="row_posters">
                { movies.map((movie)=>{
                    return(<img onClick={()=>{movieHandler(movie.id)}}key={movie.id} className={bigrow ? "row_poster_big":"row_poster"} src={bigrow?(baseURL+movie.poster_path):(baseURL+movie.backdrop_path)} alt={movie.name} />)
                })}
            </div>  
            <div className="modal" style={{display:block}}>
            <div className="modal-content">
            <span className="close" onClick={unset}>&times;</span>
            {vedioId!==""?<YouTube videoId={vedioId} opts={opts} />   : ""}
            <h2 className="title">{moviename}</h2>
            </div>
        </div>
        </div>
        
    )
}

export default Row

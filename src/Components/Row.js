import React, { useState, useEffect } from "react";
import axios from "../helper/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'

const base_img_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  // a snipppet of code whiich runs base on a specific condition/variable

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleVideoPlayback = (movie) =>{
      if(trailerUrl){
          setTrailerUrl('');
      }else{
          movieTrailer(movie?.name || "")
          .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));

          })
          .catch((error)=> console.log(error));
      }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick= {handleVideoPlayback(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_img_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          // src={`${base_img_url}${movie.poster_path}   `} alt={movie.name}/>
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

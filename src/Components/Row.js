import React, {useState, useEffect} from 'react';
import axios from '../helper/axios';
import './Row.css'

const base_img_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    // a snipppet of code whiich runs base on a specific condition/variable
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;       
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);



    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map(movie => (
                <img 
                key={movie.id}
                className="row__poster"
                src={`${base_img_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
                
            </div>
        </div>
    )
}

export default Row;
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const MovieApp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState([]);
    const [posterUrl, setPosterUrl ] = useState("");
    //const [details, setDetails ] = useState(false);
    
    let showDetails = false;

    //fetch movies
    const fetchMovies = async (searchTerm, year) => {
        setLoading(true);
        setError(null);

        const API_KEY = process.env.REACT_APP_API_KEY;

        setMovie([]);

        try {
            console.log(year);
            let searchQuery = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&type=movie`;
            if (year && year !== "Any") {
                searchQuery += `&y=${year}`;
            }
            console.log(searchQuery);
            const response = await axios.get(searchQuery);
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            } else {
                setError(response.data.Error);
                setMovies([])
            }
        } catch (error) {
            setError('An Error Occured While Fetching the Data:', error);
        } finally {
            setLoading(false);
        }
    }

    //fetch movies
    const fetchMovie = async (imdbId, posterUrl) => {
        setLoading(true);
        setError(null);

        const API_KEY = process.env.REACT_APP_API_KEY;
        console.log("imdbId := ", imdbId);
        showDetails = true;
        //setDetails( true );
        try {
            let searchQuery = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbId}&plot=full`;
            console.log(searchQuery);
            const response = await axios.get(searchQuery);
             if (response.data.Response === "True") {
                setMovie(response.data);
                setPosterUrl(posterUrl);                
             } else {
                 setError(response.data.Error);
                 setMovie([]);
             }
        } catch (error) {
            setError('An Error Occured While Fetching the Data:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {Object.keys(movie).length === 0 &&
                <SearchBar onSearch={fetchMovies} />  
            }
            
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}

            {Object.keys(movie).length > 0 &&   
                <MovieDetails movieData={movie} posterUrl={posterUrl} />}
           
            {Object.keys(movie).length === 0  &&
                <MovieList movies={movies} onMovieSelect={fetchMovie} />
            }
        </div>);
}

export default MovieApp;
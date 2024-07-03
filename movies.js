import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get('http://localhost:5000/movies');
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <div key={movie._id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre}</p>
                    <p>Showtimes: {movie.showtimes.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}

export default Movies;

import React, { Component } from 'react';

class RandomMovies extends Component {
    render() {
        const { movies } = this.props; // Access the movies array passed as a prop
        return (
            <div>
                <h2>Random Movies</h2>
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <strong>{movie.name}</strong>: {movie.description}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RandomMovies;

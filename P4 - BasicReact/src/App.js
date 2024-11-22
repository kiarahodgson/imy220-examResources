import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import RandomMovies from './components/RandomMovies';

const movies = [
    { name: 'Inception', description: 'A mind-bending thriller about dreams within dreams.' },
    { name: 'The Matrix', description: 'A hacker discovers the shocking truth about reality.' },
    { name: 'Interstellar', description: 'A journey through space and time to save humanity.' },
];

class App extends Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <RandomMovies movies={movies} />
            </div>
        );
    }
}

export default App;

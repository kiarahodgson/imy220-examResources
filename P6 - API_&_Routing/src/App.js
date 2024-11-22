import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/PostList';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/posts/:id" element={<PostList />} />
                </Routes>
            </Router>
        );
    }
}

export default App;

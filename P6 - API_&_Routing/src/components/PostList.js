import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter'; // A utility to access `params` in class-based components.
import Post from './Post';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null,
        };
    }

    componentDidMount() {
        const { id } = this.props.params;

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length === 0) {
                    this.setState({ error: `No posts found for user ID ${id}.` });
                } else {
                    this.setState({ posts: data });
                }
            })
            .catch((error) => console.error('Error fetching posts:', error));
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <p>{error}</p>;
        }

        return (
            <div>
                <h1>Posts by User {this.props.params.id}</h1>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

export default withRouter(PostList);

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Post from './Post';

// const PostList = () => {
//     const { id } = useParams(); // Get user ID from the URL
//     const [posts, setPosts] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.length === 0) {
//                     setError(`No posts found for user ID ${id}.`);
//                 } else {
//                     setPosts(data);
//                 }
//             })
//             .catch((error) => console.error('Error fetching posts:', error));
//     }, [id]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     return (
//         <div>
//             <h1>Posts by User {id}</h1>
//             {posts.map((post) => (
//                 <Post key={post.id} post={post} />
//             ))}
//         </div>
//     );
// };

// export default PostList;
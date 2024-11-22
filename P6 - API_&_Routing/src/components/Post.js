import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { post } = this.props;

        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        );
    }
}

export default Post;

// import React from 'react';

// const Post = ({ post }) => {
//     return (
//         <div>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//         </div>
//     );
// };

// export default Post;
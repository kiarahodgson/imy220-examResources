import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => this.setState({ users: data }))
            .catch((error) => console.error('Error fetching users:', error));
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <h1>User List</h1>
                {users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <Link to={`/posts/${user.id}`}>
                            <button>View Posts</button>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserList;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const UserList = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then((data) => setUsers(data))
//             .catch((error) => console.error('Error fetching users:', error));
//     }, []);

//     return (
//         <div>
//             <h1>User List</h1>
//             {users.map((user) => (
//                 <div key={user.id}>
//                     <h2>{user.name}</h2>
//                     <p>Email: {user.email}</p>
//                     <Link to={`/posts/${user.id}`}>
//                         <button>View Posts</button>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default UserList;

import { useLocation } from 'react-router-dom';

const User = () => {
    const user = useLocation().state

    return (
        <div className="user">
            <h1>Showing User {user.id}</h1>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Phone: {user.phone}</h2>
            <h2>Website: {user.website}</h2>
        </div>
    );
}

export default User;
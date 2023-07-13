import { useLocation } from 'react-router-dom';

const User = () => {
    const user = useLocation().state

    return (
        <div className="user">
            <h1>Showing User { user.id }</h1>
        </div>
    );
}

export default User;
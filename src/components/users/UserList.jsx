import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {/** Link component to direct to dynamic path and pass in state */}
              <Link to={`/users/${user.id}`} state={user}>
                View User
              </Link>
            </div>
          );
        })}
      </div>
    );

}

export default UserList;
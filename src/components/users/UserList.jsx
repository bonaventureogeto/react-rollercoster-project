import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const UserList = () => {
  // const [users, setUsers] = useState([]);
  const { data: users, loading } = useFetch("https://jsonplaceholder.typicode.com/users")

    // const fetchUsers = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const users = await response.json();
    //     setUsers(users);
    // }

    // useEffect(() => {
    //     fetchUsers();
  // }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

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
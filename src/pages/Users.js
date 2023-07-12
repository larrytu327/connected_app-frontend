import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function Users(props) {

		const [ users, setUsers ] = useState([]);

        const BASE_URL = "http://localhost:8000/api/users/"

        const getUsers = async () => {
            try {
                const response = await fetch(BASE_URL)
                const allUsers = await response.json()
                setUsers(allUsers)
            } catch(err) {
                console.log(err)
            }
        }

        useEffect(() => {getUsers()}, [])
        
        console.log(`There are ${users.length} users available to render`)

        const loaded = () => {
            return users?.map((user) => {
              return (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <div>{user.first_name} {user.last_name}</div>
                    </Link>
                  <div>{user.type}</div>
                </div>
              );
            });
          };
        
          const loading = () => (
            <section className="users-list">
              <h1>
                Loading...
                <span>
                  <img
                    className="spinner"
                    src="https://freesvg.org/img/1544764567.png"
                  alt="spinner" />{" "}
                </span>
              </h1>
            </section>
          );
        
          return (
            <section className="users-list">{users && users.length ? loaded() : loading()}</section>
          );
}

export default Users

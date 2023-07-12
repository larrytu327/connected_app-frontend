import { useState, useEffect } from 'react';

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
                  <h1>{user.first_name} {user.last_name}</h1>
                  <h3>{user.type}</h3>
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

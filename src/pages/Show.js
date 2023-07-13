import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Show(props) {
    const [user, setUser] = useState(null);
    const [editForm, setEditForm] = useState({
        first_name: "",
        last_name: "",
        type: ""
    });
    const { id } = useParams();

    const updateUser = async (e) => {
        e.preventDefault()
    
        try {
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(editForm)
            }
            const response = await fetch(`http://localhost:8000/api/users/${id}/`, options)
            const updatedUser = await response.json()

            setUser(updatedUser)
            setEditForm(updatedUser)
        } catch (err) {
          console.log(err)
        }
      }
    
    const handleChange = event => {
          setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleReset = () => {
        getUser({
            first_name: "",
            last_name: "",
            type: ""
        });
    };
    
    async function getUser() {
        try {
            let data = await fetch(`http://localhost:8000/api/users/${id}/`);
            data = await data.json();
            setUser(data);
            setEditForm(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    console.log(`Current User: ${JSON.stringify(user)}`);

    const loaded = () => (
        <>        
            <div className="user">
                <h1>Show Page</h1>
                <h2>{user.first_name} {user.last_name}</h2>
                <h2>{user.type}</h2>
                <div>
                    <button type="button" className="btn btn-primary" onClick={removeUser}>Remove User</button>
                </div>
            </div>
            <section>
                <h2>Edit this User</h2>
                <form onSubmit={updateUser}>
                    <input type="text" value={editForm.first_name} name="first_name" placeholder="First Name" onChange={handleChange}/>
                    <input type="text" value={editForm.last_name} name="last_name" placeholder="Last Name" onChange={handleChange}/>
                    <input type="text" value={editForm.type} name="type" placeholder="Parent, Teacher, or Student" onChange={handleChange}/>
                    <input type="submit" value="Update User" />
                    <button type="button" onClick={handleReset}>Reset</button>
                </form> 
            </section>
        </>
    )

    const loading = () => {
        return <h1>Loading.........</h1>;
    };

    const navigate = useNavigate()

	const removeUser = async () => {
		try {
          const options = {
              method:"DELETE"
          }

          const response = await fetch(`http://localhost:8000/api/users/${id}/`, options)

					// you can inspect the response for debugging or extended 
					//functionality. 
          const deletedUser = await response.json()

          // console.log(deletedPerson)
          navigate('/')

          // navigate will change the browser's URL
          // which will cause react-router to "redirect" to home page;
          // the Main will then re-render the People component
          // upon mount People will fetch the updated index of people data

        } catch (err) {
            console.log(err)
            navigate(`http://localhost:8000/api/users/${id}/`)
        }
    }
    


    return (
        <>
            {user ? loaded() : loading()}
        </>
    )
};

export default Show;

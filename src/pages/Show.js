import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Show(props) {
    const [profile, setProfile] = useState(null);
    const [editForm, setEditForm] = useState({
        phone: "",
        type: ""
    });
    const { id } = useParams();

    const updateProfile = async (e) => {
        e.preventDefault()
    
        try {
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(editForm)
            }
            const response = await fetch(`http://localhost:8000/api/profiles/${id}/`, options)
            const updatedProfile = await response.json()

            setProfile(updatedProfile)
            setEditForm(updatedProfile)
        } catch (err) {
          console.log(err)
        }
      }
    
    const handleChange = event => {
          setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    const handleReset = () => {
        getProfile({
            phone: "",
            type: ""
        });
    };
    
    async function getProfile() {
        try {
            let data = await fetch(`http://localhost:8000/api/profiles/${id}/`);
            data = await data.json();
            setProfile(data);
            setEditForm(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    console.log(`Current Profile: ${JSON.stringify(profile)}`);

    const loaded = () => (
        <>        
            <div className="user">
                <h1>Show Page</h1>
                <h2>{profile.phone}</h2>
                <h2>{profile.type}</h2>
                <div>
                    <button type="button" className="btn btn-primary" onClick={removeProfile}>Remove Profile</button>
                </div>
            </div>
            <section>
                <h2>Edit this Profile</h2>
                <form onSubmit={updateProfile}>
                    <input type="text" value={editForm.phone} name="phone" placeholder="Phone Number" onChange={handleChange}/>
                    <input type="text" value={editForm.type} name="type" placeholder="Parent, Teacher, or Student" onChange={handleChange}/>
                    <input type="submit" value="Update Profile" />
                    <button type="button" onClick={handleReset}>Reset to Default</button>
                </form> 
            </section>
        </>
    )

    const loading = () => {
        return <h1>Loading.........</h1>;
    };

    const navigate = useNavigate()

	const removeProfile = async () => {
		try {
          const options = {
              method:"DELETE"
          }

          const response = await fetch(`http://localhost:8000/api/profiles/${id}/`, options)

					// you can inspect the response for debugging or extended 
					//functionality. 
          const deletedProfile = await response.json()

          // console.log(deletedPerson)
          navigate('/')

          // navigate will change the browser's URL
          // which will cause react-router to "redirect" to home page;
          // the Main will then re-render the People component
          // upon mount People will fetch the updated index of people data

        } catch (err) {
            console.log(err)
            navigate(`http://localhost:8000/api/profiles/${id}/`)
        }
    }
    


    return (
        <>
            {profile ? loaded() : loading()}
        </>
    )
};

export default Show;

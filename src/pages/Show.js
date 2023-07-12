import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Show(props) {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  async function getUser() {
    try {
        let data = await fetch(`http://localhost:8000/api/users/${id}/`);
        data = await data.json();
        setUser(data);
    } catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [])



  console.log(`Current User: ${JSON.stringify(user)}`);

  const loaded = () => (
    <div className="user">
        <h1>Show Page</h1>
        <h2>{user.first_name} {user.last_name}</h2>
        <h2>{user.type}</h2>
        <div>
                  <button className="delete" onClick={removeUser}>
                                Remove User
                            </button>
        </div>
</div>
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

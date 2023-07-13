import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function Profiles(props) {

		const [ profiles, setProfiles ] = useState([]);

        const BASE_URL = "http://localhost:8000/api/profiles/"

        const getProfiles = async () => {
            try {
                const response = await fetch(BASE_URL)
                const allProfiles = await response.json()
                setProfiles(allProfiles)
            } catch(err) {
                console.log(err)
            }
        }

        useEffect(() => {getProfiles()}, [])
        
        console.log(`There are ${profiles.length} profiles available to render`)

        const loaded = () => {
            return profiles?.map((profile) => {
              return (
                <div key={profile.id}>
                    <Link to={`/profiles/${profile.id}`}>
                        <div>{profile.phone}</div>
                    </Link>
                  <div>{profile.type}</div>
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
            <section className="users-list">{profiles && profiles.length ? loaded() : loading()}</section>
          );
}

export default Profiles

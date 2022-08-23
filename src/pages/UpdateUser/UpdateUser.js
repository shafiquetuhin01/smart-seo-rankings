import React, { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from "react-router-dom";
const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
    
        // update a data
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Success my data", data);
            alert("Data inserted successfully");
            event.target.reset();
          });
      };
    return (
        <div className='bg-gray-300 py-5'>
            <h3 className='text-4xl fob font-bold text-center my-4 '>Updating User : {user.name}</h3>
            <form action="" onSubmit={handleSubmit}>
        <div className="w-4/12 mx-auto border border-gray-300 my-5 p-2">
          <input
            className="text-2xl py-1 border border-gray-400 w-full text-center"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="text-2xl py-1 border border-gray-400 w-full text-center"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="text-2xl py-1 border border-gray-400 w-full"
            type="submit"
            value="Update"
          />
        </div>
      </form>
        </div>
    );
};

export default UpdateUser;
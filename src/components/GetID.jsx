import React from 'react'
import Users from './UsersId'; 

const idUser = (id) => {
  alert(`Clicked person with this id:${id}`)
};

const GetID = () => {
  return <div className="container">
    {Users.map(user => (
      <div key={user.id} onClick={() => idUser(user.id)} className="user-cards">
        <img src={user.image} alt="user img"/>
        <h2>{user.email}</h2>
        <h3>{user.carModel}</h3>
        <h2>{user.gender}</h2>
        <h2>{user.firstName}</h2>
      </div>
    ))}
  </div>;
};

export default GetID
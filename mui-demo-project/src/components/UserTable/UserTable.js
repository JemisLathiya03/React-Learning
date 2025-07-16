import React, { useEffect, useState } from 'react'
import BasicGrid from '../commons/BasicGrid/BasicGrid'

const UserTable = () => {

  const[user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  },[]);
  
  const columns= [
    { field: 'id', headerName: 'User Id', width: 150 },
    { field: 'name', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'website', headerName: 'Website', width: 150 },
  ];

  return (
    <BasicGrid
      rows={user}
      columns={columns}
      loading={!user.length}
    />
  )
}

export default UserTable
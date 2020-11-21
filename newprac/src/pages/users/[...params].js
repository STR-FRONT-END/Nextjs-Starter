import React from 'react';
import { useRouter } from 'next/router'

const UsersPage = () => {
    const router = useRouter()
    const { params }= router.query
    console.log(params);
  
    return (
      <h1>Users: {params} </h1>
    )
}

export default UsersPage
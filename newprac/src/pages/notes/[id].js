import React from 'react';
import { useRouter } from 'next/router'

const NotePage = () => {
    const router = useRouter()//gives us the actual router
    console.log(router);//you will see the id from the path on th query object
    const { id }= router.query// dynamically accesses the id 
  
    return (
      <h1>Note: {id} </h1>
    )
}

export default NotePage
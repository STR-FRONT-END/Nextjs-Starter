import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const NotePage = () => {
    const router = useRouter()//gives us the actual router
    console.log(router);//you will see the id from the path on th query object
    const { id }= router.query// dynamically accesses the id 
  
    return (
      <div>
        <h1>Note: {id} </h1>
        <Link href="/notes">
          <a>Notes</a>
        </Link>
      </div>
    )
}

export default NotePage
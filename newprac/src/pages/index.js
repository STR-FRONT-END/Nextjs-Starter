import React from 'react';
import Link from 'next/link';


const Page = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href = '/notes'>
        <a>
          Notes
        </a>
        </Link>
        <br/>
        <Link href = '/users'>
        <a>
          Users
        </a>
        </Link>
    </div>
  )
}

export default Page
import React from 'react';
import Link from 'next/link';

const Users = () => {
  return (
    <div>
      <h1>Users Index Page</h1>
      <Link href = 'users/[id]' as = { `/users/1` }>
        <a>
          User 1
        </a>
      </Link>
    </div>
  )
}

export default Users;
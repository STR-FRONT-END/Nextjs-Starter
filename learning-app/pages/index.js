import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1>This is cool</h1>

    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div> 
)
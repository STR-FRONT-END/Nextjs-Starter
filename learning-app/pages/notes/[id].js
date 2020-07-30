import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//params Catch-all routes
export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div>
    <h1>Note: {id} </h1>
    <Link href="/notes">
        <a>Notes</a>
      </Link>
      </div>
  )
}
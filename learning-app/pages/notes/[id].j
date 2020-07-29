import React from 'react'
//change file path to .js to get this to work
// then this will work but [...params].js wont
// export default () => <h1>Notes Page</h1>


import { useRouter } from 'next/router'
//params Catch-all routes
export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Note: {id} </h1>
  )
}
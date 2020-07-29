import React from 'react'

import { useRouter } from 'next/router'
//params Catch-all routes
export default () => {
  const router = useRouter()
  //params going to be an array of all the matching
  //paramas that match in order that you routing to
  // /notes/1/2/3/4
  const { params }= router.query
    console.log(params)
  return (
    <h1>Note</h1>
  )
}
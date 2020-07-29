import React from 'react'
import { useRouter } from 'next/router'
//params Catch-all routes
export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Note: {id} </h1>
  )
}
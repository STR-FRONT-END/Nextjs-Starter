/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotePage = () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>
  )
}

export default NotePage;


// import React from 'react';
// import { useRouter } from 'next/router'
// import Link from 'next/link';

// const NotePage = () => {
//     const router = useRouter()//gives us the actual router
//     console.log(router);//you will see the id from the path on th query object
//     const { id }= router.query// dynamically accesses the id 
  
//     return (
//       <div>
//         <h1>Note: {id} </h1>
//         <Link href="/notes">
//           <a>Notes</a>
//         </Link>
//       </div>
//     )
// }

// export default NotePage


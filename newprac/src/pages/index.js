/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Pages = ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)
export default Pages
 

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'My First Nextjs App'
      }
    }
  }
}





// const Pages = () => {
//   return (
//   <div sx={{ height: `calc(100vh - 60px)`}}>
//     <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
//       <h1 sx={{fontSize: 8, my: 0}}>Note Taking App.</h1>
//     </div>
//   </div> 
// )
// }
// export default Pages







// export function getStaticProps({params}) {
//   console.log(context);
//   return {
//       props: {}
//   }
// }



// import React from 'react';
// import Link from 'next/link';

// import '../styles.module.css'
// const Page = () => {
//   return (
//     <div >
//       <h1>Index Page</h1>
//       <Link href = '/notes'>
//         <a>
//           Notes
//         </a>
//         </Link>
//         <br/>
//         <Link href = '/users'>
//         <a>
//           Users
//         </a>
//         </Link>
//     </div>
//   )
// }

// export default Page


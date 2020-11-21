/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Notes = ({ notes }) => {// notes now coming from getServerSideProps
  // const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div key={note.id} sx={{width: '33%', p: 2}}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
 export default Notes;


 export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/note/`)
  const {data} = await res.json()
  // console.log(data);
  return {
    props: {notes: data}
  }
}










//import React from 'react';
// const Notes = () => {
//   return (
//     <div>
//       <h1>Notes Index Page</h1>
     
      
//     </div>
//   )
// }

// export default Notes;

// import React from 'react';
// import Link from 'next/link';
// const Notes = () => {
// const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))

// return (
//   <div>
//     <h1>Notes</h1>

//     {notes.map(note => (
//       <div>
//         <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
//           <a>
//             <strong>{note.title}</strong>
//           </a>
//         </Link>
//       </div>
//     ))}
//   </div>
// )
// }

// export default Notes;



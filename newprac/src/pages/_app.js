/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import theme from '../../theme'
import Nav from '../components/nav'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>
  )
}




// import React from 'react';
// import { ThemeProvider } from 'theme-ui';
// import theme from '../../theme.js';

// export default function App({ Component, pageProps }) {
//     return(
//       <ThemeProvider theme = { theme }>
//         <Component {...pageProps} />
//       </ThemeProvider>
      
//     ) 
//   }



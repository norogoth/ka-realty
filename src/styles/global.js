import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #617dbb;
        --secondary-color: #CDEFEE;
        --secondary-highlight: #E3F9EC;
    }
   
   * {
       font-family: 'Roboto', sans-serif;
   }

   .headerImage {
       width: 20%;
       min-width: 150px;
       border-radius: .5rem;
   }

   .heroButton {
    @media screen and (max-width: 800px) {
        width: 40%;
        min-width: 180px;
    }
   }
`
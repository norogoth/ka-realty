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
       width: 17%;
       min-width: 150px;
       border-radius: .5rem;
   }

   .heroButton {
        @media screen and (max-width: 800px) {
            width: 40%;
            min-width: 180px;
        }
    }
    
    .footerImg {
        height: 100px;
   }

   .divOfInfo{
       margin: 1rem;
   }

   .sr-only {
       color: black;
   }

   .carousel {
       background-color: var(--secondary-color);
       max-width: 500px;
   }
   
   .standardButton {
        background: ${({neutral}) => (neutral? "black" : "var(--secondary-color)")};
        color: ${({neutral}) => (neutral? "white" : "black")};
        padding: ${({primary}) => (primary? "1.25rem" : ".5rem")};
        font-size: ${({primary}) => (primary? "clamp(1.2rem, 2.5vw, 2rem)" : "1rem")};
        margin: ${({primary}) => (primary? "1rem" : "0rem")};
        border-radius: .25rem;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;

        &:hover {
            background: ${({neutral}) => (neutral? "white" : "var(--secondary-highlight)")}
        }
   }

    @media screen and (max-width:650){
    }
`
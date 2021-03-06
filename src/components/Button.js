import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
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
`
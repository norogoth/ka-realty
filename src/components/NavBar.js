import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import { GlobalStyle } from '../styles/global';

const NavBar = (props) => {
    

    const data = useStaticQuery(graphql`
        query NavBarQuery {
            allBuyNavJson {
                edges {
                    node {
                    id
                    link
                    name
                    }
                }
            }
            allSellNavJson {
                edges {
                    node {
                    id
                    link
                    name
                    }
                }
            }
        }
    `)
    
    const buyNavData = data.allBuyNavJson.edges;
    const sellNavData = data.allSellNavJson.edges;
    
    const stringToObj = {
        "buy":buyNavData,
        "sell":sellNavData
    }

    function generateChildren(buyOrSellString){
        const navData = stringToObj[buyOrSellString];
        return navData.map((item, index) => {
            return <NavLink className="foo" to={item.node.link} key={item.node.id}>{item.node.name}</NavLink>
            console.log("link: ",item.node.link, "name: ",item.node.name);
        })
    }
    

    //console.log("buyNavData: ", buyNavData);
    //console.log("sellNavData: ", sellNavData);
    console.log("function return: ",generateChildren(props.buyOrSell))

    return (
        <Navigation>
        <GlobalStyle/>
            {generateChildren(props.buyOrSell)}
        </Navigation>
    )

}

export default NavBar

const Navigation = styled.div`
    background: ${"var(--secondary-color)"};
    display: flex;
    flex-direction: column;
`
const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding: .5rem;
    font-family: "quicksand bold";

    &:hover {
        background: ${"var(--secondary-highlight)"};
    }
`
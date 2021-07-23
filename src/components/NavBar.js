import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const NavBar = (props) => {
    

    console.log("NavBar is working???");

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

    console.log("buyNavData: ", buyNavData);
    console.log("sellNavData: ", sellNavData);

    const BuyNavBar = () => {

    }

    const SellNavBar = () => {
        
    }

    if (props.buyOrSell === "buy"){
        return (
            <div>
                <p>We buyin.</p>
            </div>
        )
    }
    else if (props.buyOrSell === "sell"){
        return (
            <div>
                <p>We Sellin.</p>
            </div>
        )
    }
    else {
        console.log("props.buyOrSell: ",props.buyOrSell)
        return (
            <p>uh oh . . . we made and error.</p>
        )
    }

}

export default NavBar

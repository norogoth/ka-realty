import {React, useState} from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const NavData = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allBuyNavJson {
            edges {
                node {
                id
                link
                name
                }
            }
            }
            allSellNameJson {
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
    const buy = data.allBuyNavJson.edges;
    const sell = data.allSellNavJson.edges;
}

const { Provider, Consumer } = React.createContext(NavData);

const ContextProvider = (NavData) => {
    const ContextNavData = NavData;

    let [state, setState] = useState(null);

    return (<Provider>{this.props.children}</Provider>);
}

export { Consumer as default, ContextProvider}
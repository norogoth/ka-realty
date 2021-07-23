import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ContextProvider } from "./NavContext"

import { GlobalStyle } from "../styles/global"

const MainLayout = ({children}) => {


    return (
        <>
            <GlobalStyle/>
            <ContextProvider>
                <main>{children}</main>
            </ContextProvider>
        </>
    )
}

export default MainLayout;
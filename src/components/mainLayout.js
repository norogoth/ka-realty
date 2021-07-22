import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "../styles/global"

const MainLayout = ({children}) => {
    return (
        <>
        <GlobalStyle/>
        <main>{children}</main>
        </>
    )
}

export default MainLayout;